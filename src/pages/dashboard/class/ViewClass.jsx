import "../student/ViewStudent";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, notification, Popconfirm, Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { Spin } from "antd";

import axios from "axios";
const ViewClass = () => {
  const token = localStorage.getItem("token");

  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [section, setSection] = useState([]);
  const [sectionLoading, setSectionLoading] = useState(true);
  


  const [loading, setLoading] = useState(true);
  const confirm = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URI}/class/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = res?.data;
      const { status, title, desc } = response;
      openNotification(status, title, desc);
      document.getElementById(id).style.display = "none";
    } catch (error) {
      if (error?.data) {
        const { status, title, desc } = error.data;
        openNotification(status, title, desc);
      }
    }
  };

  useEffect(() => {
    fetchClasses();
    setLoading(false);
  }, []);
  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URI}/class/get-class`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response?.data?.classData;
      setData([...data]);
    } catch (error) {
      openNotification(
        false,
        "Technical Issue",
        "Please Contact with develope!r"
      );
    }
  };

  const openNotification = (status, title, desc, topRight) => {
    if (status) {
      api.success({
        message: title,
        description: desc,
        topRight,
      });
    } else {
      api.error({
        message: title,
        description: desc,
        topRight,
      });
    }
  };
  const getSections = async (id) => {
    setModal2Open(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URI}/class/get-section/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(res.status===200){
          setSection([...res?.data]);
      }
      setSectionLoading(false);
     return;
    } catch (error) {
      setSectionLoading(false);
      if (error.response) {
        if(error.response.data){
        const { status, title, desc } = error.response.data;
        openNotification(status, title, desc);
        }
      return;

      }
    }
  };
  let no = 1;

  return (
    <>
      {contextHolder}

      <div className="dashboard">
        <Header />

        <div class="main-content">
          <div class="top-bar">
            <div class=""></div>
            <div class="user-profile">
              <img src="/img/logo.png" alt="User Avatar" />
              <span>John Doe</span>
            </div>
          </div>
          <div>
            <h2>View Classes</h2>
            <Link to="/admin/add-class">
              <button
                id="addStudentBtn"
                class="btn btn-primary"
                style={{ margin: "20px 0" }}
              >
                Add New Class
              </button>
            </Link>

            <Modal
                title="We have sections for this class ."
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
              >
            <Spin spinning={sectionLoading} size="large">
               <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                {section.map((item,key)=>(
                    <tr>
                    <td>{no++}</td>
                    <td>{item.sectionName}</td>
                    <td><button className="btn btn-success btn-sm">Edit</button> &nbsp; <button className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>
                ))}
                
               </table>
             </Spin>
              </Modal>

            <Spin spinning={loading} size="large">
              <table class="students-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Class Name</th>
                    <th>Sections Count</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, key) => (
                      <tr id={item._id}>
                        <td>{item?._id}</td>
                        <td>{item?.class_name}</td>
                        <td style={{ display: "flex", alignItems: "center" }}>
                          {item?.sections?.length} &nbsp;
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => getSections(item._id)}
                          >
                            View
                          </button>
                        </td>
                        <td>
                          {new Date(item?.updatedAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td colSpan={2}>
                          <Link to={"/admin/edit-class/"+item._id}><button className="btn btn-success btn-sm">
                            Edit
                          </button></Link>
                          <Popconfirm
                            title="Delete the class"
                            description="Are you sure to delete this class?"
                            onConfirm={() => {
                              confirm(item._id);
                            }}
                            icon={
                              <QuestionCircleOutlined
                                style={{
                                  color: "red",
                                }}
                              />
                            }
                          >
                            {" "}
                            &nbsp;
                            <Button
                              type="danger"
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </Button>
                          </Popconfirm>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        style={{ color: "red", textAlign: "center" }}
                      >
                        Classes Not Found..
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Spin>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewClass;
