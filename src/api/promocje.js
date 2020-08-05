const url = `${process.env.REACT_APP_API_PATH}/promocje`;

export const promocjeDataSource = (select) => ({
  store: {
    type: 'odata',
    url,
    version: 4,
    key: 'Id'
  },
  select
});
