export default function Author(){
    return(
        <div className='container'>
        <div className='w-100'>
            <h2>Author Page</h2>
            <table className='table table-striped bg-info ml-5 w-50 table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{author.name}</td>
                        <td>{author.age}</td>
                        <td>{author.location}</td>
                        {/* <td>{author.book}</td> */}
                        <td>
                            <ul>
                            {
                            author.book.map(a=>(
                                    <li>{a}</li>
                                
                            ))
                        }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}


var author={
    name:'shyam kumar',
    age:45,
    location:'Greater Noida',
    book:['react for beginner','react in action','pro react','react for dummies']
}
var booklist=author.book.map((a)=> {
    <li>{a}</li>
})