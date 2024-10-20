import Header from "../header/Header";
const AddStudent = () =>{
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
        <h2>Add New Students</h2>
        <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>View Student</button>
      <form action="">
        <div >
            <div style={{width:"60%"}}><input type="text" placeholder="Student Name" /></div>
            <div style={{width:"60%"}}>
                <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">V</option>
                    <option value="">V</option>
                    <option value="">VII</option>
                    <option value="">VIII</option>
                </select>
                </div>
            <div style={{width:"60%"}}><input type="number" placeholder="Phone Number" /></div>
            <div style={{width:"60%"}}><input type="email" placeholder="Email Address" /></div>
        </div>
      </form>
    </div>
       
    </div>
  
</div>
    </>

 )
}

export default  AddStudent;