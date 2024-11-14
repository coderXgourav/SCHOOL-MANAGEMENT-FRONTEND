import { useState } from "react";
import Header from "../header/Header";
// import "./addStudent.css";
import { Link } from "react-router-dom";
const AddClass = () => {
  const [className, setClass] = useState("");
  const [section, setSection] = useState("");
  const [sectionForm, setSectionForm] = useState([1]);
  const formHandler = (e) =>{
    e.preventDefault();

  }
  const AddSection = ()=>{
    setSectionForm([...sectionForm,2]);
  }
  const RemoveSection =() =>{
  }

  const textChange = (e) =>{
    console.log(e);
   const {name,value} = e.target;
   if(name=="className"){
    setClass(value);
   }else if(name=="section"){
    setSection(value);
   }

  }

  return (
    <>
      <div className="dashboard">
        <Header />
        <div class="main-content" style={{ width: "70%" }}>
          <div class="top-bar">
            <div class=""></div>
            <div class="user-profile">
              <img src="/img/logo.png" alt="User Avatar" />
              <span>John Doe</span>
            </div>
          </div>
          <div>
            <h2>Add New Class</h2>
            <Link to={"/admin/view-class"}>
              <button
                id="addStudentBtn"
                class="btn btn-primary"
                style={{ margin: "20px 0" }}
              >
                View Classes
              </button>
            </Link>
            <form onSubmit={formHandler}>
              <div>
                <p style={{ fontSize: "18px" }}>Class Information :</p>
              </div>{" "}
              <br />
              <div style={{ width: "60%" }}>
                <span className="label">
                  Class Name <span className="star">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Class Name*"
                  value={className} name="className"
                  onChange={textChange}
                />
              </div>
              {sectionForm.map((item) => (
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div style={{ width: "70%" }}>
                    <span className="label">Sections </span>
                    <input  type="text" placeholder="Section" name="section" onChange={textChange} />
                  </div>
                  <div style={{gap:"5px"}}>
                  <button className="btn btn-primary" onClick={AddSection}>+</button> 
                  <span> </span>
                  <button className="btn btn-danger" onClick={RemoveSection}> -</button>
                  </div>
                </div>
              ))}
            </form>

            <button
              id="addStudentBtn"
              class="btn btn-primary"
              style={{ margin: "20px 0" }}
            >
              Submit Class
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClass;
