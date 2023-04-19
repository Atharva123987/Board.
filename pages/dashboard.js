import { AiOutlineLike, AiOutlinePieChart, AiOutlineSearch } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { BiBell, BiChevronRight, BiUserCircle } from 'react-icons/bi';
import { SlSettings } from 'react-icons/sl';
import LineChart from '../components/LChart'
import PieChart from '../components/PChart'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import { CgLogOut } from 'react-icons/cg'
import { UilMoneyWithdraw } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import LChart from '../components/LChart';
import PChart from '../components/PChart';
import axios from 'axios'
const dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter()
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const options = ['May - June 2021', 'July - August 2021', 'September - October 2021'];



    useEffect(() => {
        console.log("DASHBOARD MOUNTED")
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.twelvedata.com/time_series?symbol=AMZN&interval=1week&apikey=${process.env.NEXT_PUBLIC_TWELVE_API_KEY}`
            );
            console.log(response)
            const series = response?.data?.values?.map((value) => ({
                name: value.datetime,
                "Close Price": value.close,
            }));

            const response2 = await axios.get(
                `https://api.twelvedata.com/time_series?symbol=AAPL&interval=1week&apikey=${process.env.NEXT_PUBLIC_TWELVE_API_KEY}`
            );

            const series2 = response2?.data?.values?.map((value) => ({
                name: value.datetime,
                "Close Price": value.close,
            }));

            setData(series);
            setData2(series2);
            console.log("DATA1", data);
            console.log("DATA2", data2);

            // Redirect to the dashboard after fetching data
            router.push("/dashboard");
        } catch (err) {
            console.log(err);
        }
    }

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" }); // Redirect to the home page after signing out
    };



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
                        <button onClick={handleSignOut}><CgLogOut /> Log Out</button>
                        <a>Help</a>
                        <a>Contact Us</a>
                    </div>

                </div>

                <div id="dashboard">

                    <div id="navbar">
                        <h1>Dashboard </h1>
                        <div id='navbar-right'>
                            <AiOutlineSearch id='search-icon' />
                            <input type='text' placeholder='Search...' />
                            <BiBell />
                            <img id='profile-image' src='https://xsgames.co/randomusers/avatar.php?g=male' alt='profile-image' />


                        </div>
                    </div>

                    <div id='grid-container'>

                        <div className='top-cards'>
                            <div>
                                <p>Total revenues</p>
                                <h3>$2,129,430</h3>
                            </div>
                            <UilMoneyWithdraw />
                        </div>
                        <div className='top-cards'>
                            <div>
                                <p>Total Likes</p>
                                <h3>1,520</h3>
                            </div>
                            <BsTags />
                        </div>
                        <div className='top-cards'>
                            <div>
                                <p>Total Users</p>
                                <h3>9,721</h3>
                            </div>
                            <AiOutlineLike />
                        </div>
                        <div className='top-cards'>
                            <div>
                                <p>Total revenues</p>
                                <h3>892</h3>
                            </div>
                            <UilUsersAlt />
                        </div>




                        <div className='grid-span-4' id='line-chart'>
                            <div>
                                <h3>Activities</h3>
                                <select>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <LChart data={data} data2={data2} />
                        </div>

                        <div className='grid-span-2 schedule-card' id='pie-chart'>
                            <div className='schedule-top'>
                                <h3>Top products</h3>
                                <select>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <PChart />

                        </div>

                        <div className='grid-span-2 schedule-card'>
                            <div className='schedule-top'>
                                <h3>Today's Schedule</h3>
                                <p>See all<BiChevronRight /></p>
                            </div>

                            <div id='schedule-1'>
                                <h5>Meeting with suppliers from Kuta Bali</h5>
                                <p>14.00-15.00</p>
                                <p>at Sunset Road, Kuta, Bali </p>
                            </div>

                            <div id='schedule-2'>
                                <h5>Check operation at Giga Factory 1</h5>
                                <p>18.00-20.00</p>
                                <p>at Central Jakarta </p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
export default dashboard;
