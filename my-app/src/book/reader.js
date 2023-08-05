import { Component } from "react";
export default class Reader extends Component{
    render(){
        return(
            <div>
                <div class="border border-primary w-50 mt-5 " style={{'margin-left':'200px'}}>
                <h1>Reader Page</h1>
                <ul class="ml-5 p-5">
                    <li>{reader.id}</li>
                    <li>{reader.name}</li>
                    <li>{reader.location}</li>

                </ul>
                <table class="table table-bordered table-striped bg-info">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                    </thead>
                    <tbody>{

                            readers.map((a)=>(
                                <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.location}</td>
                                </tr>
                            ))
    }
                    
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
const reader={
    id:101,
    name:'anushka',
    location:'aligarh'
};

const readers=[
    {
        id:102,
        name:'anushk',
        location:'aligarh'
    },
    {
        id:103,
        name:'anush',
        location:'greater'
    },
    {
        id:104,
        name:'anus',
        location:'noida'
    },
    {
        id:105,
        name:'anu',
        location:'delhi'
    }
]