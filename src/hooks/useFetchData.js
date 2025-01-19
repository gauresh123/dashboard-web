import axios from "axios";
import React, { useEffect, useState } from "react";

function getData() {
  const [data, setData] = useState(null);
  const fetchDataFromApi = async () => {
    try {
      const res = await axios.get("../ai-db.json");
      setData(res.data);
    } catch {
      console.log("err");
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);
  return { data };
}

export default getData;
