import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  clearAccountPlansData: [],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
