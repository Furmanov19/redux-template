import { useSelector } from 'react-redux';
import financialCartTitles from 'enums/financialCartTitles.enum';

export const sliceCategories = data => {
  if (data && data.length > 9) {
    data.splice(9, data.length - 9, 'Other');
    return data;
  }
  return data;
};

export const sumCategories = data => {
  if (data) {
    data.forEach(element => {
      if (element.categories.length > 9) {
        let total = 0;
        for (let i = 9; i < element.categories.length; i++) {
          total += element.categories[i];
        }
        element.categories.splice(9, element.categories.length - 9, total);
      }
    });
    return data.map(item => ({
      ...item,
      name: item.name === 'goal' ? '18-24 month target' : item.name,
    }));
  }

  return data;
};

export function useFinancialsChartForActivity(currentTab, data, currentOption) {
  const {
    pillar2FinancialsTitle1: revenueTitle,
    pillar2FinancialsTitle2: marginTitle,
  } = useSelector(state => state.settings.globalSettings);
  let categories;
  let chartData;

  if (!data)
    return {
      revenueTitle: null,
      marginTitle: null,
      categories: null,
      chartData: null,
    };

  if (currentTab === 0) {
    if (currentOption === 'categories') {
      categories = sliceCategories(data.categories);
      chartData = sumCategories(data.revenueByCategory);
    } else if (currentOption === 'subCategories') {
      categories = sliceCategories(data.subCategories);
      chartData = sumCategories(data.revenueBySubCategory);
    } else if (currentOption === 'accounts') {
      categories = sliceCategories(data.revenueByAccount.accounts);
      chartData = sumCategories(data.revenueByAccount.data);
    }
  } else if (currentTab === 1) {
    if (currentOption === 'categories') {
      categories = sliceCategories(data.categories);
      chartData = sumCategories(data.marginByCategory);
    } else if (currentOption === 'subCategories') {
      categories = sliceCategories(data.subCategories);
      chartData = sumCategories(data.marginBySubCategory);
    } else if (currentOption === 'accounts') {
      categories = sliceCategories(data.revenueByAccount.accounts);
      chartData = sumCategories(data.marginByAccount.data);
    }
  }
  return {
    revenueTitle: revenueTitle || financialCartTitles.revenue,
    marginTitle: marginTitle || financialCartTitles.margin,
    categories,
    chartData,
  };
}
