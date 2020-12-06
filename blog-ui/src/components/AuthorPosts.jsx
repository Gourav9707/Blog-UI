import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minHeight: 350
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({data}) {
  const classes = useStyles();

  const handleClick=()=>console.log(data)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.coverImage}
          title="Gsaha"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Title: {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Content: {data.content}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created At: {new Date(data.dateCreated).toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/post/${data.id}`}>
        <Button size="small" color="primary" onClick={handleClick}>
          Read More
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
