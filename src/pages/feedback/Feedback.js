import React, {useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./Feedback.css"


export default function Feedback() {

  // const [data, setData] = useState(userRows);
    return(
        // <table className='table'>
        //     <thead className='thead'>
        //         <tr>
        //             <th>Users</th>
        //             <th>Date</th>
        //             <th>Message</th>
        //         </tr>
        //     </thead>
        //     <tbody className='tbody'>
        //         <tr>
        //             <td>a</td>
        //             <td>t</td>
        //             <td>i</td>
        //         </tr>
        //     </tbody>
        // </table>

        <div className='feedback'>
            <Topbar/>
            <div>
            <Sidebar/>
            <div className='feedbackContent'>
            <table className='table'>
            <thead>
                <tr>
                    <th>Users</th>
                    <th>Date</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
            </tbody>
        </table>
            </div>
         </div>
            
        </div>
    )
}
