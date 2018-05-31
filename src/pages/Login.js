import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from "material-ui/TextField";
import {StyledButton} from "../components/common/ActionButtonGroup";
import Grid from "material-ui/Grid";
import {Redirect} from "react-router-dom";
import Paper from "material-ui/Paper";
import PageContainer from "../components/common/PageContainer";

const LoginWrapper = styled(Paper)`
    position: relative;
    margin: 0 auto;
    top: 20vh;
    width: 80vw;
    padding: 100px 0;

`

class Login extends Component {
  state = {
    redirectToReferrer: false,
    error: false
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
    const { handleChange } = this.props;

    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <PageContainer>
        <LoginWrapper >
          <h2 style={{ textAlign: "center" }}>Welcome to Victorian Guardian</h2>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            <Grid item>
              <TextField
                id="login"
                label="Enter password"
                margin="normal"
                type="password"
                onChange={handleChange}
                error={error}
                helperText={helperText}
              />
            </Grid>
            <Grid item>
              <StyledButton
                variant="raised"
                type="primary"
                onClick={this.handleSumbit.bind(this)}
              >
                Login
              </StyledButton>
            </Grid>
          </Grid>
        </LoginWrapper>
      </PageContainer>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Login;
