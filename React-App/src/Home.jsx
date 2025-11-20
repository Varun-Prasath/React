import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>This is the home page</h1>
            <Link to={"/blog"}>Blog</Link>
        </>
    );
}

export default Home