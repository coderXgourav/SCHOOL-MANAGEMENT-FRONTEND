import React from "react"
import "./header.css";
const Header = ()=>{
    return (
        
<div class="sidebar">
<div class="sidebar-header">
    <i data-feather="book"></i>
    <h1>EduManage</h1>
</div>
<ul class="sidebar-menu">
    <li><a href="#"><i data-feather="home"></i> Dashboard</a></li>
    <li><a href="#"><i data-feather="users"></i> Students</a></li>
    <li><a href="#"><i data-feather="user"></i> Teachers</a></li>
    <li><a href="#"><i data-feather="calendar"></i> Classes</a></li>
    <li><a href="#"><i data-feather="clipboard"></i> Attendance</a></li>
    <li><a href="#"><i data-feather="file-text"></i> Grades</a></li>
    <li><a href="#"><i data-feather="book-open"></i> Curriculum</a></li>
    <li><a href="#"><i data-feather="dollar-sign"></i> Finances</a></li>
    <li><a href="#"><i data-feather="truck"></i> Transportation</a></li>
    <li><a href="#"><i data-feather="book"></i> Library</a></li>
    <li><a href="#"><i data-feather="calendar"></i> Events</a></li>
    <li><a href="#"><i data-feather="message-square"></i> Communication</a></li>
    <li><a href="#"><i data-feather="file"></i> Reports</a></li>
    <li><a href="#"><i data-feather="settings"></i> Settings</a></li>
</ul>
</div>

    );

}

export default Header;