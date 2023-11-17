import "./Home.style.css";
import { useState } from "react";
import { IEmployee, dummyEmployeeList } from "./Employee.type";
import {EmployeeList} from "./EmployeeList";
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );

  return (
    <>
      <article className="article-header">
        <header>
          <h1> React Simple CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        <div>this is Content part</div>
        <EmployeeList/>
      </section>
    </>
  )
};
export default Home;
