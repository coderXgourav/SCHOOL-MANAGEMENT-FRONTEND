import Header from "../header/Header";
import "./addStudent.css";
import { Link } from "react-router-dom";
const AddStudent = () =>{
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
        <h2>Add New Students</h2>
        <Link to={"/admin/view-student"}>
        <button id="addStudentBtn" class="btn btn-primary" style={{margin: "20px 0"}}>View Student</button></Link>
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
      <p style={{fontSize:"18px"}}>Parent/Guardian Information :</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Father's Name
        <span className="star">*</span> </span><input type="number" placeholder="Father's Name
*" /></div>
        <div style={{width:"100%"}}><span className="label">Mother's Name
        </span> <span className="star">*</span><input type="email" placeholder="Mother's Name
*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Guardian's Name  </span><input type="text" placeholder="Guardian's Name " /></div>

                <div style={{width:"100%"}}><span className="label">Father's Occupation
                </span> <span className="star">*</span><input type="email" placeholder="Father's Occupation

*" /></div>
            
        </div>

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Mother's Occupation

        <span className="star">*</span> </span><input type="text" placeholder="Mother's Occupation

*" /></div>
        <div style={{width:"100%"}}><span className="label">Parent/Guardian Phone Number
        </span> <span className="star">*</span><input type="number" placeholder="Parent/Guardian Phone Number
*" /></div>
          
            <div style={{width:"100%"}}>
                </div>

                <div style={{width:"100%"}}></div>
            
        </div>
        <div>
      <p style={{fontSize:"18px"}}>Academic Information:</p>
      </div> <br />

        <div style={{display:"flex",gap:"10px"}}>
        <div style={{width:"100%"}}> <span className="label">Previous School Name<span className="star">*</span> </span><input type="text" placeholder="Previous School Name
*" /></div>
        <div style={{width:"100%"}}><span className="label">Previous Grade/Class
        </span> <span className="star">*</span><input type="text" placeholder="Previous Grade/Class
*" /></div>
          
            <div style={{width:"100%"}}>
                <span className="label">Grade/Class for Admission <span className="star">*</span>
                </span>
                <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">V</option>
                    <option value="">V</option>
                    <option value="">VII</option>
                    <option value="">VIII</option>
                </select>
</div>

                <div style={{width:"100%"}}><span className="label">Preferred Stream/Subjects (if applicable)
                </span> <input type="text" placeholder="Preferred Stream/Subjects 

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

export default  AddStudent;