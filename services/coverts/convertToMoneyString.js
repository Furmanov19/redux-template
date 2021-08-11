import currencyCodeConvert from './currencyCodeConvert';

function convertToMoneyStr(currency, value) {
  const currencySymbol = currencyCodeConvert(currency);
  return `${currencySymbol} ${Math.round(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}`;
}

export default convertToMoneyStr;
