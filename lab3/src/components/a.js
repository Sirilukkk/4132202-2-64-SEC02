import React from "react";

function gentable(peoples){
    return (peoples.map((people)=>{
        const {id,name:rname,age} = people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
            </tr>
        );
    }))
}

function DataTable(){
    const students = [
        {
            id:1,
            name:"kt",
            age:20,         
        },
        {
            id:2,
            name:"may",
            age:20,
        },
        
    ];
    return(
        <table>
          <table>{gentable(students)}</table>
        </table>
    );
}
export default DataTable;