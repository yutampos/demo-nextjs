import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import ShopImage from "../../../../../../public/bishamonten/shop-logo-black.png";
import InShop from "../../../../../../public/bishamonten/in-shop.jpeg";
import Cook from "../../../../../../public/bishamonten/cook.jpg";
import Mapo from "../../../../../../public/bishamonten/mapo.jpg";

import Image from "next/image";
import { Grid } from "@mui/material";
import styles from "../../../../../../styles/bishamonten/components/Main/Top/Charm03/charm03.module.css";

const Charm03 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-300px",
    triggerOnce: true,
  });

  return (
    //　inView属性を割り当てる
    <Section ref={ref} inView={inView}>
      <Grid display="flex" justifyContent="space-evenly" alignItems="flex-end">
        <Grid
          px={2}
          width="700px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Grid maxWidth="290px">
            <Image
              width={2000}
              height={1000}
              src={ShopImage}
              alt="お店の画像"
            />
          </Grid>
          <h3
            style={{
              paddingBottom: "3rem",
              maxHeight: "530px",
              fontSize: "1rem",
              fontWeight: "200",
              letterSpacing: "1.6px",
              lineHeight: "34px",
              fontFamily: "sans-serif",
            }}
          >
            芸術品と言って頂ける形状、その見た目からは想像できなかった
            <br />
            と言って頂けるしっかりとした味
            <br />
            その両面で楽しんでもらっております。
            <br />
            食べやすい一口サイズですので女性にもお子様にも大好評。
            <br />
          </h3>
          <Grid display="flex" justifyContent="space-around" width="630px">
            <Grid maxWidth="280px" maxHeight="200px" overflow="hidden">
              <Grid width="300px" height="200px">
                <Image width={1920} height={1280} src={Mapo} alt="店員" />
              </Grid>
            </Grid>
            <Grid maxWidth="280px" maxHeight="200px" overflow="hidden">
              <Grid mt={-20}>
                <Image width={4160} height={6240} src={Cook} alt="店員" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          px={2}
          maxHeight="500px"
          height="100%"
          maxWidth="500px"
          overflow="hidden"
        >
          <Grid width="1000px">
            <Image width={1280} height={854} src={InShop} alt="店内" />
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.repeatImages}>
        <div className={styles.image}></div>
      </div>
    </Section>
  );
};
export default Charm03;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  padding-left: 4rem;
  padding-right: 4rem;
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
