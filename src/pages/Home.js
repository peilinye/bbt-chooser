import React, { useState } from "react";
import ReactDOM from "react-dom";
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, InlineIcon } from '@iconify/react';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
           ll&pl
      {'.'}
    </Typography>
  );
}

const options = [
  "koi",
  "gong cha",
  "partea",
  "milksha",
  "playmade",
  "liho",
  "itea",
  "hollin tea",
  "chicha",
  "heytea",
  "the whale tea",
  "r & b tea",
  "machi machi",
  "purple panda",
  "blackball",
  "nearest one",
  "tiger sugar",
  "nayuki",
  "BaWangChaJi",
  "taigai",
  "the alley",
  "bober tea",
  "teabrary",
  "tp tea",
  "xingfutang",
  "jenjudan",
  "kungfu tea",
  "each a cup",
  "sharetea",
  "muyoo",
  "i love taimei",
  "unice",
  "hey long cha",
  "yocha",
  "artea",
  "chun yang tea",
  "nine fresh",
  "yuan cha"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function Deciding(props) {
  const classes = useStyles();
  const index = props.index;
  return (
    <Typography variant="h5" align="center" className={classes.custom}>
        {options[index]}
    </Typography>
);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#c0def0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(25, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(10, 5, 2),
  },
  custom: {
      color: "#D6485F",
      fontWeight: "bold",
      fontFamily: "Arial",
      fontSize: 28,
      marginTop: theme.spacing(2),
    },
  descriptions: {
      color: "#225FA6",
      fontWeight: "400",
      fontFamily: "Palatino",
      fontSize: 20,
      marginTop: theme.spacing(5)
    },    
  link: {
      color: "#FFFFFF"
  },
  button: {
        width: "150px",
        height: "70px",
        backgroundColor: "#225FA6",
        color: "#ffffff",
        marginTop: theme.spacing(6),
        fontSize: "25px",
        textAlign: "center",
  },
}));

export default function Login () {
  const classes = useStyles();
  let [Count, setCount] = useState(-1);

  function handleChange(event) {
      setCount(getRandomInt(options.length))
  }

  return (
    <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} className={classes.image}>
            <div className={classes.paper}>
                <Icon icon="noto:bubble-tea" width="7em" height="7em" />
              <Typography variant="h5" align="center" className={classes.custom}>
                Bubble Tea chooser
              </Typography>

              <Typography variant="h7" align="center" className={classes.descriptions}>
                Click on the button below to help you decide what to eat!
              </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    component="span"
                    className={classes.button}
                    alignItems="center"
                    onClick={handleChange}
                >
                    choose!
                </Button>
                <Box mt={5} >
                    <Deciding index={Count}/>
                </Box>
            <Box mt={5}>
                <Copyright />
            </Box>
            </div>
          </Grid>
        </Grid>
  );
};
