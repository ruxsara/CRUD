import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import { useState } from "react";

type Props = {  data: IEmployee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd:(data:IEmployee)=>void


};

export const EditEmployee = (props: Props) => {
  const { data,onBackBtnClickHnd,onUpdateClickHnd } = props;
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const onFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };
  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickhnd = (e:any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd()
  };

  return (
    <div className="form-container">
      <div>Add Employee Form</div>
      <form onSubmit={onSubmitBtnClickhnd}>
        <div>
          <label> First Name:</label>
          <input type="text" value={firstName} onChange={onFirstNameChange} />
        </div>

        <div>
          <label> Last Name:</label>
          <input type="text" value={lastName} onChange={onLastNameChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={onEmailChange} />
        </div>

        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};
