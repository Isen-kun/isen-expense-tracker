import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useContext, useState } from "react";
import { MoneyContext } from "../contexts/MoneyContext";
import { v4 } from "uuid";

const useStyles = makeStyles((theme) => {
  return {
    form: {
      margin: "5%",
    },
    inputs: {
      marginBottom: theme.spacing(2),
    },
  };
});

const DialogueForm = (props) => {
  const { onClose, open } = props;
  const classes = useStyles();
  const handleClose = () => {
    onClose();
  };

  const { addRecords } = useContext(MoneyContext);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(moment());
  const [desc, setDesc] = useState("");

  function createData(id, name, type, amount, date, desc) {
    return { id, name, type, amount, date, desc };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecords(
      createData(
        v4(),
        name,
        type,
        amount,
        moment(date.toDate()).format("DD/MM/YYYY"),
        desc
      )
    );
    setName("");
    setType("");
    setAmount("");
    setDate(moment());
    setDesc("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Input the details of the new Transaction</DialogTitle>
      <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Name of the transaction"
          className={classes.inputs}
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        <FormControl className={classes.inputs} style={{ width: "100%" }}>
          <InputLabel id="type-tran">Type of transaction</InputLabel>
          <Select
            labelId="type-tran"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            required
          >
            <MenuItem value={"income"}>Income</MenuItem>
            <MenuItem value={"expense"}>Expense</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Amount transacted"
          className={classes.inputs}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          required
          type="number"
        />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            className={classes.inputs}
            disableToolbar
            variant="inline"
            format="DD/MM/yyyy"
            margin="normal"
            label="Date of transaction"
            value={date}
            onChange={(date) => setDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            fullWidth
          ></KeyboardDatePicker>
        </MuiPickersUtilsProvider>
        <TextField
          label="Description"
          helperText="If required"
          multiline
          rows={3}
          fullWidth
          className={classes.inputs}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Dialog>
  );
};

export default DialogueForm;
