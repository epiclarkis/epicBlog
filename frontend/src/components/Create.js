import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)

        await fetch('/api/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title: </label>
                <input
                    id="title"
                    className="create-mode" 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="body">body: </label>
                <textarea
                    id="body"
                    className="create-mode" 
                    rows={'10'}
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="author">author: </label>
                <input 
                    type="text"
                    id="author"
                    className="create-mode"  
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>adding blog</button>}
            </form>
        </div>
    );
}
 
export default Create;