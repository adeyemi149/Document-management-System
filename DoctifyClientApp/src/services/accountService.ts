import axios from "axios";
import Login from "../models/login";
import Register from "../models/register";
import { useAppDispatch } from "../store/hook";
import { setNavigateUser } from "../features/authSlice";

class AccountService {
  http = axios.create({
    baseURL: "https://localhost:7214/api/Account",
  });

  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string
  ) {
    // try {
    //   const dispatch = useAppDispatch();
    //   const response = await this.http.post<Register>("/Register", {
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //     phoneNumber,
    //   });
    //   console.log(response);
    //   if (response.status === 200) {
    //     dispatch(setNavigateUser(true));
    //   }
    //   const respdata = await response.data;
    //   console.log(respdata);
    //   return respdata;
    // } catch (error) {}
  }
}

export default new AccountService();
