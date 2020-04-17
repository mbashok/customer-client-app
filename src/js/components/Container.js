// Container component
// It is the container/placeholder all other components

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Customer from "./Customer";
import Address from "./Address";
import TitleBar from "./TitleBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.Primary
  }
}));

export default function Container() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TitleBar title="Customers" />
            <Customer />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TitleBar title="Addresses" />
            <Address />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}