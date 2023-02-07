import * as yup from "yup";

const passwordRules =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/;

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("Please enter firstName"),
  lastName: yup.string().required("Please enter lastName"),
  phoneNumber: yup
    .number()
    .min(11, "Please enter a valid phoneNumber")
    .positive()
    .required("Please enter a phoneNumber"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Password doesn't match"),
});
