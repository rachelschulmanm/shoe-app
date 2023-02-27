//return true if is full
export const checkIfDataFull = (value) => {
  const regex = /\S+/;
  return regex.test(value);
};
// return true if a number
export const checkIfNumber = (value) => {
  const regex = /^\d+$/;
  console.log(value, regex.test(value));
  return regex.test(value);
};
