
import './App.css';
import Login from './Components/Login/Login'
import About from './Components/About'
import Registration from './Components/Registration'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Viewbugs from './Admin_src/MyComponents/Viewbugs';
import Assignwork from './Admin_src/MyComponents/Assignwork';
import Send_message_customer from './Admin_src/MyComponents/Send_message_customer';
import Viewstaff from './Admin_src/MyComponents/Viewstaff';
import ReportBug from './Customer_src/ReportBug';
import ChangeBugStatus from './Customer_src/ChangeBugStatus';
import ViewRemedy from './Customer_src/ViewRemedy';

import ViewbugStaff from './Staff_src/components/pages/ViewbugStaaff';
import RemedyStaff from './Staff_src/components/pages/RemedyStaff';
import Assigntask from './Staff_src/components/pages/Assigntask';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Registration />} />
        

      <Route path="viewBugs" element={<Viewbugs />} />
      <Route path="assignWork" element={<Assignwork />} />
      <Route path="Send_message_customer" element={<Send_message_customer />} />
      <Route path="viewStaff" element={<Viewstaff />} />

      <Route path="reportBugs" element={<ReportBug />} />
      <Route path="changeBugStatus" element={<ChangeBugStatus />} />
      <Route path="viewRemedy" element={<ViewRemedy />} />

      <Route path="/viewbugsStaff" element={<ViewbugStaff />} />
      <Route path="/assigntaskStaff" element={<Assigntask />} />
      <Route path="/remedyStaff" element={<RemedyStaff />} />
      </Routes>
      <br/>
    </div>

  );
}

export default App;
