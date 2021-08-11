import { string, number, object, array } from 'yup';

export const shareOfWalletValidationSubLevel = object().shape({
  wallets: array().of(
    object().shape({
      categoryId: string().required('Required'),
      subCategories: array().of(
        object().shape({
          subCategoryId: string().required('Required'),
          share: number()
            .min(0)
            .max(100)
            .required('Required'),
        })
      ),
    })
  ),
});

export const shareOfWalletValidation = object().shape({
  wallets: array().of(
    object().shape({
      categoryId: string().required('Required'),
      share: number()
        .min(0)
        .max(100)
        .required('Required'),
    })
  ),
});
