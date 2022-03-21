import React from 'react'
import SvgFeedback from '../../assets/icons/Feedback'
import SvgHome from '../../assets/icons/Home'
import SvgReport from '../../assets/icons/Report'
import SvgUsers from '../../assets/icons/Users'
import SvgValidation from '../../assets/icons/Validation'
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar({active}) {


    return (
        <div className='sidebar'>
            <div className="sidenarWrapper">
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'></h3>
                    <ul className='sidbarList'>
                        <Link to='/home' className={`sidebarlistItem ${active==="home" && 'active'}`} >
                            <SvgHome className='sidebarIcon'/>
                            <p>Home</p>
                        </Link>
                        <Link to='/users' className={`sidebarlistItem ${active==="users" && 'active'}`}>
                            <SvgUsers/>
                            <p>Users</p>
                        </Link>
                        <Link to='/reports' className={`sidebarlistItem ${active==="reports" && 'active'}`}>
                            <SvgReport/> 
                             <p>Report</p>
                        </Link>
                        <Link to='/feedback' className={`sidebarlistItem ${active==="feedback" && 'active'}`}>
                          <SvgFeedback/>
                           <p>Feedback</p>
                        </Link>
                        <Link to='/validation' className={`sidebarlistItem ${active ==="validation" && 'active'}`}>
                            <SvgValidation/>
                            <p>Validation</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
