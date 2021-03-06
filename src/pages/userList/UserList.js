import React from 'react';
import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import { useState } from "react";
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar';

export default function UserList() {

  const [data] = useState(userRows);
  
  const columns = [
    { field: "id", headerName: "User ID", width: 90, },
    {
      field: "user",
      headerName: "User Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "roles", 
      headerName: "Roles", 
      width: 250 ,
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 220,
      renderCell: (params) => {
        return(
          <div>
            <button className='status'>Active</button>  
          </div>
        )
      }
    },
    {
      field: "password",
      headerName: "Password",
      width: 250,
      renderCell: (params) => {
        return (
          <>
              <button className="userListEdit">Reset</button>
          </>
        );
      },
    },
  ];

  return( 
  <div className='userList'>
    <Topbar/>
    <div >
    <Sidebar/>
    <div className='userContent'>
    <h3 className='text'>User Management</h3>
      <DataGrid className='table'
        rows={data} 
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
    </div>
  </div>
  )
}
