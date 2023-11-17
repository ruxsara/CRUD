import { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./Employee.type";
type Props = {
  onBackBtnClick: () => void;
  onSubmitClickhnd: (data: IEmployee) => void;
};

export const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { onBackBtnClick,onSubmitClickhnd } = props;

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
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickhnd(data);
    onBackBtnClick()
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
          <input type="button" value="Back" onClick={onBackBtnClick} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};
