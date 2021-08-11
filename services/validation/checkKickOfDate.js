export default kickOffDate => {
  return new Date(kickOffDate).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0);
};
