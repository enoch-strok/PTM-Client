
import axios from 'axios';

const SubProjectList = props => {

    const {projectList, projectId} = props;

    // const [inputList, setInputList] = useState([]);
    const {inputList, setInputList} = props;
    // const [inputListEdit, setInputListEdit] = useState([]);
    const {trigger, setTrigger} = props;

    // const handleChangeEdit = (e,index) => {
    //     const {name,value} = e.target;
    //     const list = [...inputListEdit];
    //     list[index][name] = value;
    //     setInputListEdit(list);
    // }
    const handleChange = (e,id) => {
        const {name,value} = e.target;
        const list = [...inputList];
        const filteredObj = list.find(obj => {
            return obj._id === id});
        //TODO: Bookmark                                         /
        // const indexOf = filteredObj.indexOf('._id' === id); 
        // console.log({filteredObj});
        // console.log('indexOf: ',indexOf);
        list[0][name] = value;
        setInputList(list);
        // setTrigger(trigger + 1);
        // console.log('List After Trigger ',list);
        ////////////////////////////////////////////////////Need to add a filter here to find the object with matching ._id and pass ._id through handleChange(data._id)...
    }


    const AddNewProjectData = (i) => {
        const data = inputList[i];
        // setDataList(data);
        const {projectName, projectDescription, projectStatus, progress, notes} = data;

        axios.post('localhost:3000/project/editProject', {
            projectName,
            projectDescription,
            projectStatus,
            progress,
            notes
            })
            .then(res => {
                console.log("Server Response: ",res);
                setTrigger(trigger + 1);
            })
            .catch(err => console.log("Server Error Message: ",err));

        const list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    }

    const deleteOneProject = (projectId) => {
        axios.delete(`https://ptm-server.herokuapp.com/project/delete/${projectId}`)
            .then(res => {
                console.log("Delete Response: ",res);
                setTrigger(trigger + 1);
                console.log('deleteOneProject Triggered ',trigger);
            })
            .catch(err => {
                console.log("Delete Attempt Error: ",err);
            })
    };

    const cancelDetailsEdit = () => {
        setTrigger(trigger + 1);
        console.log("Clicked Cancel!");
    };

    return (
                <div>
                    {projectList.filter(projectObj => projectObj._id === projectId)
                    .map((data, index) => {
                        const subProject = data.subProject;
                        console.log('projectList filter idx: ',index+1);
                        // console.log('projectList: ',projectList);
                        console.log('data: ',data);
                    {/* {
                    projectList.map((data, index) => {
                        // console.log({projectList});
                        // console.log('Trigger ',trigger);
                        console.log('projectList filter idx: ',index);
                        console.log('data.projectName: ',data);
                        const subProject = data.subProject;
                        // console.log('projectList filter idx: ',index);
                        // console.log('projectList: ',projectList);
                        // console.log('data: ',data);
                        const newData = projectList.filter(projectObj => projectObj._id === projectId);
                        console.log('newData.projectName: ',newData[0]);
                        // newData.map((data, index) => { */}
                        return(
                                        <div key={index} className="container">
                                                <br/>
                                                  <div className="row">

                                                    {/* Section 1 */}
                                                    <section className="w-24">
                                                        <div className="row">
                                                            <div className="col">
                                                                Project Name: 
                                                            </div>
                                                            <div className="col">
                                                                {/* <input type="text" name="projectName" placeholder="Project Name" size="25" value={data.projectName}/> */}
                                                                <input type="text" name="projectName" placeholder={data.projectName} size="25" />
                                                                {/* <input type="text" name="projectName" placeholder={data.projectName} onChange={e => handleChange(e,data._id)} size="25" /> */}
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
                                                                <input type="text" name="projectStatus" placeholder={data.projectStatus} size="25" />
                                                                {/* <input type="text" name="projectStatus" placeholder={data.projectStatus} onChange={e => handleChange(e,index)} size="25" /> */}
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
                                                                <input type="text" name="progress" placeholder={data.progress} size="25" />
                                                                {/* <input type="text" name="progress" placeholder={data.progress} onChange={e => handleChange(e,index)} size="25" /> */}
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
                                                                <input type="text" name="projectDescription" size="25" />
                                                                {/* <input type="text" name="projectDescription"  onChange={e => handleChange(e,index)} size="25" /> */}
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
                                                                <input type="text" name="progress" size="25" />
                                                                {/* <input type="text" name="progress"  onChange={e => handleChange(e,index)} size="25" /> */}
                                                            </div>
                                                            <div className="col">

                                                            </div>
                                                            <div className="col">
                                                                
                                                            </div>
                                                        </div>
                                                    <br />



                                                    </section>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                            </div>

                                                            <div class="col">
                                                            
                                                            <td className="w-6 text-left align-left">
                                
                                                                <button type="button" className="btn btn-outline-success" onClick={() => console.log("Clicked Update!")}>Update</button>
                                                                
                                                                <button 
                                                                type="button" 
                                                                className="btn btn-outline-warning" 
                                                                onClick={cancelDetailsEdit}
                                                                >Cancel
                                                                </button>
                                                            </td>

                                                            </div>
                                                            
                                                            <div class="col">
                                                            </div>
                                                            
                                                            <div class="col">
                                                            </div>

                                                        </div>
                                                    </div>
                                                    

                                                    {/* TODO: Working Area                                                */}
                                                    
                                                    <br />
                                                    <br />
                                                    <br />
                                                    
                                                    <tr class="card-header" >
                                                        <td class="w-24 p-2 text-center align-middle">Sub-Projects</td>
                                                    </tr>  
                                                    {/* Section 2 */}
                                                    <section className="w-24">


                                                        <div className="row">
                                                            <div className="card">
                                                                {/* <div className="card-header">
                                                                    Name
                                                                </div> */}
                                                                <ul className="list-group list-group-flush">
                                                                    <li className="list-group-item">Item 1</li>
                                                                    <li className="list-group-item">Item 2</li>
                                                                    <li className="list-group-item">Item 3</li>
                                                                    <li className="list-group-item">
                                                                        {/* <button type="button" className="btn btn-secondary" onClick={addNewProjectField}>+</button> */}
                                                                        <button type="button" className="btn btn-secondary" >+</button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <br />
                                                    </section>

                                                    <td className="w-24 p-2 text-center align-center"><button type="button" className="btn btn-outline-danger" onClick={() => deleteOneProject(data._id)}>Delete</button></td>

                                                    <br />
                                                    <br />

                                                </div>

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