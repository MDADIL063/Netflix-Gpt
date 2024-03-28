export const CheckValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name);

  if (!isNameValid) return "Please Enter Valid Name";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
