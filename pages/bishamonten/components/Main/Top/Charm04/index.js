import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import Oldble from "../../../../../../public/bishamonten/oldble-all.jpg";

import Image from "next/image";
import { Grid } from "@mui/material";

const Charm04 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-300px",
    triggerOnce: true,
  });

  return (
    //　inView属性を割り当てる
    <Section ref={ref} inView={inView}>
      <Grid display="flex" justifyContent="center">
        <Grid width="70%" display="flex" justifyContent="center">
          <Grid width="100%" height="500px" overflow="hidden" position="static">
            <Grid
              width="100%"
              pr={10}
              mt={-30}
              style={{ filter: "saturate(60%) contrast(170%) brightness(70%)" }}
            >
              <Image width={4879} height={5029} src={Oldble} alt="店員" />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          width="30%"
          position="relative"
          bottom="0px"
          display="flex"
          justifyContent="center"
        >
          <Grid width="auto" display="flex" flexDirection="column">
            <h2
              style={{
                fontSize: "3.7rem",
                fontWeight: "400",
                letterSpacing: "1.6px",
                lineHeight: "94px",
              }}
            >
              自慢の中華
              <br />
              四川金龍
            </h2>
            <h3
              style={{
                paddingLeft: "6%",
                maxHeight: "530px",
                minWidth: "500px",
                fontSize: "1rem",
                fontWeight: "200",
                letterSpacing: "1.6px",
                lineHeight: "34px",
              }}
            >
              〒880-0011 <br />
              宮崎県宮崎市上野町7−7 石井ビル1F <br />
              宮崎駅より車で5分
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm04;
// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
