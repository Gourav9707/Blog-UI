import React,{useEffect,useState} from 'react'
import {getPosts} from '../api/api'
import Card from './Card'
import Box from '@material-ui/core/Box'


const Home = (props) => {

    const [posts,SetPosts]=useState([])
    useEffect(() => {
       getPosts().then((res)=>{
           SetPosts(res)
        })
    }, [])

    const handleReadMore=(id)=>{
        props.history.push(`/post/${id}`);
    }

    const handleAuthor=(id)=>{
        console.log(id)
        props.history.push(`/authors/${id}`);
    }

    return (
        <div>
            <Box
            display="flex"
            m={2}
            p={2}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            >
            {posts.map(post=>(
                <Box m={1}>
                    <Card key={post.id} post={post} readmore={handleReadMore} handleAuthor={handleAuthor}/>
                </Box>
            ))}
            </Box>
            
        </div>
    )
}

export default Home
