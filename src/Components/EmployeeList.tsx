import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import { EmployeeModal } from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
};

export const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;
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
                    <input type="button" value="View" />
                    <input type="button" value="Edit" />
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
      <EmployeeModal />
    </div>
  );
};
