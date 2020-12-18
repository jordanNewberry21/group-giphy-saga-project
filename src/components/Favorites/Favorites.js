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

class Favorites extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_FAVORITES' });
  }

  submit = (e, id) => {
    let payload = { category_id: e.target.value, img_id: id };
    this.props.dispatch({ type: 'UPDATE_CATEGORY', payload: payload });
  };

  render() {
    const classes = this.props;
    return (
      <Grid container spacing={3} alignItems='stretch'>
        {this.props.reduxState.favorites.map((img) => (
          <Grid key={img.id} item xs={12} sm={6} md={4} lg={4}>
            <Card component={Card} className={classes.root}>
              <CardContent>
                <Typography variant='h4'>{img.title}</Typography>
              </CardContent>
              <CardMedia
                component='img'
                className={classes.media}
                image={img.url}
                alt={img.title}
              />
              <CardActions>
                <label for='category'>Classify a category</label>
                <select
                  onChange={(e) => this.submit(e, img.id)}
                  name='category'
                >
                  <option value='1'>Funny</option>
                  <option value='2'>Cohort</option>
                  <option value='3'>Cartoon</option>
                  <option value='4'>NSFW</option>
                  <option value='5'>Meme</option>
                </select>
                <Button
                  //   className={classes.button}
                  variant='contained'
                  color='primary'
                  onClick={() =>
                    this.props.dispatch({
                      type: 'DELETE_FAVORITE',
                      payload: img.id,
                    })
                  }
                >
                  DELETE
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

export default connect(mapReduxStateToProps)(Favorites);
