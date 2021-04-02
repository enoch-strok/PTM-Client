import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';
import FormBuilder from '../components/sub_components/FormBuilder';
import SubProjectCollapse from '../components/sub_components/SubProjectCollapse';
import bootstrap from 'bootstrap';

const Dashboard = props => {

// const [projectList, setProjectList] = useState([
//     {
//       projectName: "...loading!",
//       subProject: ["...dummyData"]
//   }
//   ]);

const [status, setStatus] = useState({
  status: false
});

// useEffect(() => {
//   axios.get("http://localhost:9000/project/all")
//     .then(response => {
//       console.log("Initial Server Response: ",response);
//       setProjectList(response.data);
//     })
//     .catch()
// }, []);

return (
  <div className="container">
      <br></br>
      <br></br>
      <Header/>
      <ProjectList/>
      {/* <FormBuilder/> */}
      {/* <SubProjectCollapse/> */}
    </div>
)}

  export default Dashboard;