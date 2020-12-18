import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
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
    this.props.dispatch({ type: 'FETCH_CATEGORIES', payload: payload });
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
                <label for='category'>Classify a category</label>
                <select
                  onChange={(e) => this.submit(e, img.id)}
                  name='category'
                >
                  <option value='funny'>Funny</option>
                  <option value='cohort'>Cohort</option>
                  <option value='cartoon'>Cartoon</option>
                  <option value='nsfw'>NSFW</option>
                  <option value='meme'>Meme</option>
                </select>
              </CardContent>
              <CardMedia
                component='img'
                className={classes.media}
                image={img.url}
                alt={img.title}
              />
              <CardActions></CardActions>
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
