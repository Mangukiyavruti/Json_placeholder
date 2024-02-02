import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <Link to={"/Post"} className="button">post</Link>
        <Link to={"/Comments"} className="button">comments</Link>
        <Link to={"/Albums"} className="button">Albums</Link>
        <Link to={"/Image"} className="button">Image</Link>
        <Link to={"/Todos"} className="button">Todos</Link>
        <Link to={"/Users"} className="button">Users</Link>
        </>
    )
}
export default Home;