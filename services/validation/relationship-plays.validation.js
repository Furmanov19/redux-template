import { string, object, date, array } from 'yup';
import moment from 'moment';

export const relationshipCreate = object().shape({
  name: string()
    .required()
    .max(80),
  description: string()
    .max(2048)
    .required(),
  contactId: string()
    .required()
    .length(18),
  targetDate: date()
    .required()
    .min(moment()),
  resourcesRequired: array()
    .of(string())
    .min(0),
});

export const relationshipEdit = object().shape({
  name: string()
    .required()
    .max(80),
  description: string()
    .max(2048)
    .required(),
  contactId: string()
    .required()
    .length(18),
  targetDate: date()
    .required()
    .min(moment()),
  resourcesRequired: array()
    .of(string())
    .min(0),
});

export const relationshipCreateKey = object().shape({
  name: string()
    .max(80)
    .required(),
  description: string()
    .max(2048)
    .required(),
  ownerId: string()
    .required()
    .length(18),
  targetDate: date()
    .required()
    .min(moment()),
});

export const relationshipEditKey = object().shape({
  name: string()
    .max(80)
    .required(),
  description: string()
    .max(2048)
    .required(),
  ownerId: string()
    .required()
    .length(18),
  targetDate: string().required(),
});
