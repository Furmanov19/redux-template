import getSymbolFromCurrency from 'currency-symbol-map';

function currencyCodeConvert(currencyText) {
  if (currencyText) {
    const currencySymbol = getSymbolFromCurrency(currencyText);
    return currencySymbol || currencyText;
  }
  return currencyText;
}

export default currencyCodeConvert;
