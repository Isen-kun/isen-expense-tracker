import { createContext, useEffect, useState } from "react";

export const MoneyContext = createContext();

const MoneyContextProvider = (props) => {
  const [records, setRecords] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const calcTrans = () => {
    let plus = 0;
    let minus = 0;
    records.forEach((rec) => {
      if (rec.type === "income") {
        plus += parseInt(rec.amount);
        setIncome(plus);
      } else {
        minus += parseInt(rec.amount);
        setExpense(minus);
      }
      setBalance(plus - minus);
    });
  };

  useEffect(() => {
    calcTrans();
  }, [records]);

  const addRecords = (record) => {
    setRecords([...records, record]);
  };

  return (
    <MoneyContext.Provider
      value={{ records, addRecords, income, expense, balance }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyContextProvider;
