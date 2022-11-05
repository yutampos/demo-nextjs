import { Grid } from "@mui/material";
import styles from "../../../../../styles/bishamonten/components/Main/Info/info.module.css";
import Charm01 from "./Charm01";
import Charm02 from "./Charm02";
import Charm03 from "./Charm03";

import Charm06 from "../Top/Charm06";

const Info = () => {
  return (
    <>
      <Grid height="100%" color="black" width="100%">
        <div className={styles.backgroundImg}>
          <Grid
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            style={{ backdropFilter: "blur(5px) brightness(60%)" }}
          >
            <Charm01 />
          </Grid>
        </div>

        <Grid display="flex" alignItems="center" flexDirection="column">
          <Grid position="relative" maxWidth="1600px" width="100%">
            <Charm02 />
          </Grid>
        </Grid>

        <div className={styles.backgroundImg2}>
          <Grid
            paddingY={14}
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ backdropFilter: " blur(1.4px)" }}
          >
            <Charm03 />
          </Grid>
        </div>

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
export default Info;
