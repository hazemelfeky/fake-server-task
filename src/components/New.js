import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const New = () => {

  const [name, setName] = useState("")
  const [details, setDetails] = useState("")
  const [salary, setSalary] = useState(0)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmp = { name , salary , details }
    axios({
      url: "http://localhost:8000/employee",
      data: newEmp,
      method: "POST"
    }).then( () => history.push('/'))
  }

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" onChange={ (e) => setName(e.target.value) } /><br/>
        <label>Salary</label><br/>
        <input type="text" onChange={(e) => setSalary(e.target.value) } /><br/>
        <label>More Detials</label><br/>
        <textarea rows="5" onChange={(e) => setDetails(e.target.value) } /><br/>
        <input type="submit" />
      </form>
    </div>
  );
}
 
export default New;