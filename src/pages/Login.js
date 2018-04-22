import React, { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import { Redirect } from "react-router-dom";
import Paper from "material-ui/Paper";

const styles = {
  root: {
    margin: "0 auto",
    marginTop: "35vh",
    width: "80vw",
    padding: "100px 0"
  }
};

class Login extends Component {
  state = {
    redirectToReferrer: false,
    error: false,
  };

  login = () => {
    this.setState({ redirectToReferrer: true });
  };
  handleSumbit = () => {
    if (this.props.handleSubmit()) {
      this.setState({ error: false });
      this.login();
    } else {
      this.setState({ error: true, helperText: "Your password is incorrect" });
    }
  };
  render() {
    const { from } = { from: { pathname: "/" } };
    const { redirectToReferrer, error, helperText } = this.state;
    const { classes, handleChange } = this.props;

    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <Paper className={classes.root}>
        <h2 style={{textAlign: "center"}}>Welcome to Australian Invasive Species Site</h2>
        <Grid container direction="row" justify="center" alignItems="baseline">
          <Grid item md={4}>
            <TextField
              id="login"
              label="Please input the password"
              margin="normal"
              type="password"
              onChange={handleChange}
              error={error}
              helperText={helperText}
            />
          </Grid>
          <Grid item md={1}>
            <Button
              variant="raised"
              color="primary"
              onClick={this.handleSumbit.bind(this)}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);
