import { Grid } from "@mui/material";
import styles from "../../../../../styles/bishamonten/components/Main/Contact/contact.module.css";

import Charm06 from "../Top/Charm06";
import Charm01 from "./Charm01";
import Charm02 from "./Charm02";

const Contact = () => {
  return (
    <>
      <Grid height="100%" color="black" width="100%">
        <Grid width="100%" display="flex" justifyContent="center">
          <Grid py={9} maxWidth="1600px" width="100%">
            <Charm01 />
          </Grid>
        </Grid>
        <div className={styles.backgroundImg2}>
          <Grid width="100%" display="flex" justifyContent="center">
            <Grid py={9} maxWidth="1600px" width="100%">
              <Charm02 />
            </Grid>
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
export default Contact;
