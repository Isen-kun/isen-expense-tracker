import { Container, Grid } from "@material-ui/core";
import ButtonAppbar from "./Appbar";
import Overview from "./Overview";
import MoneyContextProvider from "../contexts/MoneyContext";
import NewBalanceSheet from "./NewBalanceSheet";
import Footer from "./Footer";
import { teal } from "@material-ui/core/colors";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: teal[100],
      }}
    >
      <ButtonAppbar />
      <MoneyContextProvider>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Overview />
            </Grid>
            <Grid item xs={12} md={8}>
              <NewBalanceSheet />
            </Grid>
          </Grid>
        </Container>
      </MoneyContextProvider>
      <Footer />
    </div>
  );
};

export default Home;
