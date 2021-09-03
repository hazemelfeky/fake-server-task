import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Update = () => {

  const {id} = useParams()

  const [name, setName] = useState("")
  const [details, setDetails] = useState("")
  const [salary, setSalary] = useState(0)
  const history = useHistory()

  const fetching = async () => {
    const response = await axios.get("http://localhost:8000/employee/" + id).catch(err => console.log(err))
    if (response) {
      setName(response.data.name);
      setDetails(response.data.details);
      setSalary(response.data.salary);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmp = { name , salary , details }
    axios({
      url: "http://localhost:8000/employee/"+id,
      data: newEmp,
      method: "PUT"
    }).then( () => history.push('/'))
  }

  useEffect( () => {
    fetching()
  },[])

  return (
    <div className="new">
      <h2>Update {name && (name)}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" value={name} onChange={ (e) => setName(e.target.value) } /><br/>
        <label>Salary</label><br/>
        <input type="text" value={salary} onChange={(e) => setSalary(e.target.value) } /><br/>
        <label>More Detials</label><br/>
        <textarea rows="5" value={details} onChange={(e) => setDetails(e.target.value) } /><br/>
        <input type="submit" />
      </form>
    </div>
  );
}
 
export default Update;