import React, {useState} from 'react'
import "./Report.css"
import { DataGrid } from '@mui/x-data-grid';
import {reportUserRow, userRows} from "../../dummyData"
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';


export default function Reports() {

  // const [data, setData] = useState(userRows);

  const columns = [
    { field: "id", headerName: "KTP ID", width: 190, },
    {
      field: "username",
      headerName: "User Name",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="reportListUser">
            <img className="reportListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 350 },
    { field: "address", headerName: "Address", width: 350 },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
              <button className="reportListEdit">Details</button>
          </>
        );
      },
    },
  ];

  return( 
  <div className='reportsList'>
     <Topbar/>
    <div>
     <Sidebar/>
      <div className='reportContent'>
      <div className='input'>
        <h3 className='text'>Report Information</h3>
        <input type="text" placeholder=' search for user....'/>
      </div>
      <DataGrid className='table'
        rows={reportUserRow} 
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      </div>
    </div>
  </div>
  )
}
