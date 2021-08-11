import moment from 'moment';
import { string, object, array, number, date } from 'yup';

export const playCreate = object().shape({
  name: string()
    .required()
    .min(1)
    .max(80)
    .trim(),
  rationale: string()
    .min(1)
    .max(2048)
    .trim()
    .required(),
  targetDate: date()
    .min(moment())
    .required(),
  value: number()
    .min(0)
    .max(999999999)
    .test('test-name', 'only two  decimal places are allowed', value => {
      const decimals = value ? value.toString().split('.')[1] : '';

      if (decimals) {
        return decimals.length <= 2;
      }

      return true;
    })
    .required(),
  description: string()
    .min(1)
    .max(150)
    .required()
    .trim(),
  applicableProducts: array()
    .of(string())
    .min(1)
    .required(),
  resourcesRequired: array()
    .of(string())
    .min(0),
});

export const playCreateKey = object().shape({
  name: string()
    .required()
    .trim()
    .min(1)
    .max(80),
  targetDate: date()
    .min(moment())
    .required(),
  description: string()
    .required()
    .trim()
    .min(1)
    .max(150),
  owner: string().required(),
});
