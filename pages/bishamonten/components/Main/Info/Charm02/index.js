import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import Cook from "../../../../../../public/bishamonten/cook.jpg";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

const infoList = [
  { key: 0, name: "店舗名", value: "一口餃子の大明神" },
  { key: 0, name: "店主", value: "野田 明伸" },
  { key: 0, name: "住所", value: "宮崎市上野町7−7 石井ビル1F" },
  { key: 0, name: "TEL", value: "080-3944-6543" },
  { key: 0, name: "MAIL", value: "info@daimyojin.com" },
];

const HorizonLine = () => {
  return (
    <Grid width="900px">
      <Grid
        p={0.1}
        borderTop="solid rgb(112, 99, 79)"
        style={{ opacity: "40%" }}
      />
    </Grid>
  );
};

const Self = (name, value) => {
  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Grid width="100%" px={3}>
        <Grid width="100%" p={2.4} display="flex">
          <Grid width="100px">
            <Typography>{name}</Typography>
          </Grid>

          <Typography>{value}</Typography>
        </Grid>

        <Grid
          width="100%"
          borderTop=" dashed 0.9px black"
          style={{ opacity: "80%" }}
        />
      </Grid>
    </Grid>
  );
};
const Charm02 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
    triggerOnce: true,
  });

  return (
    //　inView属性を割り当てる
    <Section ref={ref} inView={inView}>
      <Grid display="flex" justifyContent="center">
        <Grid
          height="580px"
          width="30px"
          sx={{
            pl: "10%",
            pr: "4%",
            pt: "6%",
            orverflow: "hidden",
            position: "relative",
            left: "-100px",
          }}
        >
          <Grid
            border="double 3.6px #c2c2c2"
            sx={{ width: "80px", height: "200px" }}
          ></Grid>
          <Grid
            sx={{
              position: "relative",
              top: "-220px",
              left: "0px",
              backgroundColor: "white",
              width: "110px",
              height: "300px",
              transform: "rotate(-26deg)",
            }}
          >
            <h2
              style={{
                paddingTop: "2.9rem",
                paddingLeft: "0.9rem",
                fontSize: "2rem",
                fontWeight: "200",
                letterSpacing: "2.6px",
                lineHeight: "48px",
                writingMode: "vertical-rl",
                transform: "rotate(26deg)",
              }}
            >
              店舗概要
            </h2>
          </Grid>
        </Grid>
        <Grid width="550px" fontFamily="serif" mt={10}>
          {infoList.map((info) => {
            return Self(info.name, info.value);
          })}
        </Grid>
        <Grid
          ml={1}
          mt={13}
          maxWidth="450px"
          maxHeight="300px"
          border={1}
          overflow="hidden"
        >
          <Grid mt={-20}>
            <Image width={4160} height={6240} src={Cook} alt="店員" />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm02;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  orverflow: "hidden";
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
