import "../styles/main.css";

import { Button, CardMedia } from "@material-ui/core";
import React, { Component } from 'react';

import Backendservice from '../service/BackendService';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Delete from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";

class favlist extends Component {
  constructor (props){
    super(props);
    this.state = {artists:[]}
    this.getAllfavlist = this.getAllfavlist.bind(this);
    this.deleteFav = this.deleteFav.bind(this);
}

getAllfavlist = () => {
  Backendservice.getAllfavlist(sessionStorage.getItem("userName"))
    .then((response)=> {
      console.log(response);
      console.log(response.data);
      this.setState({artists:response.data});
    })
    .catch((err) => console.log(err));
};
componentDidMount(){
  this.getAllfavlist();
}

deleteFav(id,e) {
  e.preventDefault();
  console.log(id);
  Backendservice.deleteFav(id)
    .then((response)=> {
      console.log(response);
      if(response.status===200){
        toast.success("Deleted Successfully",{
          position:"bottom-right"});
          this.props.history.push('/artists');

      }
    })
    .catch((err) => console.log(err));
};

  render() {
    console.log("renderArtistTile");
    let userName = sessionStorage.getItem('userName');
    const { classes } = this.props;
    return (
      <div className="artist">
        <h4 className='usernamed'>Welcome {userName} <br/><Button className='btninfonp' variant="contained" color="primary" component ={Link} to ='/'>Logout</Button>
         </h4>
         <h1 className="title">Favorite PlayList<Button className='btninfonp' variant="contained" color="secondary" component ={Link} to ='/artists'>Back</Button>
          </h1>
          <div className='testcard'>
          <div className="artist-listing__blocks">
        {this.state.artists &&
        this.state.artists.length > 0 &&
        this.state.artists.map((artist) => {
          return (
            <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom component="h2" className='cardnheader'>
              <strong className='cardnheader'>{artist.name}</strong>
              <IconButton component ={Link} to ='/favlist'  className='bookmarkicon1' onClick={(event)=>this.deleteFav(artist.id,event)} color="secondary" aria-label="add to favorite">
               <Delete/>
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
              <strong>PLAYCOUNT</strong> - {artist.playcount}
              <br />
              <strong>LISTENERS</strong> - {artist.listeners}
              <br />
            <Typography component="p" className={classes.overview}>
              <br/>
              <Button className='btninfon' variant="contained" color="primary" href={artist.url}>view profile of {artist.name} </Button>
              <br/>
            
            </Typography>
          </CardContent>
        </Card>
          );
        })}
        </div>
        </div>
    </div>
    )
  }
}

favlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardTileStyles)(favlist);