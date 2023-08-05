import Author from "./book/author";
import Reader from "./book/reader";
import Publisher from "./book/publisher";
export default function BookMain(){
    return(
        <div>
            <h1>
                Book Information
            </h1>
            <table>
                <tr>
                <table>
                    <tr>
                        <td>ISBN{book.isbn}</td>
                        </tr><tr>
                        <td>Name{book.bname}</td>
                    </tr>
                </table>
                </tr>
                <tr>
                    <td><Author></Author></td>
                    </tr><tr>
                    <td><Publisher></Publisher></td>
                    </tr><tr>
                    <td><Reader></Reader></td>
                </tr>
            </table>
        </div>
    )
}
var book={
    isbn:101,
    bname:'sakd'
}