import "../styles/main.css";

import { Button, CardMedia } from "@material-ui/core";
import React, { Component } from 'react';

import Backendservice from '../service/BackendService';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";

class favlist extends Component {

  constructor (){
    super();
    this.state = {artists:[]}
    this.deleteFav = this.deleteFav.bind(this);
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      Backendservice.getAllRecommandlist().then((response)=> {

      console.log(response);
      console.log(response.data);
      this.setState({artists:response.data});
    })
    .catch((err)=>{
      toast.error("No Playlist for current user",{
          position:"top-right"
      });
      console.log("Please check playlist")
  })
  };


 deleteFav(id,e) {
  e.preventDefault();
  console.log(id);
  Backendservice.deleteFav(id)
    .then((response)=> {
      console.log(response);
    })
    .catch((err) => console.log(err));
   };
  renderfavert= (i) => {
    const { classes } = this.props;
    console.log("renderArtistTile");
    let artist = this.state.artists;
          return (
            <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom component="h2" className='cardnheader'>
              <strong className='cardnheader'>{artist[i].name}</strong>
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
              <br/>
               <Button className='buttondetails' variant="contained" color="primary" href={artist[i].url}>
                view profile of {artist[i].name}
              </Button>
              <br/>

          </CardContent>
        </Card>
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
    let userName = sessionStorage.getItem('userName');
    return (
      <div className="artist">
        <h4 className='usernamed'>Welcome {userName} <br/><Button className='btninfonp' variant="contained" color="primary" component ={Link} to ='/'>Logout</Button>
         </h4>
        <h1 className="title">Recommended Playlists
        <Button className='btninfonp' variant="contained" color="secondary" component ={Link} to ='/artists'>Back</Button>
          </h1>
        <div className='testcard'>
        <div className="artist-listing__blocks">
          {this.state.artists !== undefined
            ? this.state.artists.map((item, index) => {
                return <div key={index}>{this.renderfavert(index)}</div>;
              })
            : []}
        </div>
        </div>
      </div>
    );
  }
};

favlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardTileStyles)(favlist);