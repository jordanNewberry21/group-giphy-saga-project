import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing(1),
  },
});
class SearchItem extends Component {
  render() {
    const classes = this.props;
    return (
      <Grid container spacing={3} alignItems='stretch'>
        {this.props.reduxState.searchString.map((img) => (
          <Grid key={img.id} item xs={12} sm={6} md={4} lg={4}>
            <Card component={Card} className={classes.root}>
              <CardContent>
                <Typography variant='h4'>{img.title}</Typography>
              </CardContent>
              <CardMedia
                component='img'
                className={classes.media}
                image={img.images.original.url}
                alt={img.title}
              />
              <CardActions>
                <Button
                  //   className={classes.button}
                  variant='contained'
                  color='primary'
                  onClick={() =>
                    this.props.dispatch({
                      type: 'SET_FAVORITE',
                      payload: img.images.original.url,
                    })
                  }
                >
                  Favorite
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    ); // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(mapReduxStateToProps)(SearchItem));
