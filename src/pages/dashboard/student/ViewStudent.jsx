import "./viewStudent.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";
const ViewStudent = () =>{
 return (
  <>
<div className="dashboard">
 <Header/>
    <div class="main-content">
        <div class="top-bar">
            <div class="">
               
            </div>
            <div class="user-profile">
                <img src="/img/logo.png" alt="User Avatar"/>
                <span>John Doe</span>
            </div>
        </div>
        <div>
        <h2>View Students</h2>
        <Link to={"/admin/add-student"}>
        <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>Add New Student</button>
        </Link>
        <table class="students-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Alice Johnson</td>
                    <td>10th</td>
                    <td>alice.j@example.com</td>
                    <td>(555) 123-4567</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Bob Smith</td>
                    <td>11th</td>
                    <td>bob.s@example.com</td>
                    <td>(555) 987-6543</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Charlie Brown</td>
                    <td>9th</td>
                    <td>charlie.b@example.com</td>
                    <td>(555) 246-8135</td>
                </tr>
            </tbody>
        </table>
    </div>
       
    </div>
  
</div>
    </>

 )
}

export default  ViewStudent;