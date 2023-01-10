import "../styles/main.css";

import { Button, CardMedia } from "@material-ui/core";
import React, { Component } from "react";

import Backendservice from '../service/BackendService';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import FavoriteIcon  from '@material-ui/icons/Favorite';
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";

class TopArtistBackup extends Component {
  
    constructor (){
        super();
        this.state = {artists:[]}
    }
    componentDidMount() {
    window.scrollTo(0, 0);
    
    Backendservice.getTopArtists().then((res)=>{
        if(res.status===200){

           // console.log("getting data");
            // console.log(res);
            this.setState({artists:res.data});
            //console.log(res.data);
            toast("All Artists fetched sucssfully",{
                position:"bottom-right"
            });
        }
    }).catch((err)=>{
        toast.error("Username and password  not registered",{
            position:"top-right"
        });
        console.log("Please check the credentials")
    })
     

  }
  
  renderArtistTile = (i) => {
      const addfavrt =(e) =>{
        console.log(e);
       }
    const { classes } = this.props;
    console.log("renderArtistTile");
    let artist = this.state.artists;
    const notify = () => toast.success("Artists details fetched sucssfully",{
      position:"top-right"
  });

  const favouriteadding = (value) =>{
    console.log(value)
     let object ={
     name:value.name,
     image:"https://cdn.pixabay.com/photo/2017/11/11/18/31/music-player-2939936_960_720.jpg",
     listeners:value.listeners,
     playcount:value.playcount,
     url:value.url
       
    }
    console.log(object);

    Backendservice.addtoFav(object).then(
       res => console.log(res)
       )
     .catch(err=> console.log(err));

   }

    return (
      <Link to={`/artistinfo/${artist[i].name}`}>
        <Card className={classes.card}>
        
          <CardContent>
            <Typography gutterBottom component="h2" className='cardnheader'>
            <IconButton component ={Link} to ='/favlist' onClick={()=>favouriteadding(artist[i])} className='bookmarkicon' color="secondary" aria-label="add to favorite">
               <FavoriteIcon/>
            </IconButton>
              <strong className='cardnheader'>{artist[i].name}</strong>
              <IconButton component ={Link} to ='/recommend' className='bookmarkicon' color="primary" aria-label="add to favorite">
               <ThumbUpAltIcon/>
              </IconButton>
            </Typography>
            <CardMedia className='imgdata'
            alt="GeeksforGeeks"
            padding = "56"
            component="img"
            title="GeeksforGeeks"
            height="150"
            image=
            "https://cdn.pixabay.com/photo/2017/11/11/18/31/music-player-2939936_960_720.jpg"
          
          />
            <Typography component="p" className={classes.overview}>
              <strong>PLAYCOUNT</strong> - {artist[i].playcount}
              <br />
              <strong>LISTENERS</strong> - {artist[i].listeners}
            </Typography>
            <br />
            <Typography component="p" className={classes.overview}>
              
              <Button className='btninfon' variant="contained" color="primary" onClick={notify} href={artist[i].url}>Click here for more info </Button>
              <br/>
              <br/>
              <Button className='btninfon' variant="contained" color="primary" onClick={addfavrt(artist)} >View Favourite</Button>
              <br/>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  };

  render() {
    if (this.props.hasErrored) {
      return (
        <div className="center">
          <h1> Oops! Couldn't fetch data. </h1>
        </div>
      );
    }

    if (this.props.isLoading) {
      return (
        <div className="center">
          <CircularProgress color="secondary" size={150} disableShrink />
        </div>
      );
    }

    return (
      <div className='artist'>
        <h1 className="title">ALL ARTISTS</h1>
        <div className='testcard'>
        <div className="artist-listing__blocks">
          {this.state.artists !== undefined
            ? this.state.artists.map((item, index) => {
                return <div key={index}>{this.renderArtistTile(index)}</div>;
              })
            : []}
        </div>
        </div>
      </div>
    );
  }
}

TopArtistBackup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardTileStyles)(TopArtistBackup);
