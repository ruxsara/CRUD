 export interface IEmployee{
    id:string,
    firstName:string,
    lastName:string,
    email:string
}

 export const dummyEmployeeList:IEmployee[] =[
{
    id: new Date().toJSON().toString(),
    firstName: "dummy1",
    lastName: "dummy11",
    email:"dummy@gamil.com",
}
]

export enum PageEnum{
    list,add,
}