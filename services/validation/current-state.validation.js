import { string, object, number } from 'yup';

export const currentStateValidation = object().shape({
  score: number()
    .moreThan(0)
    .required(),
  strength: number().required(),
  description: string().required(),
});
