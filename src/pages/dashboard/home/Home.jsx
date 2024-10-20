import "./home.css";
import Header from "../header/Header";
const Home = () =>{
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
        <h2>School Dashboard</h2> <br />
        <div class="dashboard-grid">
            <div class="card">
                <h3>Total Students</h3>
                <p>1,234</p>
            </div>
            <div class="card">
                <h3>Total Teachers</h3>
                <p>78</p>
            </div>
            <div class="card">
                <h3>Classes</h3>
                <p>45</p>
            </div>
            <div class="card">
                <h3>Attendance Rate</h3>
                <p>95%</p>
            </div>
        </div>
   
        <div class="table-container">
            <h3>Recent Activities</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-10-19</td>
                        <td>Parent-Teacher Meeting</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>2024-10-18</td>
                        <td>Science Fair</td>
                        <td>Ongoing</td>
                    </tr>
                    <tr>
                        <td>2024-10-17</td>
                        <td>Sports Day</td>
                        <td>Upcoming</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  
</div>
    </>

 )
}

export default Home;