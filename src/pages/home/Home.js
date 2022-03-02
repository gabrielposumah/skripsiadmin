import React from 'react'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Chart from '../../components/charts/Chart'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
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
    )
}
