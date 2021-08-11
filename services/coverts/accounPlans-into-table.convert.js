import pick from 'lodash/pick';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import { formatUser } from 'src/utils/getFullNameMention';
import { srtDateToDateFormat } from 'services/coverts/date.convert';
import { isMatchData } from './dataSearch';

const convertPriorityLevel = level => {
  const priorityLevel = level > 2 ? null : level;
  return priorityLevel ? `P${priorityLevel}` : 'N/A';
};

export const calculateNextReviewDate = (date, countMonth) => {
  return moment(date)
    .add(countMonth, 'month')
    .format('MM/DD/YYYY');
};

export const convertAccountPlansIntoTableDataSettings = (actionPlans, currentUserId) => {
  return actionPlans.map(plan => {
    return {
      ...plan,
      updated_at: srtDateToDateFormat(plan.updated_at),
      kickOffDate: plan.kickOffDate ? srtDateToDateFormat(plan.kickOffDate) : null,
      nextReviewDate: plan.nextReviewDate
        ? srtDateToDateFormat(plan.nextReviewDate)
        : null,
      primaryManager: formatUser(plan.primaryManager, currentUserId),
      primarySalesRep: formatUser(plan.primarySalesRep, currentUserId),
    };
  });
};

export const convertAccountPlansIntoTableData = (actionPlans, currentUserId) => {
  return actionPlans.map(plan => ({
    ...plan,
    status: plan.status || '',
    priorityLevel: convertPriorityLevel(plan.priorityLevel),
    updated_at: plan.updated_at ? srtDateToDateFormat(plan.updated_at) : null,
    nextReviewDate: plan.nextReviewDate ? srtDateToDateFormat(plan.nextReviewDate) : null,
    primaryManager: formatUser(plan.primaryManager, currentUserId),
    primarySalesRep: formatUser(plan.primarySalesRep, currentUserId),
  }));
};

export const dataSampling = (outcomingFields, plays) => {
  const result = plays.map(object => ({
    ...object,
    actions: object.actions.map(i => pick(i, outcomingFields)),
  }));
  return result;
};

export const sortingAccountPlans = (accountPlans, searchString, filters) => {
  let filteredItems = [];

  if (accountPlans.length) {
    if (!searchString) {
      filteredItems = accountPlans;
    } else {
      filteredItems = accountPlans.filter(
        item =>
          item.account.name.toLowerCase().includes(searchString.toLowerCase().trim()) ||
          item.account.entityName
            .toLowerCase()
            .includes(searchString.toLowerCase().trim())
      );
    }
  }

  if (!isEmpty(filters)) {
    filteredItems = filters.priorityLevel.length
      ? filteredItems.filter(item => {
          return filters.priorityLevel.includes(`${item.priorityLevel}`);
        })
      : filteredItems;

    filteredItems = filters.kickOffDateRange
      ? filteredItems.filter(item => {
          return isMatchData(filters.kickOffDateRange, item.kickOffDate);
        })
      : filteredItems;

    filteredItems = filters.nextReviewDateRange
      ? filteredItems.filter(item => {
          return isMatchData(filters.nextReviewDateRange, item.nextReviewDate);
        })
      : filteredItems;
  }

  return filteredItems;
};
