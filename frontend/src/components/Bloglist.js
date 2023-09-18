import { Link } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Bloglist = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;