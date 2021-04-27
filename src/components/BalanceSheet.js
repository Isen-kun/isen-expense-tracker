import {
  Box,
  Collapse,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React, { useContext, useState } from "react";
// import { v4 } from "uuid";
import { MoneyContext } from "../contexts/MoneyContext";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 50,
  },
  root: {
    marginTop: theme.spacing(4),
  },
}));

// function createData(id, name, type, amount, date, desc) {
//   return { id, name, type, amount, date, desc };
// }

// const rows = [
//   createData(
//     v4(),
//     "Pocket money",
//     "Income",
//     500,
//     "23/04/21",
//     "Woohoo free money!!"
//   ),
// ];

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.name}
        </TableCell>
        <TableCell align="center">
          {row.type === "income" ? "Income" : "Expense"}
        </TableCell>
        <TableCell align="center">{row.amount}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="body1" gutterBottom>
                Description:
              </Typography>
              <Typography variant="body2">
                {row.desc
                  ? row.desc
                  : "No description provided for this transaction."}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const BalanceSheet = () => {
  const classes = useStyles();
  const { records } = useContext(MoneyContext);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="transaction table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Name of the Transaction</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Amount&nbsp;(₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((row) => (
              // {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BalanceSheet;
