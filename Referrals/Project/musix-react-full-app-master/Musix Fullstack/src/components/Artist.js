import 'react-toastify/dist/ReactToastify.css';

import ArtistDetailBackup from "./ArtistDetailBackup";
import Favlist from "./favlist";
import Login from "./login";
import React from "react";
import Recommendlist from './recommendlist';
import Register from "./Register";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import TopArtistBackup from "./TopArtistBackup";

const Artist = (props) => (
  <main>
     <ToastContainer />
    <Switch>
    <Route exact path="/"><Login/></Route>
      <Route exact path="/app"><Login/></Route>
      <Route exact path="/register"><Register/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/favlist"><Favlist {...props}/></Route>
      <Route exact path="/recommend"><Recommendlist/></Route>
      <Route exact path="/artists" render={() => <TopArtistBackup {...props} />} />
      <Route
        exact
        path="/artistInfo/:artistName"
        render={(routeProps) => (
          <ArtistDetailBackup {...{ ...props, ...routeProps }} />
        )}
      />
    </Switch>
  </main>
);

export default Artist;
