import {useState} from 'react'

const Like = () => {
    
const [like,setLike]=useState(0);
const handleLike=()=>{
    setLike(like+1);
}
    return {
        like,
        handleLike
    }
}

export default Like

