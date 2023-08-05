export default function Publisher(){
    return(
        <div className="border border-dark w-50 ml-1 p-5" style={{'margin-left':'100px'}}>
        <h1 style={{'margin-left':'100px'}}>Publisher Page</h1>
        <ul className="ml-5" style={{'margin-left':'100px'}}>
            <li>Id: {publisher.id}</li>
            <li>Name: {publisher.name}</li>
            <li>Location: {publisher.location}</li>
            <li>State: {publisher.state}</li>
            <li>Country: {publisher.country}</li>
        </ul>
        </div>
    )
}

const publisher={
    id:1001,
    name:'Shakti',
    location:'Greater Noida',
    state:'UP',
    country:'India'
};