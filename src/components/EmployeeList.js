import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const nav=useNavigate();

    useEffect(() => {
        getEmployees()
    }, []);

    const getEmployees = () => {

        
            setEmployees(
                
                [
                    {id:1,firstName:"Nana",lastName:"Deotale",email:"test@gmail.com"},
                    {id:1,firstName:"Nikhil",lastName:"Wadatkar",email:"test1@gmail.com"},
                    {id:1,firstName:"Ankur",lastName:"Wadatkar",email:"test2@gmail.com"},
                    {id:1,firstName:"Dhanashri",lastName:"Wadatkar",email:"test@gmail.com"}
                ]
            )
            
        }


    return (
        <div className = "container">
            
            <h1 className = "text-center"> Employees List</h1>

            <div className='container'>
            <table className = "table table-striped  table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last</th>
                        <th>Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id }</td>
                                    <td> {employee.firstName }</td>
                                    <td> {employee.lastName }</td>    
                                    <td> {employee.email }</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>
            </div>
            <Link to={"/"}>Dashboard</Link>
            <button onClick={()=>nav(-1)}>Go Back Home</button>


        </div>
    );
                };
            

