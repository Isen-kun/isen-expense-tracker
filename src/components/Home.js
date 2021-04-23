import { Container, Grid, Typography } from "@material-ui/core";
import Appbar from "./Appbar";
import Overview from "./Overview";
import BalanceSheet from "./BalanceSheet";

const Home = () => {
  return (
    <>
      <Appbar />
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Overview />
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              temporibus eligendi illo praesentium odit veniam reiciendis rem
              aliquam veritatis saepe. Ipsam iusto saepe voluptas esse tenetur
              architecto mollitia, quos similique!
            </Typography> */}
            <BalanceSheet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
