import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const Details = () => {

  const {id} = useParams()
  const history = useHistory()

  const [data, setData] = useState({})

  const fetching = async () => {
    const response = await axios.get("http://localhost:8000/employee/" + id).catch(err => console.log(err))
    if (response) {
      setData(response.data);
    }
  }

  const handleDelete = () => {
    axios.delete("http://localhost:8000/employee/" + id).then( () => history.push("/"))
  }

  useEffect( () => {
    fetching()
  },[])

  return (
    <div className="details">
      <div className="btns">
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/update/${id}`}>
          <button>Edit</button>
        </Link>
      </div>
      <h2>Details - {data.name}</h2>
      <p>Salary : {data.salary}$</p>
      {data.details && <p>More Details: <br />{data.details}</p>}
    </div>
  );
}

export default Details;