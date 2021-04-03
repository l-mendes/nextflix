import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  topbar: {
    padding: '.75rem 3rem .5rem'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.topbar}>
          <div className={classes.logo}>
            <img src="https://fontmeme.com/permalink/210402/c19105dae269b521a07d37d4f5dfde6f.png" alt="NEXTFLIX"/>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}