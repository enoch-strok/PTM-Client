import React from 'react';


const SubProjectCollapse = props => {
    return(
<>
    <p>
        <a data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Expand Feature
        </a>
    </p>

    <div className="collapse" id="collapseExample">
        <div className="card card-body">
            {/* <tr><SubProjectList projectId={data._id} projectList={projectList}/></tr> */}
        </div>
    </div>
</>
)
}

export default SubProjectCollapse;