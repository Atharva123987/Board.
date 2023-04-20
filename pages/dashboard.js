import { AiOutlineLike, AiOutlinePieChart, AiOutlineSearch } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { BiBell, BiChevronRight, BiUserCircle } from 'react-icons/bi';
import { SlSettings } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import { CgLogOut } from 'react-icons/cg'
import { UilMoneyWithdraw } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import LChart from '../components/LChart';
import PChart from '../components/PChart';
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getSession } from 'next-auth/react';


export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }

const dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter()
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [data1, setData1] = useState(null);
    const options = ['May - June 2021', 'July - August 2021', 'September - October 2021'];



    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.twelvedata.com/time_series?symbol=AMZN&interval=1week&apikey=${process.env.NEXT_PUBLIC_TWELVE_API_KEY}`
            );
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

            const response1 = await axios.get(`https://sample-data-listed.onrender.com/`)


            setData(series);
            setData2(series2);
            setData1(response1.data);

            // Redirect to the dashboard after fetching data
            // router.push("/dashboard");
        } catch (err) {
            console.log(err);
        }
    }

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" }); // Redirect to the home page after signing out
    };

    if (!data || !data2 || !data1) {
        return (<>

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
                                <p>Total Transactions</p>
                                <h3>1,520</h3>
                            </div>
                            <BsTags />
                        </div>

                        <div className='top-cards'>
                            <div>
                                <p>Total Likes</p>
                                <h3>9,721</h3>
                            </div>
                            <AiOutlineLike />
                        </div>

                        <div className='top-cards'>
                            <div>
                                <p>Total Users</p>
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
                            <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"space-evenly", height:"100%", overflow:"hidden"}}>
                            <Skeleton count={1} />
                            <Skeleton count={1} height={100} highlightColor="#D3D3D3" />
                            <Skeleton count={1} />
                            </div>
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
                            <div style={{display:"flex", alignItems:"center", gap:"3rem"}}>
                            <Skeleton count={1} width={150} height={150} highlightColor="#D3D3D3" style={{ borderRadius: "50%", marginLeft: "4rem", marginTop: "1rem" }} />
                            <div style={{height:"100%"}}> 
                            <Skeleton count={1} style={{marginTop:"4rem", marginRight:"4rem"}}/>
                            <Skeleton count={1} style={{marginTop:"0.5rem", marginRight:"4rem"}}/>
                            <Skeleton count={1}  style={{marginTop:"0.5rem", marginRight:"4rem"}}/>
                            </div>
                            </div>
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
                                <p>Total Transactions</p>
                                <h3>1,520</h3>
                            </div>
                            <BsTags />
                        </div>

                        <div className='top-cards'>
                            <div>
                                <p>Total Likes</p>
                                <h3>9,721</h3>
                            </div>
                            <AiOutlineLike />
                        </div>

                        <div className='top-cards'>
                            <div>
                                <p>Total Users</p>
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
                            <PChart data={data1} />
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
