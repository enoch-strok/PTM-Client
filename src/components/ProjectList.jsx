import React, {useEffect, useState} from 'react';
import SubProjectList from './sub_components/SubProjectList';
import axios from 'axios';

// import {Link} from '@reach/router';

const ProjectList = props => {

    const [inputList, setInputList] = useState([]);
    const [projectDetailsInputList, setProjectDetailsInputList] = useState([]);
    const [trigger, setTrigger] = useState(0);
    const [projectList, setProjectList] = useState([
        {
          projectName: "...loading!",
          projectDescription: "...loading!",
          projectStatus: "...loading!",
          progress: "",
          subProject: ["...dummyData"]
      }
      ]);

      useEffect(() => {
        axios.get("https://ptm-server.herokuapp.com/project/all")
          .then(response => {
            console.log("Initial Server Response: ",response);
            setProjectList(response.data);
          })
          .catch()
      }, [trigger]);

    const addNewProjectField = () => {
        setInputList([...inputList, {
            projectName: "",
            projectDescription: "",
            projectStatus: "",
            progress: ""
        }]);
        setTrigger(trigger + 1);
        console.log('addNewProjectField Triggered ',trigger);
        console.log('inputList Before Change: ', inputList);
    }
    
    
    const handleChange = (e,index) => {
        const {name,value} = e.target;
        const list = [...inputList];
        // console.log('List Before Value Change: ', list);
        list[index][name] = value;
        // console.log('List After Value Change: ', list);
        setInputList(list);
    }
    
    const handlePressEnter = e => {
        if (e.key === 'Enter') {
            console.log("You Pressed Enter!");
        }else{
            console.log("Pressed some key!");
        };
    }
    
    const AddNewProjectData = (i) => {
        const data = inputList[i];
        // setDataList(data);
        const {projectName, projectDescription, projectStatus, progress} = data;
        
        axios.post('https://ptm-server.herokuapp.com/project/add', {
            projectName,
            projectDescription,
            projectStatus,
            progress
        })
        .then(res => {
            console.log("Server Response: ",res);
            setTrigger(trigger + 1);
            console.log('AddNewProjectData Triggered ',trigger);
        })
        .catch(err => console.log("Server Error Message: ",err));
        
        const list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    }
    
    const editProjectFields = (idx) => {
        setProjectDetailsInputList([...projectList]);
        setTrigger(trigger + 1);
        console.log('editProjectFields Triggered ',trigger);
        console.log('inputList Before Change: ', projectDetailsInputList);
    }

    const EditProjectData = (i) => {
        const data = inputList[i];
        // setDataList(data);
        const {projectName, projectDescription, projectStatus, progress} = data;

        axios.post('https://ptm-server.herokuapp.com/project/add', {
            projectName,
            projectDescription,
            projectStatus,
            progress,
            // notes
            })
            .then(res => {
                console.log("Server Response: ",res);
                setTrigger(trigger + 1);
                console.log('EditProjectData Triggered ',trigger);
            })
            .catch(err => console.log("Server Error Message: ",err));

        const list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    }


    const removeNewProjectField = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }


    return (
            <>
                <h1 className="display-3 text-center">Projects</h1>
                <br></br>
                {/* <table className="shadow p-3 mb-5 bg-light rounded, table table-hover"> */}
                <table className="shadow p-3 mb-5 bg-light rounded, table" >
                    <thead className="bg-dark text-warning">      
                        <tr>
                            <th className="lead w-25 p-3 text-center">Project Name</th>
                            <th className="lead w-25 p-3 text-center">Status</th>
                            <th className="lead w-25 p-3 text-center">Progress %</th>
                            <th className="lead w-25 p-3 text-center"></th>
                        </tr>
                    </thead>

                    <tbody >
                    {projectList.map((data, idx) => {
                        return(
                            <>

                                {/* <tr key={idx} > */}
                                <tr key={idx}  className="table-secondary" data-bs-toggle="collapse" href={`#collapseExample${idx}`} onClick={editProjectFields} aria-expanded="false" aria-controls={`collapseExample2`}>
                                    <td className="w-25 p-2 text-center align-middle">{data.projectName}</td>
                                    <td className="w-25 p-2 text-center align-middle">{data.projectStatus}</td>
                                    <td className="w-25 p-2 text-center align-middle">{data.progress}%</td>
                                    <td className="w-25 p-2 text-center align-middle"></td>
                                    
                                </tr>
                                <tr>
                                    <td colspan="4" style={{padding: ".1rem"}}>
                                        <div key={idx} className="collapse" id={`collapseExample${idx}`}>
                                            <SubProjectList projectId={data._id} projectList={projectList} trigger={trigger} setTrigger={setTrigger} inputList={projectDetailsInputList} setInputList={setProjectDetailsInputList} />
                                        </div>
                                    </td>
                                </tr>
                            </>
                        )}
                    )}
                    {inputList.map((item, i) => {
                        return(
                            <tr key={i} >
                                    <td className="p-3 text-center">
                                        <input type="text" name="projectName" placeholder="Project Name" size="25" value={item.projectName} onKeyDown={handlePressEnter} onChange={e => handleChange(e,i)}></input>
                                    </td>
                                    <td className=" p-3 text-center">
                                        <input type="text" name="projectStatus" placeholder="Project Status" size="25" value={item.projectStatus} onKeyDown={handlePressEnter} onChange={e => handleChange(e,i)}></input>                       
                                    </td>
                                    <td className=" p-3 text-center">
                                        <input type="text" name="progress" placeholder=" 0-100" size="2" value={item.progress} onKeyDown={handlePressEnter} onChange={e => handleChange(e,i)}></input>%
                                    </td>
                                    <td className=" p-3 text-center">
                                        <button type="submit" className="btn btn-primary" onClick={() => AddNewProjectData(i)}>Submit</button>
                                        <a> </a>
                                        <button type="submit" className="btn btn-secondary" onClick={() => removeNewProjectField(i)}>Remove</button>                       
                                    </td>
                            </tr>
                        )
                    })}
                        </tbody>

                    <tbody>
                        <tr>
                            <td><button type="button" className="btn btn-secondary" onClick={addNewProjectField}>+</button></td>
                        </tr>
                    </tbody>
                        {/* <tr>
                            {JSON.stringify(inputList, null, 2)}
                        </tr> */}
                </table>
            </>
    )
}

export default ProjectList;