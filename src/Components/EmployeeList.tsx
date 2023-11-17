import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import { EmployeeModal } from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

export const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd,onEdit } = props;

  const [showModal,setShowModal]= useState(false)

  const viewEmployee=( data:IEmployee)=>{
    setDataToShow(data)
    setShowModal(true)
  }


  const onCloseModal=()=> setShowModal(false)

  const [dataToShow,setDataToShow]=useState(null as IEmployee | null)
  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName} `}</td>
                <td>{employee.email}</td>
                <td>
                  <div>
                    <input type="button" value="View" onClick={()=>viewEmployee(employee)} />
                    <input type="button" value="Edit" onClick={()=> onEdit(employee )} />
                    <input
                      type="button"
                      value="Delete"
                      onClick={()=>{onDeleteClickHnd(employee)}}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && dataToShow !== null && (<EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};
