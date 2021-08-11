import { select } from 'redux-saga/effects';

export const getAccountPlans = state => state.accountPlans.data;

export const getCurrentAccountPlanId = state =>
  state.accountPlans.currentAccountPlan
    ? state.accountPlans.currentAccountPlan.sfId
    : null;

export const getCurrentAccountId = state =>
  state.accountPlans.currentAccountPlan
    ? state.accountPlans.currentAccountPlan.account.sfId
    : null;

export const getCurrentUserId = state => (state.auth.isAuth ? state.auth.user.id : null);

export function* getAccountPlanUri() {
  const accountPlanId = yield select(getCurrentAccountPlanId);
  return `account-plans/${accountPlanId}`;
}

export function* getAccountUri() {
  const accountId = yield select(getCurrentAccountId);
  return `accounts/${accountId}`;
}

export function* getCurrentUser() {
  return yield select(getCurrentUserId);
}
