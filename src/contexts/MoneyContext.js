import { createContext, useEffect, useState } from "react";

export const MoneyContext = createContext();

const MoneyContextProvider = (props) => {
  const [records, setRecords] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const calcTrans = () => {
      let plus = 0;
      let minus = 0;
      if (records.length === 0) {
        setIncome(0);
        setExpense(0);
        setBalance(0);
        return;
      }
      records.forEach((rec) => {
        if (rec.type === "income") {
          plus += parseInt(rec.amount);
          setIncome(plus);
        } else {
          minus += parseInt(rec.amount);
          setExpense(minus);
        }
      });
      setBalance(plus - minus);
    };

    calcTrans();
  });

  const addRecords = (record) => {
    setRecords([...records, record]);
  };

  const removeRecords = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <MoneyContext.Provider
      value={{ records, addRecords, income, expense, balance, removeRecords }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyContextProvider;
