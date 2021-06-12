import React, {useEffect, useState} from 'react';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';


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