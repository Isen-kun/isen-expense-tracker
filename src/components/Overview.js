import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { useContext, useState } from "react";
import { MoneyContext } from "../contexts/MoneyContext";
import DialogueForm from "./DialogueForm";

const useStyles = makeStyles((theme) => ({
  paperGreen: {
    backgroundColor: green[400],
    textAlign: "center",
    height: theme.spacing(10),
    position: "relative",
  },
  paperRed: {
    backgroundColor: red[400],
    textAlign: "center",
    height: theme.spacing(10),
    position: "relative",
  },
  paperText: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    height: theme.spacing(6),
  },
  topText: {
    textAlign: "center",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(6),
    textAlign: "center",
  },
}));

const Overview = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { income, expense, balance } = useContext(MoneyContext);

  return (
    <div>
      <div className={classes.topText}>
        <Typography variant="h6">
          {balance >= 0 ? "Your Balance" : "Your Debt"}
        </Typography>
        <Typography variant="subtitle1">₹ {balance}</Typography>
      </div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Paper className={classes.paperGreen}>
            <div className={classes.paperText}>
              <Typography variant="body1">Income</Typography>
              <Typography variant="body1">₹ {income}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRed}>
            <div className={classes.paperText}>
              <Typography variant="body1">Expense</Typography>
              <Typography variant="body1">₹ {expense}</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.button}>
        <Button variant="contained" onClick={handleClickOpen}>
          Add a new transaction
        </Button>
      </div>
      <DialogueForm open={open} onClose={handleClose} />
    </div>
  );
};

export default Overview;
