import { AiOutlinePieChart } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { BiUserCircle } from 'react-icons/bi';
import { SlSettings } from 'react-icons/sl';
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import {CgLogOut} from 'react-icons/cg'
import SvgLogo from '../components/SvgLogo'

const dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter()
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (!session) {
            setFlag(true)
        }
    }, [session])

    useEffect(() => {
        if (flag) router.push('/')
    }, [flag])


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
                        <button onClick={signOut}><CgLogOut /> Log Out</button>
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

                        <div className='top-cards'>
                            <div>
                            <p>Total revenues</p>
                            <h3>$2,319,309</h3>
                            </div>
                            <img src={SvgLogo[0].svg}/>
                        </div>
                        <div className='top-cards'>
                            <div>
                            <p>Total revenues</p>
                            <h3>$2,319,309</h3>
                            </div>
                            <BiUserCircle />
                        </div>
                        <div className='top-cards'>
                            <div>
                            <p>Total revenues</p>
                            <h3>$2,319,309</h3>
                            </div>
                            <BiUserCircle />
                        </div>
                        <div className='top-cards'>
                            <div>
                            <p>Total revenues</p>
                            <h3>$2,319,309</h3>
                            </div>
                            <BiUserCircle />
                        </div>




                        <div className='grid-span-4' id='line-chart'>Line chart</div>

                        <div className='grid-span-2' id='pie-chart'>Pie Chart</div>
                        <div className='grid-span-2' id='schedule-card'>Card</div>

                    </div>

                </div>


            </div>
        </>
    )
}
export default dashboard;