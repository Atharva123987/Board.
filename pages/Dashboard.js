import { AiOutlinePieChart } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { BiUserCircle } from 'react-icons/bi';
import { SlSettings } from 'react-icons/sl';
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
const Dashboard = () => {
    return (
        <>
            <div className="container" id='dashboard-container' >

                <div id="sidebar">
                    <h2>Board.</h2>

                    <div id='sidebar-links'>
                        <a><AiOutlinePieChart /> Dashboard</a>
                        <a><BsTags /> Transactions</a>
                        <a><TbCalendarTime /> Schedules</a>
                        <a><BiUserCircle /> Users</a>
                        <a><SlSettings /> Settings</a>
                    </div>

                    <div id='sidebar-footer'>
                        <a>Help</a>
                        <a>Contact Us</a>
                    </div>

                </div>

                <div id="dashboard">

                    <div id="navbar">
                        <h1>Dashboard </h1>
                    </div>
                    <div id='grid-container'>
                    <div id="cards">
                        Cards
                    </div>

                    <div>
                        <LineChart />
                    </div>

                    <div>
                        <PieChart /> + Dash Card
                        <card></card>
                    </div>
                    </div>

                </div>


            </div>
        </>
    )
}
export default Dashboard;