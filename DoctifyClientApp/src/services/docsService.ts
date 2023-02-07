import axios from "axios";
import { toast } from "react-toastify";
import { setLoader } from "../features/docsSlice";
import { addFileType } from "../models/types";
import { getFileType } from "../models/types";

class DocsService {
  http = axios.create({
    baseURL: "https://localhost:7214/api/Docs",
  });

  async addFiles(description: string, Files: string) {
    try {
      const response = await axios.post<addFileType>(
        "https://localhost:7214/api/Docs",
        {
          description,
          Files,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (response.status === 200) {
        toast.success("File Added", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
        });
      }
      const respdata = response.data;
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllFiles() {
    setLoader(true);
    try {
      const response = await this.http.get<Array<getFileType>>("getDocs", {
        headers: { "Content-type": "application/json" },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  async deleteFile(id: number) {
    const userPrompt = confirm("Are you sure you want to Delete File");
    if (userPrompt) {
      const response = await this.http.delete("delete/" + id);
      return response.data;
    }
  }
}

export default new DocsService();
