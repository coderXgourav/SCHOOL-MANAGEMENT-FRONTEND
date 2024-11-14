import "../student/ViewStudent";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const ViewClass = () =>{

const apiUri = process.env.REACT_APP_API_URI; 

useEffect(()=>{

fetch(`${apiUri}/class/view-classes`,{
    method:"GET",
    headers:{
        authorization:"abc"
    }
}).then(()=>{

}).catch(error=>{
alert("Technical Issue");
});

},[]);

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
        <h2>View Classes</h2>
        <Link to="/admin/add-class">
        <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>Add New Class</button></Link>
        <table class="students-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Class Name</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Alice Johnson</td>
                    <td>10th</td>
                    <td>alice.j@example.com</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Bob Smith</td>
                    <td>11th</td>
                    <td>bob.s@example.com</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Charlie Brown</td>
                    <td>9th</td>
                    <td>charlie.b@example.com</td>
                </tr>
            </tbody>
        </table>
    </div>
       
    </div>
  
</div>
    </>

 )
}

export default ViewClass;