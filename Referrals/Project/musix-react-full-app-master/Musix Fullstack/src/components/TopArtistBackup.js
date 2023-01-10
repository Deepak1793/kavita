import "../styles/main.css";
import { Button, CardMedia } from "@material-ui/core";
import React, { Component } from "react";
import Backendservice from '../service/BackendService';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThumbUpOffAlt from '@material-ui/icons/ThumbUpOutlined';
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";
class TopArtistBackup extends Component {
  constructor (props){
    super(props);
        this.state = {artists:[]}
    }
    componentDidMount() {
    window.scrollTo(0, 0);
    Backendservice.getTopArtists().then((res)=>{
        if(res.status===200){
            console.log("getting data");
            console.log(res);
            this.setState({artists:res.data});
            console.log(res.data);
            toast.success("TopArtists details fetched sucssfully",{
                position:"bottom-right"
            });
        }
    }).catch((err)=>{
        toast.error("Username and password  not registered",{
            position:"bottom-right"
        });
        console.log("Please check the credentials")
    })
  }
  renderArtistTile = (i) => {
    const { classes } = this.props;
    //console.log("renderArtistTile");
    let artist = this.state.artists;
    const notify = () => toast("Artist details fetched sucessfully",{
      position:"bottom-right"
  });
    const favouriteadding = (value) =>{
      console.log(value)
       let object ={
       name:value.name,
       image:"https://cdn.pixabay.com/photo/2017/11/11/18/31/music-player-2939936_960_720.jpg",
       listeners:value.listeners,
       playcount:value.playcount,
       url:value.url,
       user:sessionStorage.getItem("userName")
      }
      console.log(object);
      Backendservice.addtoFav(object).then((res)=>{
        if(res.status===200){
          toast.success("Artist added to favourite succesfully",{
              position:"bottom-right"
          });
          this.props.history.push('/favlist');
      }
    })
     .catch((err) => {
       toast.error("please press correct data",{
         position:"bottom-right"
     })
    });
     }
     const recommendadding = (value) =>{
      console.log(value)
       let object ={
       name:value.name,
       listeners:value.listeners,
       playcount:value.playcount,
       url:value.url
      }
      console.log(object);
      Backendservice.addtoRecommend(object).then((res)=>{
        if(res.status===200){
          toast.success("Artist added for Recommendation succesfully",{
              position:"bottom-right"
          });
          this.props.history.push('/recommend');
      }
    })
     .catch((err) => {
       toast.error("please press correct data",{
         position:"bottom-right"
     })
    });
     }
    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom component="h2" className='cardnheader'>
            <IconButton   className='bookmarkicon1' onClick={()=>favouriteadding(artist[i])} color="secondary" aria-label="add to favorite">
               <FavoriteBorder/>
            </IconButton>
              <strong className='cardnheader'>{artist[i].name}</strong>
              <IconButton  className='bookmarkicon' onClick={()=>recommendadding(artist[i])} color="primary" aria-label="add to recommend">
               <ThumbUpOffAlt/>
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
              <Button className='btninfon' variant="contained" color="primary" component={Link} to={`/artistinfo/${artist[i].name}`} onClick={notify}>Click here for more info </Button>
              <br/>
              <br/>
            </Typography>
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
    const notify1 = () => toast("Favorite Playlist fetched successfully",{
      position:"bottom-right"
  });
    const notify2 = () => toast("Recommended Playlist fetched successfully",{
      position:"bottom-right"
  });
    return (
      <div className="artist">
        <h4 className='usernamed'>Welcome {userName} <br/><Button className='btninfonp' variant="contained" color="primary" component ={Link} to ='/'>Logout</Button>
         </h4>
        <h1 className="title">All Artists <br/>
         <Button className='btninfonp' variant="contained" color="primary" onClick={notify1} component ={Link} to ='/favlist'>View Favourite</Button>
         <Button className='btninfon' variant="contained" color="secondary" onClick={notify2} component ={Link} to ='/recommend'>View Recommended</Button>
              </h1>
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