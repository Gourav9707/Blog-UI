import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link, useParams } from "react-router-dom";
import {getPostbyId,getComment} from '../api/api'
import customLike from './Like'
import Box from '@material-ui/core/Box'
import CommentBox from './CommentBox'
import Button from '@material-ui/core/Button';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import {List} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 650,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const data=customLike()
  const {id}=useParams()
  const [post,setpost]=useState({})
  const [author,setauthor]=useState({})
  const [comment,setComment]=useState({})
  const [commentcount,setCommentCount]=useState(1)
  const [addcomment,setAddcomment]=useState([])

  const handleComment=(comment)=>{
    setAddcomment([...addcomment,comment])
    setCommentCount(commentcount+1)
    console.log(post)
  }


  useEffect(()=>{
      getPostbyId(id).then((res)=>{
          setpost(res)
          setauthor(res.author[0])
        })
      getComment(id).then((res)=>{
        setComment(res[0])
        setAddcomment([res[0].comment])
      })
  },[])


  return (
    <>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={author.avatar} />
        }
        title={post.title}
        subheader={
              <Box display="flex" flexDirection="column">
                <Typography variant="body2" color="textSecondary" component="p">
                  Modified : {new Date(post.dateModified).toDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created : {new Date(post.dateCreated).toDateString()}
                </Typography>
              </Box>
            }
      />
     
      <CardMedia
        className={classes.media}
        image={post.coverImage}
        title={author.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={data.handleLike}>
          <FavoriteIcon />{data.like}
        </IconButton>
        <IconButton ><ChatBubbleOutlineIcon/>{commentcount}</IconButton>
        <Link to={`/authors/${author.id}`}>
        <Button size="small" color="secondary" >Author: {author.name} </Button>
        </Link>
      </CardActions>
    </Card>
    </Box>
    <CommentBox data={comment.comment} handleComment={handleComment} addcomment={addcomment} />
    </>
  );
}
