import React from 'react'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Chart from '../../components/charts/Chart'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
    return (
        
        <div className="home">
        <Topbar/>
        <div>
        <Sidebar/>
            <div className='homeContent'>
            <p>Welcome Prince</p>
            <div className='charts'>
                <div>
                <Chart/>
                </div>
            </div>
            <div className='newUser'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
            </div>
        </div>
        </div>
    )
}
