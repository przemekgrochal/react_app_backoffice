const url = `${process.env.REACT_APP_API_PATH}/sklepy`;

export const sklepyDataSource = (select, key) => ({
  store: {
    type: 'odata',
    url,
    version: 4,
    key: key || 'Id'
  },
  select
});
