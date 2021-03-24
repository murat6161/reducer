import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch1() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=> {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('Bir yanlislik oldu')
        })
    }, [])
    return (
        <div>

            
                {loading ? 'Loading:': post.body}
                {error ? error:null}
            
            
        </div>
    )
}

export default DataFetch1
