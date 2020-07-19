import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import './Drawer.css'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function PermanentDrawerLeft(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <Link to='/'><ListItem button key='Feeling'>
              <ListItemText primary='Feeling' />
            </ListItem></Link>
            <Link to='/Understanding'><ListItem button key='Understanding'>
              <ListItemText primary='Understanding' />
            </ListItem></Link>
            <Link to='/Support'><ListItem button key='Support'>
              <ListItemText primary='Support' />
            </ListItem></Link>
            <Link to='/Comments'><ListItem button key='Comments'>
              <ListItemText primary='Comments' />
            </ListItem></Link>
            <Link to='/Review'><ListItem button key='Review'>
              <ListItemText primary='Review' />
            </ListItem></Link>

        </List>
      </Drawer>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);