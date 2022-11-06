import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
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
      <Grid
        width="90%"
        display="flex"
        justifyContent="space-around"
        alignItems="flex-end"
      >
        <Grid
          width="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Grid mb={4} position="relative" width="290px" height="90px">
            <Image
              layout="fill"
              objectFit="contain"
              src="/bishamonten/shop-logo-black.png"
              alt="お店の画像"
            />
          </Grid>
          <h3
            style={{
              paddingBottom: "3rem",
              maxHeight: "530px",
              fontSize: "1rem",
              fontWeight: "200",
              letterSpacing: "1.2px",
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
          <Grid
            display="flex"
            justifyContent="space-between"
            width="100%"
            maxWidth="600px"
          >
            <Grid width="45%" display="flex" justifyContent="center">
              <Grid position="relative" width="100%" height="200px">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/bishamonten/mapo.jpg"
                  alt="店員"
                />
              </Grid>
            </Grid>
            <Grid width="45%" display="flex" justifyContent="center">
              <Grid position="relative" width="100%" height="200px">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/bishamonten/cook.jpg"
                  alt="店員"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid px={10} width="50%" display="flex" justifyContent="center">
          <Grid position="relative" width="90%" height="500px">
            <Image
              layout="fill"
              objectFit="cover"
              src="/bishamonten/in-shop.jpeg"
              alt="店内"
            />
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
  display: flex;
  justify-content: center;
  width: 100vw;
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
