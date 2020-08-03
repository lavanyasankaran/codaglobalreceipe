/*import React from 'react';
const Item = ({list}) =>{
    return(
<div>
{list.map((ro)=>{return(<div>{ro.name}</div>)})}

</div>)
}

export default Item;*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {  blueGrey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: blueGrey[500],
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}));

 function Item({list}) {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div style={{ backgroundColor: "grey" }}>
        <Grid item xs={6} lg={12}>
          <Typography align="right" color="textSecondary">
            {" "}
            CATEGORY
          </Typography>
          <Typography
            variant="h3"
            align="right"
          >{`Pizza & Noodels`}</Typography>
        </Grid>
        
          <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      
      {list.map((ro)=>{return(
        <Grid item xs={6} sm={3} key={ro.id}>
    <Card className={classes.root}>
    <CardActionArea
              onClick={() => {
                history.push(`/recipes/${ro.id}`);
              }}
            >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {ro.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ro.name}
       subheader= {ro.label}
      />
      <LazyLoadComponent>
      <CardMedia
        className={classes.media}
        image={ro.image} 
      />
      </LazyLoadComponent>
      </CardActionArea>
      <CardContent>
      <Grid container>
                <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Catergory  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {ro.category}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
              <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Price  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {ro.price}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
              <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Description  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {ro.description}
                  </Typography>
                </Grid>
              </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
    </Grid>
    )})}
    
    </Grid>
    </div>
  );
  
}
export default Item;