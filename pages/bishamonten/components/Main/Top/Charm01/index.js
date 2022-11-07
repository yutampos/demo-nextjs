import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const Charm01 = () => {
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
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        width="100%"
      >
        <Grid
          width={{ md: "55%", xs: "100%" }}
          display="flex"
          justifyContent="center"
        >
          <Grid
            position="relative"
            width="1000px"
            height={{ md: "550px", xs: "400px" }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src="/bishamonten/nikuman.png"
              alt="肉まん"
            />
          </Grid>
        </Grid>
        <Grid
          width={{ md: "45%", xs: "100%" }}
          display="flex"
          justifyContent="center"
          padding={{ md: 7, xs: 16 }}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          maxHeight={{ md: "600px", xs: "730px" }}
        >
          <h3
            style={{
              writingMode: "vertical-rl",
              fontWeight: "400",
              letterSpacing: "1.6px",
              lineHeight: "34px",
            }}
          >
            芸術品と言って頂ける形状、その見た目からは想像できなかったと言って頂けるしっかりとした味
            <br />
            その両面で楽しんでもらっております。
            <br />
            食べやすい一口サイズですので女性にもお子様にも大好評。
            <br />
            一口餃子はひとつひとつお店で手包みしています。
            <br />
            自家製ゆず胡椒を使用し、コク深い味わいがクセになる一口餃子です。
            <br />
            誰もが好きな間違いない安定感のある王道のおいしさです。
          </h3>
          <Typography
            fontSize={{ md: "1.7rem", xs: "1.2rem" }}
            style={{
              writingMode: "vertical-rl",
              fontWeight: "700",
              letterSpacing: "3px",
              lineHeight: "40px",
              fontFamily: "serif",
            }}
          >
            当店の餃子は、 <br />
            宮崎名物「一口餃子」となります。
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm01;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  // animation-name: animation;
  animation-duration: 2s;

  @keyframes animation {
    0% {
      padding-left: 20rem;
      padding-right: 20rem;
    }

    100% {
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
  display: flex;
  justify-content: center;
  width: 100vw;
  animation-name: ${(props) => (props.inView ? "animation" : "")};
  max-width: 1600px;
  transition: all 1.3s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(70px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
