import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./Employee"

const Home = () => {

  const [data, setData] = useState([])

  const fetching = async () => {
    const response = await axios.get("http://localhost:8000/employee").catch(err => console.log(err))
    if (response) {
      setData(response.data);
    }
  }

  useEffect( () => {
    fetching()
  }, [])
  return (
    <div>
      {data.map(emp => <Employee key={emp.id} id={emp.id} name={emp.name} salary={emp.salary} />)}
    </div>
  );
}

export default Home;