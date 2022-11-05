import { Grid } from "@mui/material";
import styles from "../../../../../styles/bishamonten/components/Main/Top/top.module.css";

import Charm01 from "./Charm01";
import Charm02 from "./Charm02";

import Charm03 from "./Charm03";
import Charm04 from "./Charm04";
import Charm05 from "./Charm05";
import Charm06 from "./Charm06";

const Top = () => {
  return (
    <>
      <Grid height="100%" color="black" width="100%">
        <div className={styles.colorBox}>
          <Grid
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            paddingTop={12}
            paddingBottom={26}
            color="#C0BB82"
          >
            <Charm01 />
          </Grid>
        </div>
        <div className={styles.backgroundImg}>
          <Grid display="flex" alignItems="center" flexDirection="column">
            <Grid
              pb={30}
              position="relative"
              top="-50px"
              maxWidth="1600px"
              width="100%"
            >
              <Charm02 />
            </Grid>
          </Grid>
          <Grid
            paddingY={14}
            width="100%"
            display="flex"
            justifyContent="center"
            backgroundColor="rgba(255,255,255,0.9)"
            sx={{ backdropFilter: " blur(10px)" }}
          >
            <Grid maxWidth="1600px" width="100%">
              <Charm03 />
            </Grid>
          </Grid>
        </div>

        <Grid
          paddingY={14}
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(40,0,0,1)"
          color="#C0BB82"
        >
          <Grid maxWidth="1600px" width="100%">
            <Charm04 />
          </Grid>
          <Grid maxWidth="1600px" width="100%">
            <Charm05 />
          </Grid>
        </Grid>
        <Grid
          width="100%"
          display="flex"
          justifyContent="center"
          backgroundColor="white"
        >
          <Grid width="100%">
            <Charm06 />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Top;
