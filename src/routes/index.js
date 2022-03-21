import {Route, Routes} from "react-router-dom";
import Feedback from "../pages/feedback/Feedback";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Reports from "../pages/reports/Reports";
import UserList from "../pages/userList/UserList";
import Validation from "../pages/validation/Validation";


const Routing = ()=> {
    
    return(
        <Routes>
            <Route exact path ="/" element={<Login/>} />
            <Route path ="register" element={<Register/>}/>
            <Route path ="home" element={<Home/>}/>
            <Route path ="users" element={<UserList/>}/>
            <Route path = "reports" element={<Reports/>}/>
            <Route path ="feedback" element={<Feedback/>}/>
            <Route path ="validation" element={<Validation/>}/>
        </Routes>
    )
}

export default Routing;