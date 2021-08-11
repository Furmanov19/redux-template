import { string, object } from 'yup';

export const addPowerBaseValidation = object().shape({
  contact: string().required('Please, pick contact'),
  priorityLevel: string().required('Please, pick priority level'),
  decisionRight: string().required('Please, pick decision right'),
  type: string().required('Please, pick promoter status'),
  ownerId: string().required('Please, pick relationship owner'),
  priorityTopics: string(),
});
