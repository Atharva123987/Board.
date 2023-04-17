import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import './styles/dashboard.css'
const Dashboard = () => {
    return (
        <>
            <div className="container">

                <div id="sidebar">
                    <h1>Board</h1>
                </div>

                <div id="dashboard-container">
                    <div id="navbar">
                        <h1>Dashboard</h1>

                    </div>
                    <div id="cards">
                    </div>

                    <div>
                        <LineChart />
                    </div>

                    <div>
                        <PieChart />
                    </div>

                </div>


            </div>
        </>
    )
}
export default Dashboard;