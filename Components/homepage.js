import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
  desktop: {
    position: "relative",
    width: "1920px",
    height: "1080px"
  },
  box1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "394px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "150px",
      height: "150px",
      left: "20px",
      top: "65px"
    }
  },
  box2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "786px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "150px",
      height: "150px",
      left: "190px",
      top: "65px"
    }
  },
  box3: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "1178px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "150px",
      top: "240px",
      left: "20px"
    }
  },
  box4: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "1570px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "150px",
      top: "240px",
      left: "190px"
    }
  },

  sideBar: {
    position: "absolute",
    width: "330px",
    height: "1010px",
    left: "0px",
    top: "70px",
    background: "#6FCF97",
    [theme.breakpoints.down("xs")]: {
      display:"none",
    }
  },
  sideBarmobile:{
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "240px",
      height: "640px",
      background: "#6FCF97",
    }
  },
  title: {
    position: "absolute",
    width: "1920px",
    height: "70px",
    left: "0px",
    top: "0px",
    background: "#6FCF97",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "360px",
      height: "40px",
      left: "0px",
      top: "0px"
    }
  },
  backgroundofitems: {
    background: "#E5E5E5"
  },
  lines1: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "24px",
      height: "3px",
      left: "20px",
      top: "25px",
      background: "#BB6BD9",
    }
  },
  lines2: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "24px",
      height: "3px",
      left: "20px",
      top: "18px",
      background: "#BB6BD9",
    }
  },
  lines3: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "24px",
      height: "3px",
      left: "20px",
      top: "11px",
      background: "#BB6BD9",
    }
  },

}));
export default useStyles;
