import get from 'lodash/get';
import sortByOrder from 'lodash/orderBy';
import moment from 'moment';

export const isMatchData = (filterType, original) => {
  const isFilledFrom = !!filterType.from;
  const isFilledTo = !!filterType.to;

  const dateFormat = 'MM/DD/YYYY';

  const from = isFilledFrom ? moment(filterType.from, dateFormat) : null;
  const originalDate = moment(original, dateFormat);
  const to = isFilledTo ? moment(filterType.to, dateFormat) : null;

  if (isFilledFrom && isFilledTo)
    return from.diff(originalDate, 'days') <= 0 && to.diff(originalDate, 'days') >= 0;
  if (isFilledFrom) return from.diff(originalDate, 'days') <= 0;
  if (isFilledTo) return to.diff(originalDate, 'days') >= 0;

  return true;
};

const filterData = ({
  data,
  searchString,
  searchValue,
  sortBy = null,
  sortOptions = [],
  filters,
}) => {
  let filteredItems = [];

  if (data.length) {
    if (!searchString) {
      filteredItems = data;
    } else if (Array.isArray(searchValue)) {
      filteredItems = data.filter(item =>
        searchValue.some(el =>
          get(item, el) === undefined || get(item, el) === null
            ? ''.includes(searchString.toLowerCase().trim())
            : get(item, el)
                .toLowerCase()
                .includes(searchString.toLowerCase().trim())
        )
      );
    } else {
      filteredItems = data.filter(item =>
        get(item, searchValue)
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      );
    }

    if (sortBy) {
      filteredItems = sortByOrder(
        filteredItems,
        [sortOptions[sortBy].value],
        [sortOptions[sortBy].sort]
      );
    }
    if (filters) {
      filteredItems = filteredItems.filter(item => {
        return Object.keys(filters).every(key => {
          if (!filters[key].length) return true;

          // For "from-to" dates filtering
          // @dateFilter – array of filter property
          // @original – accessor string to own date property in item
          if (Array.isArray(filters[key]) && key === 'dateFilter') {
            return filters[key].every(dateFilter =>
              isMatchData(dateFilter, item[dateFilter.original])
            );
          }

          if (Array.isArray(item[key])) {
            return item[key].some(keyEle => filters[key].includes(keyEle));
          }

          return filters[key].includes(`${item[key]}`.toLowerCase().trim());
        });
      });
    }
  }
  return filteredItems;
};

export default filterData;
