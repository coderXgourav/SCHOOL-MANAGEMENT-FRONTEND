import { useState } from "react";
import Header from "../header/Header";
import {AddClassFn} from "../../../utils/api";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

// import "./addStudent.css";
import { Link } from "react-router-dom";
const AddClass = () => {
  const navigate = useNavigate();
  const [className, setClass] = useState("");
  const [section, setSection] = useState([]);
  const [newSection , setNewSection] =  useState("");
  const [sectionForm, setSectionForm] = useState([1]);
  const [btn, setBtn] = useState("Submit Class");
const [api, contextHolder] = notification.useNotification();

const sectionChange = (e) => {
  const index = parseInt(e.target.name);
  const updatedSection = [...section];
  updatedSection[index] = e.target.value;
  setSection(updatedSection);
};
  const formHandler = async(e) =>{
    e.preventDefault();
    setBtn("Please Wait..")
 console.log(section);
    const data = {className,sections:section};
    const result = await AddClassFn(data);
    const {status,title,desc} = result;
    if(status){
      setSection([""]);
      setClass("");
    }
    openNotification(status,title,desc);
    setBtn("Submit Class")
  }
  const openNotification = (status,title,desc,topRight) => {
    if(status){
        api.success({
            message: title,
            description:
            desc,
            topRight,
          });

    }else{
        api.error({
            message: title,
            description:
            desc,
            topRight,
          });
    }
  
  };

  const AddSection = () => {
    setSectionForm([...sectionForm, '']); 
  };
  const RemoveSection =(id) =>{
    document.getElementById(id).style.display="none";
    const newSection = section.filter((item,index)=>{
      return index!=id;
    });
    setSection([...newSection]);
  }

  

  const textChange = (e) =>{
   const {name,value} = e.target;
   if(name=="className"){
    setClass(value);
   }
  }

  return (
    <>
    {contextHolder}
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
              type="button"
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
              {sectionForm.map((item,key) => (
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }} id={key}
                >
                  <div style={{ width: "70%" }} >
                    <span className="label">Sections </span>
                    <input
          key={key}
          type="text"
          placeholder="Section"
          name={key.toString()}
          value={section[key]}
          onChange={sectionChange}
          required
        />
                    {/* <input  type="text" placeholder="Section" name={`section${key}`} value={section[`section${key}`]} onChange={sectionChange} required={true}/> */}
                  </div>
                  <div style={{gap:"5px"}}>
                  <button type="button" className="btn btn-primary" onClick={AddSection}>+</button> 
                  <span> </span>
                  <button type="button" className="btn btn-danger" onClick={()=>{RemoveSection(key)}}> -</button>
                  </div>
                </div>
              ))}
                <button
            type="submit"
              id="addStudentBtn"
              class="btn btn-primary"
              style={{ margin: "20px 0" }}
            >
              {btn}            </button>
            </form>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClass;
