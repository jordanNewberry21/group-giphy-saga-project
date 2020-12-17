import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
const styles = (theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: '50%',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing(1),
  },
});

class Search extends Component {
  state = {
    search: '',
  };
  handleSubmit = (e, input) => {
    e.preventDefault();
    this.props.dispatch({
      type: 'SEARCH',
      payload: { term: this.state.search },
    });
    this.setState({ search: '' });
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const classes = this.props.classes;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h4'>Search for a Gif!</Typography>
        <form
          autoComplete='on'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={this.handleSubmit}
        >
          <TextField
            name='search'
            helperText='Please enter a search term for giphy api'
            variant='outlined'
            label='Search Term'
            fullWidth
            value={this.state.search}
            onChange={this.handleChange}
          />
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Paper>
    ); // end return
  } // end render
} // end class

export default withStyles(styles)(connect()(Search));
