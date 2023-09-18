import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const BlogDetails = () => {
    const {id} = useParams()
    const { data: blog, error, isLoading } = useFetch(`/api/blogs/${id}`)
    const navigate = useNavigate()
    const [editMode, setEditMode] = useState(false)

    const handleDelete = async () => {
        await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    const handleEdit = () => {
        const title = document.getElementById('title')
        const author = document.getElementById('author')
        const body = document.getElementById('body')

        title.contentEditable = true
        author.contentEditable = true
        body.contentEditable = true
        
        title.classList.add('edit-mode')
        author.classList.add('edit-mode')
        body.classList.add('edit-mode')

        setEditMode(true)
    }

    const handleSave = async () => {

        const title = document.getElementById('title').innerHTML
        const author = document.getElementById('author').innerHTML
        const body = document.getElementById('body').innerHTML

        const content = {
            title,
            author,
            body
        }

        await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        .then(() => {
            navigate('/')
        })
    }

    const handleCancel = () => {
        navigate('/')
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Fetching blog...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>title: <span id="title" contentEditable='false' suppressContentEditableWarning='true'>{blog.title}</span></h2>
                    <p>author: <span id="author" contentEditable='false' suppressContentEditableWarning='true'>{blog.author}</span></p>
                    <div>body: <span id="body" contentEditable='false' suppressContentEditableWarning='true'>{blog.body}</span></div>
                    <button className="edit-blog" onClick={handleEdit}>edit</button>
                    {editMode &&
                        <span>
                            <button className="cancel-blog" onClick={handleCancel}>cancel</button>
                            <button className="save-blog" onClick={handleSave}>save</button>
                        </span>
                    }
                    {!editMode && <button className="delete-blog" onClick={handleDelete}>delete</button>}
                </article>
            )}
        </div>
    );
}

export default BlogDetails;