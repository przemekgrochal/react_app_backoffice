const url = `${process.env.REACT_APP_API_PATH}/enums`;

const getEnums = () => fetch(url);

export default { getEnums };
