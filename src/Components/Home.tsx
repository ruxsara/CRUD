import "./Home.style.css";
import { useEffect, useState } from "react";
import { IEmployee, PageEnum } from "./Employee.type";
import { EmployeeList } from "./EmployeeList";
import { AddEmployee } from "./AddEmployee";
import { EditEmployee } from "./EditEmployee";
const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

useEffect(()=>{
 const listInString= window.localStorage.getItem("EmployeeList")
 if(listInString){
  _setEmployeeList(JSON.parse(listInString))
 }
},[])

  const onAddEmployeeClick = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };

  const addEmployeeHnd = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };

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
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClick={showListPage}
            onSubmitClickhnd={addEmployeeHnd}
          />
        )}
        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};
export default Home;
