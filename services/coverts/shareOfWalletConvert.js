const formatShareOfWallet = (data, productLevel) => {
  let formated = [];
  if (data.length !== 0) {
    if (productLevel === 's') {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].subCategories.length; j++) {
          formated.push(data[i].subCategories[j]);
        }
      }
    } else formated = data;
  }
  return formated;
};

export default formatShareOfWallet;
