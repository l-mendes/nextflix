import { makeStyles } from "@material-ui/core";
import TopBar from "../TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 60,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    padding: '1rem .5rem 1rem 3.6rem'
  }
}));

const Layout = ({ children, title }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;