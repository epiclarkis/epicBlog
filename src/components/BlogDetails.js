import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Fetching blog...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>title: {blog.title}</h2>
                    <p>author: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button className="delete-blog" onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;