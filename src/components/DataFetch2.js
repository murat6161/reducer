import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                loading:false,
                post: action.payload,
                error:''
            }
        case 'ERROR':
            return {
                loading:false,
                post: {},
                error: 'Yine yanlis oldu'
            }
        default:
            return state
    }
}

function DataFetch2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'SUCCESS', payload:response.data})
        })
        .catch(()=>{
            dispatch({type:'ERROR'})
        })
    },[])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.body}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetch2
