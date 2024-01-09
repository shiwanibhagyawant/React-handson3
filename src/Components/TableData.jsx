import React from "react";
// import { Link } from "react-router-dom";
// import "./Table.css"


function TableData({tableData}){
    return(       
        <div>
             <table className="table" border={"1"}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.Name}</td>
                            <td>{data.Department}</td>
                            <td>{data.Rating}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        {/* <Link to="/"><button>Go Back</button></Link> */}
    </div>
    )
}

export default TableData;