import "../styles/main.css";

import { Button, CardMedia } from "@material-ui/core";

import Backendservice from '../service/BackendService';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from 'react'
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";

class favlist extends Component {

    constructor (){
        super();
        this.state = {artists:[]}
    }
    componentDidMount() {
    window.scrollTo(0, 0);
    
    let userName = sessionStorage.getItem('userName');
    Backendservice.getfavlistUser(userName).then((res)=>{
        if(res.status===200){

            console.log("getting data");
            console.log(res);
            console.log(userName);
            this.setState({artists:res.data});
            console.log(res.data);
            toast.success("PlayList fetched sucssfully",{
                position:"top-right"
            });
        }
    }).catch((err)=>{
        toast.error("No Playlist for current user",{
            position:"top-right"
        });
        console.log("Please check playlist")
    })
     

  }
  
  renderArtistTile = (i) => {

    const { classes } = this.props;
    console.log("renderArtistTile");
    let artist = this.state.artists;
    return (
      <Link to={`/artistinfo/${artist.name}`}>
        <Card className={classes.card}>
        
          <CardContent>
            <Typography gutterBottom component="h2" className='cardnheader'>
            
              <strong className='cardnheader'>{artist.name}</strong>
              
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
              <strong>PLAYCOUNT</strong> - {artist.playcount}
              <br />
              <strong>LISTENERS</strong> - {artist.listeners}
            </Typography>
            <br />
            <Typography component="p" className={classes.overview}>
              
              <Button className='btninfon' variant="contained" color="primary" href={artist.url}>Click here for more info </Button>
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
      <div className="artist">
        <h1 className="titlefav">Favorite PlayList</h1>
        <div className='testcard'>
        <div className="artist-listing__blocks">
          {this.state.artists !== undefined
            ? 
            //this.state.artists((item, index) => {
                <div>{this.renderArtistTile(0)}</div>
              //})
            : null}
        </div>
        </div>
      </div>
    );
  }
}

favlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardTileStyles)(favlist);

