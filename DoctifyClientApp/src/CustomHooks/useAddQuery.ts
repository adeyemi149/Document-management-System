import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { json } from "react-router-dom";
import { toast } from "react-toastify";
import { getFileType } from "../models/types";

const useQuery = <T>() => {
  const [response, setResponse] = useState<getFileType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const addDocs = (
    url: string,
    method: string,
    description: string,
    files: any[]
  ) => {
    axios({
      method: method,
      url: url,
      data: {
        description: description,
        files: files,
      },
    })
      .then((response) => {
        setLoading(true);
        if (response.status === 200) {
          toast.success("File Added", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
          });
          setResponse(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return [response, loading, addDocs, error] as const;
};

export default useQuery;
