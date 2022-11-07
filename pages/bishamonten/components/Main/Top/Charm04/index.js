import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image from "next/image";

const Charm04 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
    triggerOnce: true,
  });

  return (
    //　inView属性を割り当てる
    <Section ref={ref} inView={inView}>
      <Grid
        pt={{ md: 10, xs: 5 }}
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent="space-around"
        width="100%"
        maxWidth="1600px"
      >
        <Grid
          width={{ md: "60%", xs: "100%" }}
          display="flex"
          justifyContent="center"
        >
          <Grid
            width="100%"
            position="relative"
            height="600px"
            style={{ filter: "saturate(60%) contrast(170%) brightness(70%)" }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src="/bishamonten/oldble-all.jpg"
              alt="店員"
            />
          </Grid>
        </Grid>

        <Grid
          width={{ md: "40%", xs: "100%" }}
          display="flex"
          justifyContent={{ md: "flex-start", xs: "flex-start" }}
        >
          <Grid width="auto" display="flex" flexDirection="column">
            <Grid height="1900px" position="absolute">
              <Grid fontSize={{ md: "8rem", xs: "5rem" }}>
                <h2
                  style={{
                    writingMode: "vertical-rl",
                    margin: "0px",
                    fontWeight: "700",
                    letterSpacing: "90px",
                    opacity: "0.07",
                  }}
                >
                  自慢の味
                </h2>
              </Grid>
            </Grid>
            <Grid
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent={{ md: "center", xs: "flex-start" }}
              fontSize={{ md: "1.1rem", xs: "1rem" }}
            >
              <h3
                style={{
                  paddingTop: "3rem",
                  paddingLeft: "16%",
                  maxHeight: "530px",
                  fontWeight: "200",
                  letterSpacing: "1.6px",
                  lineHeight: "34px",
                }}
              >
                〒880-0011 <br />
                <br />
                宮崎県宮崎市上野町7−7 石井ビル1F <br />
                宮崎駅より車で5分
              </h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm04;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  transition: all 2s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
