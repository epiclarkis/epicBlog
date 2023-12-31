import Bloglist from "./Bloglist";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <p>Fetching blogs...</p>}
            {blogs && <Bloglist blogs={blogs} title='all blogs' />}
        </div>
    );
}
 
export default Home;