import React from "react"
import {Link} from "react-router-dom"
import "./header.css";
const Header = ()=>{
    return (
        
<div class="sidebar">
<div class="sidebar-header">
    <i data-feather="book"></i>
    <h1>EduManage</h1>
</div>
<ul class="sidebar-menu">
    <li><Link to="/admin/dashboard"><i data-feather="home"></i> Dashboard</Link></li>
    <li><Link to="/admin/view-student"><i data-feather="users"></i> Students</Link></li>
    <li><Link to="/admin/view-teacher"><i data-feather="user"></i> Teachers</Link></li>
    <li><Link to="#"><i data-feather="calendar"></i> Classes</Link></li>
    <li><Link to="#"><i data-feather="clipboard"></i> Attendance</Link></li>
    <li><Link to="#"><i data-feather="file-text"></i> Grades</Link></li>
    <li><Link to="#"><i data-feather="book-open"></i> Curriculum</Link></li>
    <li><Link to="#"><i data-feather="dollar-sign"></i> Finances</Link></li>
    <li><Link to="#"><i data-feather="truck"></i> Transportation</Link></li>
    <li><Link to="#"><i data-feather="book"></i> Library</Link></li>
    <li><Link to="#"><i data-feather="calendar"></i> Events</Link></li>
    <li><Link to="#"><i data-feather="message-square"></i> Communication</Link></li>
    <li><Link to="#"><i data-feather="file"></i> Reports</Link></li>
    <li><Link to="#"><i data-feather="settings"></i> Settings</Link></li>
</ul>
</div>

    );

}

export default Header;