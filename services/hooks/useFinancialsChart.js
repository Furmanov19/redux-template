import { useSelector } from 'react-redux';
import financialCartTitles from 'enums/financialCartTitles.enum';
import { sumCategories, sliceCategories } from './useFinancialsChartForActivity';

export function useFinancialsChart(currentTab, data) {
  const {
    pillar2Revenue: currentRevenueFilter,
    pillar2Margin: currentMarginFilter,
    pillar2FinancialsTitle1: revenueTitle,
    pillar2FinancialsTitle2: marginTitle,
  } = useSelector(state => state.settings.globalSettings);

  let categories;
  let chartData;

  if (currentTab === 0) {
    if (currentRevenueFilter === 'c') {
      categories = data.categories;
      chartData = data.revenueByCategory;
    } else if (currentRevenueFilter === 's') {
      categories = data.subCategories;
      chartData = data.revenueBySubCategory;
    }
  } else if (currentTab === 1) {
    if (currentMarginFilter === 'c') {
      categories = data.categories;
      chartData = data.marginByCategory;
    } else if (currentMarginFilter === 's') {
      categories = data.subCategories;
      chartData = data.marginBySubCategory;
    }
  }

  return {
    revenueTitle: revenueTitle || financialCartTitles.revenue,
    marginTitle: marginTitle || financialCartTitles.margin,
    categories: sliceCategories(categories),
    chartData: sumCategories(chartData),
  };
}
