import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {getAuthorsbyId} from '../api/api'
import { Link, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AuthorPosts from './AuthorPosts'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 400,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  const {id}=useParams()
  const [author,setAuthor]=useState({})
  const [posts,setPosts]=useState({})

  useEffect(()=>{
    getAuthorsbyId(id).then((res)=>{
        setAuthor(res)
        setPosts(res.posts[0])
      })
},[])

const handleClick=()=>{
    console.log(author)
}

  return (
    <Box justifyContent="center" alignItems="center">
    <Box m={1}>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <Avatar className={classes.img} alt={author.name} src={author.avatar}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Author: {author.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Bio: {author.bio}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Created At: {new Date(author.dateCreated).toDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Modified At: {new Date(author.dateModified).toDateString()}
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="contained" color="secondary" onClick={handleClick}>
                    ADD POST
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </Box>
    {/* {author.posts.map((post) => (
    <Box m={1}>
    <AuthorPosts data={post}/> 
    </Box>
    ))} */}
    <AuthorPosts data={posts}/>
    </Box>
  );
}
