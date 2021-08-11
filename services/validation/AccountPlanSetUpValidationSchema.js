import { string, object, date, number } from 'yup';

export const accountPlanEdit = object().shape({
  kickOffDate: date()
    .nullable(true)
    .when('priorityLevel', {
      is: priorityLevel => priorityLevel > 0,
      then: date().required(),
    }),
  nextReviewDate: date()
    .nullable(true)
    .when('priorityLevel', {
      is: priorityLevel => priorityLevel > 0,
      then: date().required(),
    }),
  priorityLevel: number().required(),
});

export const accountPlanCreate = object().shape({
  priorityLevel: number().required(),
  name: string().required(),
  accountId: string().required(),
  entityName: string().required(),
  kickOffDate: date()
    .nullable(true)
    .when('priorityLevel', {
      is: priorityLevel => priorityLevel > 0,
      then: date().required(),
    }),
  nextReviewDate: date()
    .nullable(true)
    .when('priorityLevel', {
      is: priorityLevel => priorityLevel > 0,
      then: date().required(),
    }),
});
