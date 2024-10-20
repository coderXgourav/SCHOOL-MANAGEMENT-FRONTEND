import Header from "../header/Header";
import "./addStudent.css";
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
      <div>
      <p style={{fontSize:"18px"}}>Basic Information :</p>
      </div> <br />
        <div style={{display:"flex",gap:"10px"}}>
            <div style={{width:"100%"}}>
                <span className="label">First Name <span className="star">*</span></span><input type="text" placeholder="First Name*" /></div>
            <div style={{width:"100%"}}>
            <span className="label">Middle Name</span><input type="text" placeholder="Middle Name" /></div>
            <div style={{width:"100%"}}>
            <span className="label">Last Name <span className="star">*</span></span><input type="text" placeholder="Last Name*" /></div>
            <div style={{width:"100%"}}> <span className="label">Date of Birth <span className="star">*</span></span><input type="date" /></div>
        </div>

        <div style={{display:"flex",gap:"10px"}}>
            <div style={{width:"100%"}}>
                <span className="label">Gander <span className="star">*</span></span><select name="" id="">
                    <option value="">Select Gander</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select></div>
            <div style={{width:"100%"}}>
            <span className="label">Nationality <span className="star">*</span></span><input type="text" placeholder="Nationality" /></div>
            <div style={{width:"100%"}}>
            <span className="label">Student Photo  <span className="star">*</span></span><input type="file" placeholder="Last Name*" /></div>
            <div style={{width:"100%"}}> <div><img src="" alt="" /></div></div>
        </div>

        <div>
      <p style={{fontSize:"18px"}}>Contact Information :</p>
      </div> <br />
        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Phone Number <span className="star">*</span> </span><input type="number" placeholder="Phone Number*" /></div>
        <div style={{width:"100%"}}><span className="label">Email Address </span> <span className="star">*</span><input type="email" placeholder="Email Address*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Alternate Phone Number </span><input type="text" placeholder="Alternate Phone Number" /></div>

                <div style={{width:"100%"}}><span className="label">Home Address</span> <span className="star">*</span><input type="email" placeholder="Home Address
*" /></div>
            
        </div>
        

      </form>

                <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>Submit Student</button>
      <div style={{width:"100%"}}>
                <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">V</option>
                    <option value="">V</option>
                    <option value="">VII</option>
                    <option value="">VIII</option>
                </select>
                </div>
    </div>
       
    </div>
  
</div>
    </>

 )
}

export default  AddStudent;