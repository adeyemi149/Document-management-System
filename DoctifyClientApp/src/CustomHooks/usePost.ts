import { useState, useEffect } from "react";
import axios from "axios";

const usePost = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState("");

  const sendHttpRequest = (
    url: string,
    method: string,
    description: string,
    files: File
  ) => {
    const body = {
      description: description,
      Files: files,
    };

    axios({
      method: method,
      url: url,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return [errorMessage, sendHttpRequest, data] as const;
};

export default usePost;
