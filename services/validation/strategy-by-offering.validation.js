import { string, object, array } from 'yup';

export const strategyByOfferingValidation = object().shape({
  strategies: array().of(
    object().shape({
      productId: string().required('Required'),
      description: string().required('Required'),
    })
  ),
});
