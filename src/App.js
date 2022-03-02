import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './app.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './pages/userList/UserList'
import Reports from './pages/reports/Reports'
import Feedback from './pages/feedback/Feedback'


function App() {
  return(
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/reports">
            <Reports/>
          </Route>
          <Route path="/feedback">
            <Feedback/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App