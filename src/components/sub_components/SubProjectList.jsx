import React, {useEffect, useState} from 'react';


const SubProjectList = props => {

    const {projectList, projectId} = props;

    const [inputList, setInputList] = useState([]);

    const {trigger, setTrigger} = props;

    const addNewProjectField = () => {
        setInputList([...inputList, {
            projectName: "",
            projectDescription: "",
            projectStatus: "",
            progress: ""
        }]);
        setTrigger(trigger + 1);
        console.log("Use Effect Trigger Ran", trigger);
    }

    
    return (
                <div>
                    {projectList.filter(projectObj => projectObj._id === projectId)
                    .map((data, idx) => {
                        const subProject = data.subProject;
                        return(
                                        <div className="container">
                                                <br/>
                                                  <div className="row">

                                                    {/* Section 1 */}
                                                    <section className="col-6">
                                                        <div className="row">
                                                            <div className="col">
                                                                Project Name: 
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" name="projectName" placeholder="Project Name" size="25" value={data.projectName}/>
                                                            </div>
                                                            <div className="col">

                                                            </div>
                                                            <div className="col">
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                Project Status: 
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" name="projectStatus" placeholder="Project Status" size="25" value={data.projectStatus}/>
                                                            </div>
                                                            <div className="col">


                                                            </div>
                                                            <div className="col">
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                Progress: 
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" name="progress" placeholder="progress" size="25" value={data.progress}/>
                                                            </div>
                                                            <div className="col">

                                                            </div>
                                                            <div className="col">
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                Description: 
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" name="progress" placeholder="progress" size="25" value={data.projectStatus}/>
                                                            </div>
                                                            <div className="col">

                                                            </div>
                                                            <div className="col">
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                Notes: 
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" name="progress" placeholder="progress" size="25" value={data.projectStatus}/>
                                                            </div>
                                                            <div className="col">

                                                            </div>
                                                            <div className="col">
                                                                
                                                            </div>
                                                        </div>
                                                        
                                                    </section>


                                                    {/* Section 2 */}
                                                    <section className="col-6">
                                                        <div className="row">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    Sub-Projects
                                                                </div>
                                                                <ul className="list-group list-group-flush">
                                                                    <li className="list-group-item">An item</li>
                                                                    <li className="list-group-item">A second item</li>
                                                                    <li className="list-group-item">A third item</li>
                                                                    <li className="list-group-item">
                                                                        <button type="button" className="btn btn-secondary" onClick={addNewProjectField}>+</button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        {/* <div className="row">
                                                            <div className="col">
                                                            </div>
                                                            <div className="col">
                                                                2
                                                            </div>
                                                            <div className="col">
                                                                3
                                                            </div>
                                                            <div className="col">
                                                                4
                                                            </div>
                                                        </div> */}
                                                    </section>

                                                </div>




                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>

                                    {subProject.map((x, idx)=> {
                                        return (
                                            <tr key={idx}>
                                                <td> >>> {idx+1}: {x.subProjectName}</td>
                                                <td>Status: In Progress </td>
                                                <td>Progress: 75% </td>
                                            </tr>
                                        )
                                    })}
                                    </div>


                                )
                            })
                    }
                </div>
            )
        }

export default SubProjectList;