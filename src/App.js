
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Advisor from "./page/Advisor/Advisor";
import BlogDetails from "./components/BLogDetails/BlogDetails"
import Team from "./components/Team/Team";
import MemberDetail from "./components/MemberDetail/MemberDetail";
import Workdetail from "./components/Workdetail/Workdetail";
import AdvisorDetails from "./components/AdvisorDetails/AdvisorDetails";
import Wheredo from "./page/Where_do/Wheredo";
import School from "./components/SchoolDetails/School";


function App() {
  return (
    <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="advisor" element={<Advisor />} />
        <Route path="blogDetails" element={<BlogDetails />} />
        <Route path="team" element={<Team />} /> 
        <Route path="memberdetail" element={<MemberDetail />} /> 
        <Route path="workdetail" element={<Workdetail />} /> 
        <Route path="advisordetail" element={<AdvisorDetails />} /> 
        <Route path="whatdo" element={<Wheredo />} /> 
        <Route path="schooldetail" element={<School />} /> 
        

        
        
      </Routes>

    </>
  );
}

export default App;
