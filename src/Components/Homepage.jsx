import React, { useContext, useEffect } from "react";
import {
  TextField,
  Grid,
  Button,
  Paper,
  Card,
  CardContent,
  CardActions,
  Container,
  CardMedia,
  Typography,
  makeStyles,
  IconButton,
  CardActionArea,
  Avatar
} from "@material-ui/core";
import useStyles from "./homepage";

const homepage = () => {
  let classes = useStyles();
  return (
    <div className="classes.desktop">
      <Grid>
        <div className="classes.backgroundofitems">
          <Grid>
            <div className={classes.box1}>Item 1</div>
          </Grid>
          <Grid>
            <div className={classes.box2}>Item 2</div>
          </Grid>
          <Grid>
            <div className={classes.box3}>Item 3</div>
          </Grid>
          <Grid>
            <div className={classes.box4}>Item 4</div>
          </Grid>
        </div>

        <Grid>
          <div className={classes.title}>Item 5</div>
        </Grid>
        {/* <Grid>
          <div className={classes.sideBar}>Item 6</div>
          </Grid> */}
      </Grid>
    </div>
  );
};

export default homepage;
