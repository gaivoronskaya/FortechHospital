export const validateString = (string) => {
  const regex = /^(?=.*\d)[A-Za-z\d]{6,}$/;
  
  return regex.test(string);
};