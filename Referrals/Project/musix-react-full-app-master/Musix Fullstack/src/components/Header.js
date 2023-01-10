import "../styles/main.css";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import { headerStyles } from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
     
        <Toolbar className={classes.t}>
        <h2 className='headerlogo'><Link to='/app'>Musix React App</Link></h2>
          <TextField
            className={classes.textField}
            id="artist"
            placeholder="Search artist"
            variant="outlined"
            value={props.inputValue}
            onChange={props.handleInput}
            margin="dense"
          />
          <Link
            to={{
              pathname: `/artistinfo/${props.input.inputValue}`,
            }}
          >
            <Button variant="contained" color="secondary" type="submit">
              Search
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyles)(Header);
