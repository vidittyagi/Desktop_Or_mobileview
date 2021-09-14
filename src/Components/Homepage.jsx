import React, { useContext, useEffect, useState } from "react";
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
import line from '@material-ui/icons/Maximize';

const homepage = () => {
  let classes = useStyles();
  const [clicked,setclicked] = useState(false);

  const btnclicked = ()=>{
    setclicked(!clicked);
  }

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
          <button className="linesbtn"
          onClick={
            ()=>{
              btnclicked();
            }
          }>
          <line className={classes.lines1}></line>
          <line className={classes.lines2}></line>
          <line className={classes.lines3}></line>
          </button>
        </Grid>

        {
            (clicked)?(
              <div className={classes.sideBarmobile}>Item 8</div>
            )
            :
            (
              (
                <div className={classes.sideBar}>Item 6</div>
              )
            )
        }
      </Grid>
    </div>
  );
};

export default homepage;
