import Login from "./login";

export default interface Register extends Login {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
}
