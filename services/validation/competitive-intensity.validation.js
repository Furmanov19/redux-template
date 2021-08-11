import { string, number, object, array } from 'yup';

export const competitiveIntensityValidation = object().shape({
  competitor: string().required(),
  categories: array().of(
    object().shape({
      category: string().required(),
      subCategory: string().required(),
      penetration: string().required(),
      trajectory: string().required(),
      spend: number()
        .transform(cv => (Number.isNaN(cv) ? null : cv))
        .nullable()
        .min(0)
        .max(999999999),
      comment: string()
        .max(2048)
        .required(),
    })
  ),
});

export const competitiveIntensityOneValidation = object().shape({
  category: string().required(),
  subCategory: string().required(),
  penetration: string().required(),
  trajectory: string().required(),
  spend: number()
    .transform(cv => (Number.isNaN(cv) ? null : cv))
    .nullable()
    .min(0)
    .max(999999999),
  comment: string()
    .max(2048)
    .required(),
});

export const competitiveIntensityByCompetitorValidation = object().shape({
  competitor: string().required(),
  categories: array().of(
    object().shape({
      categoryid: string().required(),
      subcategoryid: string().required(),
      penetration: string().required(),
      trajectory: string().required(),
      spend: number()
        .transform(cv => (Number.isNaN(cv) ? null : cv))
        .nullable()
        .min(0)
        .max(999999999),
      comment: string()
        .max(2048)
        .required(),
    })
  ),
});
