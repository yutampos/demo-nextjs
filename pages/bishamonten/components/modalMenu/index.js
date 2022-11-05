import { Button, Grid } from "@mui/material";
import { useState } from "react";
import MenuDetail from "./MenuDetail";
import { Charm01 } from "./MenuDetail/Charm01";

const btnStyle1 = {
  opacity: 0,
};
const btnStyle2 = {
  marginBottom: 0,
  transform: "rotate(45deg)",
};
const btnStyle3 = {
  too: "0px",
  marginTop: "-16px",
  transform: "rotate(-45deg)",
};

const modalStyle = {
  backgroundColor: "rgba(48, 0, 0, 1)",
};
const rtnAuto = () => {
  return "auto";
};

const ModalMenu = () => {
  //   const [isOpened, setIsOpened] = useState(false);

  //   const handleOpen = () => {
  //     setIsOpened(true);
  //   };
  //   const handleClose = () => {
  //     setIsOpened(false);
  //   };
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <button onClick={handleOpen}>
        
      </button>
      <Modal open={isOpened} onClose={handleClose}>
        青いう
      </Modal> */}

      <Grid
        position="fixed"
        sx={open === true ? modalStyle : null}
        style={{ transition: "0.2s" }}
        zIndex="1000"
      >
        <Grid
          position="fixed"
          top="37px"
          right="40px"
          width="40px"
          height="70px"
          display="flex"
          alignItems="center"
          zIndex={1000}
        >
          <Button
            onClick={handleChange}
            style={{ position: "absolute", right: "0px" }}
          >
            <Grid m={1} width="30px" height="100%">
              <Grid
                width="100%"
                height="auto"
                // display="flex"
                // flexDirection="column"
                color="#dfe8a1"
                style={{ transform: " translateZ(0)" }}
              >
                <Grid
                  width="100%"
                  mb="0.6rem"
                  borderTop={3}
                  style={{ transition: "0.2s", top: "0px" }}
                  sx={open === true ? btnStyle2 : null}
                />
                <Grid
                  mb="0.6rem"
                  borderTop={3}
                  style={{ transition: "0.2s", top: "0px" }}
                  sx={open === true ? btnStyle1 : null}
                />

                <Grid
                  borderTop={3}
                  style={{ transition: "0.2s", top: "20px" }}
                  sx={open === true ? btnStyle3 : null}
                />
              </Grid>
            </Grid>
          </Button>
        </Grid>
      </Grid>
      <Grid
        width="100%"
        height={open === true ? "100%" : "0px"}
        position="fixed"
        sx={open === true ? modalStyle : null}
        style={{ transition: "0.03s" }}
      >
        {open === true ? <Charm01 /> : null}
      </Grid>
    </>
  );
};
export default ModalMenu;
