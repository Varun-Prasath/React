import { Link } from "react-router-dom"

function Blog(){
    return(
        <>
            <h1>This is the blog Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />Vero molestias saepe officiis mollitia rem necessitatibus optio repudiandae ullam dicta asperiores, dolore, est sint nisi inventore. 
                <br />Soluta quas excepturi aliquam dolores.
            </p>
            <Link to={"/"}>Back to Home</Link>
        </>
    );

}

export default Blog