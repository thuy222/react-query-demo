import { useState, useEffect } from "react";
import axios from "axios";

const Vm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/vm")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>VM Page</h2>
      {data.map((vm) => {
        return <div key={vm.name}>{vm.name}</div>;
      })}
    </>
  );
};

export default Vm;
