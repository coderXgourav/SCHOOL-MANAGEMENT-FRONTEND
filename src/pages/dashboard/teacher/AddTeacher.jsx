import Header from "../header/Header";
// import "./addStudent.css";
import { Link } from "react-router-dom";
const AddTeacher = () =>{
 return (
  <>
<div className="dashboard">
 <Header/>
    <div class="main-content" style={{width:"70%"}}>
        <div class="top-bar">
            <div class="">
               
            </div>
            <div class="user-profile">
                <img src="/img/logo.png" alt="User Avatar"/>
                <span>John Doe</span>
            </div>
        </div>
        <div>
        <h2>Add New Teacher</h2>
        <Link to={"/admin/view-teacher"}>
        <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>View Teachers</button></Link>
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
            <span className="label">Teacher Photo  <span className="star">*</span></span><input type="file" placeholder="Last Name*" /></div>
            <div style={{width:"100%"}}> <span className="label">Blood Group
        <span className="star">*</span> </span><input type="text" placeholder="Blood Group

*" /></div>
        </div>
        <div>
      <p style={{fontSize:"18px"}}>Contact Information :</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Phone Number <span className="star">*</span> </span><input type="number" placeholder="Phone Number*" /></div>
        <div style={{width:"100%"}}><span className="label">Email Address </span> <span className="star">*</span><input type="email" placeholder="Email Address*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Alternate Phone Number </span><input type="number" placeholder="Alternate Phone Number" /></div>

                <div style={{width:"100%"}}><span className="label">Home Address</span> <span className="star">*</span><input type="email" placeholder="Home Address
*" /></div>
            
        </div>

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">City <span className="star">*</span> </span><input type="text" placeholder="City*" /></div>
        <div style={{width:"100%"}}><span className="label">State </span> <span className="star">*</span><input type="text" placeholder="State*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Postal/Zip Code <span className="star">*</span> </span><input type="number" placeholder="Postal/Zip Code" /></div>

                <div style={{width:"100%"}}><span className="label">Country</span> <span className="star">*</span><input type="text" placeholder="Country" /></div>
        </div>




       
        <div>
      <p style={{fontSize:"18px"}}>Academic Information:</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Highest Qualification <span className="star">*</span> </span><input type="text" placeholder="Highest Qualification 
*" /></div>
        <div style={{width:"100%"}}><span className="label">Specialization/Subject Expertise
        </span> <span className="star">*</span><input type="text" placeholder="Specialization/Subject Expertise
*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">University/College Attended
                <span className="star">*</span>
                </span>
                <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">V</option>
                    <option value="">V</option>
                    <option value="">VII</option>
                    <option value="">VIII</option>
                </select>
</div>

                <div style={{width:"100%"}}><span className="label">Year of Graduation
                </span> <input type="text" placeholder="Year of Graduation 

*" /></div>
            
        </div>

        <div>
      <p style={{fontSize:"18px"}}>Work Experience
      :</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Total Years of Teaching Experience<span className="star">*</span> </span><input type="text" placeholder="Total Years of Teaching Experience 
*" /></div>
        <div style={{width:"100%"}}><span className="label">Previous School/Organization Name
        </span> <span className="star">*</span><input type="text" placeholder="Previous School/Organization Name
*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Subjects Taught
                <span className="star">*</span>
                </span>
                <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">V</option>
                    <option value="">V</option>
                    <option value="">VII</option>
                    <option value="">VIII</option>
                </select>
</div>

                <div style={{width:"100%"}}><span className="label">Reason for Leaving Previous Job </span> <input type="text" placeholder="Reason for Leaving Previous Job  

*" /></div>
            
        </div>
        <div>
      <p style={{fontSize:"18px"}}>Job Details:</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Position Applying For   <span className="star">*</span> </span><input type="text" placeholder="Position Applying For 
*" /></div>
        <div style={{width:"100%"}}><span className="label">SpeciaSubject(s) to Teach</span> <span className="star">*</span><input type="text" placeholder="Subject(s) to Teach
*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Preferred Grade Levels
                <span className="star">*</span>
                </span>
                <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">V</option>
                    <option value="">V</option>
                    <option value="">VII</option>
                    <option value="">VIII</option>
                </select>
</div>

                <div style={{width:"100%"}}><span className="label">Joining Date
                </span> <input type="text" placeholder="Joining Date 

*" /></div>
            
        </div>

        <div>
      <p style={{fontSize:"18px"}}>Login Information:</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Username
        <span className="star">*</span> </span><input type="text" placeholder="Username

*" /></div>
        <div style={{width:"100%"}}><span className="label">Password
        </span> <span className="star">*</span><input type="password" placeholder="Password
*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Confirm Password<span className="star">*</span>
                </span><input type="text" placeholder="Confirm Password
" /></div>

                <div style={{width:"100%"}}></div>
            
        </div>

     

        

      </form>

                <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>Submit Student</button>

    </div>
       
    </div>
  
</div>
</>
 )
}

export default  AddTeacher;