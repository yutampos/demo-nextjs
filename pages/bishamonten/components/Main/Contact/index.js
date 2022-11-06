import { Grid } from "@mui/material";
import styles from "../../../../../styles/bishamonten/components/Main/Contact/contact.module.css";
import Charm06 from "../Top/Charm06";
import Charm01 from "./Charm01";
import Charm02 from "./Charm02";

const Contact = () => {
  return (
    <>
      <Grid
        py={14}
        height="100%"
        color="black"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Grid
          maxWidth="1600px"
          display="flex"
          flexDirection="column"
          width="90%"
        >
          <Grid
            py={15}
            mb={15}
            maxWidth="1600px"
            width="100%"
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
            }}
          >
            <Charm01 />
          </Grid>

          <Grid
            pt={3}
            pb={9}
            maxWidth="1600px"
            width="100%"
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
            }}
          >
            <Charm02 />
          </Grid>
        </Grid>
      </Grid>
      <Grid color="black" width="100%" display="flex" justifyContent="center">
        <Grid width="100%">
          <Charm06 />
        </Grid>
      </Grid>
    </>
  );
};
export default Contact;
