import "./Home.style.css";
import { useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList } from "./Employee.type";
import { EmployeeList } from "./EmployeeList";
import { AddEmployee } from "./AddEmployee";
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);

  const onAddEmployeeClick = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployeeHnd=(data:IEmployee)=>{
setEmployeeList([...employeeList,data])
  }

  const deleteEmployee=(data:IEmployee)=>{
    const indexToDelete=employeeList.indexOf(data)
    const tempList=[...employeeList]

    tempList.splice(indexToDelete,1)
    setEmployeeList(tempList)

  }



  return (
    <>
      <article className="article-header">
        <header>
          <h1> React Simple CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClick}
              className="add-employee-btn"
            />
            <EmployeeList list={employeeList}  onDeleteClickHnd={deleteEmployee}/>
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddEmployee onBackBtnClick={showListPage} onSubmitClickhnd={addEmployeeHnd} />
        )}
      </section>
    </>
  );
};
export default Home;
