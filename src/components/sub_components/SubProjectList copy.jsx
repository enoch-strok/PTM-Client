import React from 'react';
// import axios from 'axios';
// import {Link} from '@reach/router';

const SubProjectList = props => {

    const {projectList, projectId} = props;

    // console.log('Sub Project Stuff Here: ',projectList, projectId);

    return (
        projectList.filter(projectObj => projectObj._id === projectId)
            .map((data, idx) => {
                console.log("SubProject: ", data);
                const subProject = [data.subProject];
                return(

                    subProject.map((subData, idx)=> {
                        console.log("inside the sub project app");
                        console.log("subData: ", subData);
                        return(
                            // <>
                            //     <td key={idx}>{idx}{data.projectName}Test</td>
                            // </>
                            subData.map((x, idx)=> {
                                console.log("x: ",x);
                                return (
                                    <tr className="table-active">
                                        <td key={idx}>{x.subProjectName}Test</td>
                                    </tr>
                                )
                            })
                        )
                    }
                    )
                // <td>{data.subProject}</td> this works but needs to be looped
                )
            })
    )
}

export default SubProjectList;