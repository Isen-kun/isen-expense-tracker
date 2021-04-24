import { Container, Grid } from "@material-ui/core";
import Appbar from "./Appbar";
import Overview from "./Overview";
import BalanceSheet from "./BalanceSheet";
import MoneyContextProvider from "../contexts/MoneyContext";

const Home = () => {
  return (
    <>
      <Appbar />
      <MoneyContextProvider>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Overview />
            </Grid>
            <Grid item xs={12} md={8}>
              <BalanceSheet />
            </Grid>
          </Grid>
        </Container>
      </MoneyContextProvider>
    </>
  );
};

export default Home;
