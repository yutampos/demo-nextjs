import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image from "next/image";

const Charm05 = () => {
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
        style={{ transition: "all 2s ease" }}
        width="100vw"
        pt={{ md: 15, xs: 0 }}
        pl={{ md: "10%", xs: 0 }}
        display="flex"
      >
        <Grid position="relataive" height="100%">
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="start"
            margin="2rem"
          >
            <h2
              style={{
                fontSize: "3.7rem",
                fontWeight: "500",
                letterSpacing: "1.6px",
                lineHeight: "94px",
              }}
            >
              四川金竜への
              <br />
              アクセス
            </h2>
            <h3
              style={{
                // paddingLeft: "2%",
                maxHeight: "530px",
                fontSize: "1rem",
                fontWeight: "200",
                letterSpacing: "1.6px",
                lineHeight: "34px",
              }}
            >
              営業時間　17:00～翌3:00 <br />
              定休日：不定休
              <br />
              <br />
              営業時間・定休日は変更となる場合がございますのでご来店前に店舗にご確認ください。
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm05;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  transition: all 2s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
