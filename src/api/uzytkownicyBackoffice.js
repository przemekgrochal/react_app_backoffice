const url = `${process.env.REACT_APP_API_PATH}/uzytkownicyBackOffice`;

export const uzytkownicyBackofficeDataSource = (select) => {
  return {
    store: {
      type: 'odata',
      url,
      version: 4,
      key: 'Id',
      beforeSend: (e) => {
        if (e.payload) {
          const data = e.payload;

          console.log(e.payload.hasOwnProperty('HasloNowe'));

          let dataToSend = {
            ...data,
            Role: ''
          };

          Object.keys(data).forEach((item, index) => {
            if (item.startsWith('rola_')) {
              dataToSend.Role += item.substring(5) + ', ';
            }
          });

          for (let value in dataToSend) {
            if (dataToSend[value] === true) {
              delete dataToSend[value];
            }
          }

          if (dataToSend.Role.includes(', ')) {
            const str = dataToSend.Role.slice(0, dataToSend.Role.length - 2);
            dataToSend.Role = str;
          }

          if (window.localStorage.getItem('generatePassword')) {
            let generatePassword = window.localStorage.getItem(
              'generatePassword'
            );

            if (e.payload.hasOwnProperty('HasloNowe') === false) {
              dataToSend.HasloNowe = generatePassword;
            }
          }

          if (dataToSend.Role === '') {
            delete dataToSend.Role;
          }

          e.payload = dataToSend;

          console.log(e.payload);
        }
      }
    },
    select
  };
};
