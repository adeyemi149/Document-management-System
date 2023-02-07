import axios, { Axios, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { getFileType } from "../models/types";

//Custom Hook for Fetching and Deleting Data
const useHttp = (url: string, loadOnStart: boolean = true) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<getFileType[]>([]);

  const getDocs = () => {
    setLoading(true);

    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const removeData = (id: number) => {
    axios.delete(`${url}/${id}`).then(() => {
      const del = data.filter((item) => id != item.id);
      setData(del);
    });
  };

  useEffect(() => {
    if (loadOnStart) {
      getDocs();
    } else {
      setLoading(false);
    }
  }, []);

  return [loading, data, removeData] as const;
};

export default useHttp;
