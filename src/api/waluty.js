const url = `${process.env.REACT_APP_API_PATH}/waluty`;

export const walutyDataSource = (select) => ({
  store: {
    type: 'odata',
    url,
    version: 4,
    key: 'Id'
    // errorHandler: function ({ errorDetails, httpStatus, requestOptions }) {
    //   console.log(errorDetails);
    //   console.log(httpStatus);
    //   console.log(requestOptions);
    // }
  },
  select
});
