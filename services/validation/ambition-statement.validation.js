import { string, object } from 'yup';

export const ambitionStatementCreate = object().shape({
  description: string()
    .trim()
    .required(),
});
