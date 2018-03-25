import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = {
    root: {
        paddingTop: '0.5rem'
    }
}

const TableToolbar = ({classes, title}) => {
    return (
        <Toolbar>
            <Typography variant="title">{title}</Typography>
        </Toolbar>
    )
}

TableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}

TableToolbar.defaulProps = {
    classes: {},
    title: "title"
}

export default withStyles(styles)(TableToolbar)