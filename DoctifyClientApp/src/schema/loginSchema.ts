import * as yup from "yup";

const passwordRules =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("Please enter a password"),
});
