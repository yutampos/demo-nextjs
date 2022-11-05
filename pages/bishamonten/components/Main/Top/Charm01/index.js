import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import nikuman from "../../../../../../public/bishamonten/nikuman.png";
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
      <Grid width="100vw" display="flex">
        <Grid width="55%" display="flex" justifyContent="center">
          <Grid position="relative">
            <Image width={5184} height={3456} src={nikuman} alt="肉まん" />
          </Grid>
        </Grid>
        <Grid width="45%" display="flex" justifyContent="center" padding={7}>
          <h3
            style={{
              maxHeight: "530px",
              fontSize: "1rem",
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
          <h2
            style={{
              fontSize: "1.5rem",
              writingMode: "vertical-rl",
              fontWeight: "500",
              letterSpacing: "3px",
              lineHeight: "40px",
            }}
          >
            当店の餃子は、 <br />
            宮崎名物「一口餃子」となります。
          </h2>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm01;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  transition: all 1.3s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(70px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
