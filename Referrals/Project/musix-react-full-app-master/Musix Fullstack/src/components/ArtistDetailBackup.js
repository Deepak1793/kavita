import "../styles/main.css";

import Backendservice from '../service/BackendService';
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "../styles/styles";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";

class ArtistDetailBackup extends React.Component {

    constructor (){
        super();
        this.state = {artistDetails:{}}
    }
  fetchArtistData(artistName) {
    Backendservice.getArtistdetails(artistName).then((res)=>{
        if(res.status===200){

            // console.log("getting data");
            // console.log(res);
            // console.log(res.data);
            this.setState({artistDetails:res.data});
            
        }
    }).catch((err)=>{
        
        console.log("Please check the credentials");
        toast.error("No mapping data found",{
          position:"top-right"
      });
    })
    
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    let artistName = this.props.match.params.artistName;
    if (artistName !== prevProps.match.params.artistName) {
      this.fetchArtistData(artistName);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let artistName = this.props.match.params.artistName;
    this.fetchArtistData(artistName);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  render() {
    const { classes } = this.props;

    let backToHome = (
      <Link className='backtohomebtn' to="/artists">
        Back To Home
      </Link>
    );

    if (this.props.isLoading) {
      return (
        <div className="center">
          <CircularProgress color="secondary" size={150} disableShrink />
        </div>
      );
    }

    if (this.props.match.params.artistName === "undefined") {
      
      return (
        <div>
          {" "}
          {backToHome}
          <h1 className='headername'>Enter Valid Artist Name</h1>
        </div>
      );
    }

    if (this.isEmpty(this.state.artistDetails)) {
      return (
        <div>
          {" "}
          {backToHome}
          <h1>Artist not found</h1>
        </div>
      );
    }

    let playCount = this.state.artistDetails.stats
      ? this.state.artistDetails.stats.playcount
      : null;

    let listeners = this.state.artistDetails.stats
      ? this.state.artistDetails.stats.listeners
      : null;

    let para = this.state.artistDetails.bioContent
      ? this.state.artistDetails.bioContent
      : null;

    if (para !== null) {
      let text = para.split("<");
      para = text[0];
    }

    let tags = this.state.artistDetails.tags
      ? this.state.artistDetails.tags.tag.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;
      let similar = this.state.artistDetails.similar
      ? this.state.artistDetails.similar.artist.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;
      let userName = sessionStorage.getItem('userName');
    return (
      <div className='artistdetailcard'>
        <h4 className='usernamed'>Welcome {userName} <br/><Button className='btninfonp' variant="contained" color="primary" component ={Link} to ='/'>Logout</Button>
         </h4>
        {backToHome}
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography gutterBottom component="h2" className={classes.title}>
              <strong>{this.state.artistDetails.name}</strong>
            </Typography>
            <Typography>
              <strong>Playcount: </strong>
              {playCount}
            </Typography>
            <br />
            <Typography>
              <strong>Listeners:</strong> {listeners}
            </Typography>
            <br />
            <Typography>
              {tags.length !== 0 ? <strong>Tags:</strong> : null}
            </Typography>
            <br />
            {tags}
            <br />
            {para.length !== 0 ? <strong>Overview :</strong> : null}
            <p className={classes.overview}>{para}</p>
            <br/>
            <Typography>
              <a className='buttondetails' href={this.state.artistDetails.url}>
                Click here to view profile of {this.state.artistDetails.name}
              </a>
            </Typography>
            <br />
            
              {similar.length !== 0 ? <strong>Similar artists: </strong> : null}
             <br/>
             {similar}
             <br/>
             <Button component={Link} to ="/artists" variant="contained" color="secondary"> Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(cardStyles)(ArtistDetailBackup);
