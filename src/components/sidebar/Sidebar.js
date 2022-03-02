import React from 'react'
import SvgFeedback from '../../assets/icons/Feedback'
import SvgHome from '../../assets/icons/Home'
import SvgReport from '../../assets/icons/Report'
import SvgUsers from '../../assets/icons/Users'
import SvgValidation from '../../assets/icons/Validation'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidenarWrapper">
                <div className='sidebarMenu'>
                    <h3 className='sidebarTtile'></h3>
                    <ul className='sidbarList'>
                        <li className='sidebarlistItem active'>
                            <SvgHome/>
                            <p>Home</p>
                        </li>
                        <li className='sidebarlistItem'>
                            <SvgUsers/>
                            <p>Users</p>
                        </li>
                        <li className='sidebarlistItem'>
                            <SvgReport/> 
                             <p>Report</p>
                        </li>
                        <li className='sidebarlistItem'>
                          <SvgFeedback/>
                           <p>Feedback</p>
                        </li>
                        <li className='sidebarlistItem'>
                            <SvgValidation/>
                            <p>Validation</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
