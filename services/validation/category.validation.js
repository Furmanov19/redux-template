import { string, object } from 'yup';

export const categoryValidation = object().shape({
  category: string().required(),
  subCategory: string(),
});
