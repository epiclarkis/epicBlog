import Bloglist from "./Bloglist";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('/api/blogs')

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isLoading && <p>Fetching blogs...</p>}
            {blogs && <Bloglist blogs={blogs} title='all blogs' />}
        </div>
    );
}
 
export default Home;