const colors = [
  '#0e1a40',
  '#2f3a70',
  '#4c5aa0',
  '#4861cb',
  '#989fb4',
  '#aab5d6',
  '#d3daef',
  '#8faaff',
  '#0d47ff',
  '#0029ac',
  '#132252',
  '#0e1a40',
  '#2f3a70',
  '#4c5aa0',
  '#4861cb',
  '#989fb4',
  '#aab5d6',
  '#d3daef',
  '#8faaff',
  '#0d47ff',
  '#0029ac',
  '#132252',
];

export const convert = data => {
  if (data[0].zIndex) return data;
  const convertData = new Array(...data).sort((a, b) => {
    if (a.width < b.width) return -1;
    if (a.width > b.width) return 1;
    return 0;
  });

  for (let index = 0; index < convertData.length; index++) {
    convertData[index].zIndex = convertData.length + 20 - index;
    convertData[index].color = colors[index];
  }

  return convertData;
};

export const addColor = data => {
  if (data.length === 0) {
    return data;
  }

  if (data[0].color) return data;
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: colors[index],
  }));

  return dataWithColors;
};
