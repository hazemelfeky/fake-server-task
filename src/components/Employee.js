import { Link } from "react-router-dom";

const Employee = ({id, name, salary}) => {

  return (
    <Link to={`/empolyee/${id}`}>
      <div className="Employee">
        <h2>{name}</h2>
        <p>Salary : {salary}$</p>
      </div>
    </Link>
  );
}
 
export default Employee;