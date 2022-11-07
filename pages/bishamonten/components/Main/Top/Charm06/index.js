import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import styles from "../../../.././../../styles/bishamonten/components/Main/Top/Charm06/charm06.module.css";

import { Grid, Typography } from "@mui/material";
import { style } from "@mui/system";
import Link from "next/link";

const Btn = ({ url }) => {
  return (
    <Link href={url}>
      <Grid px={7} py={1} backgroundColor="rgb(60,0,0)" color="white">
        <Typography
          color="rgba(223, 232, 161, 1)"
          fontFamily="Noto Serif JP"
          fontSize="0.9rem"
          style={{ letterSpacing: "1.6px", lineHeight: "34px" }}
        >
          詳細はこちら
        </Typography>
      </Grid>
    </Link>
  );
};
const nameStyle = {
  marginTop: "50px",
  width: "80%",
  marginBottom: "70px",
  height: "40px",
  color: "rgb(223, 232, 161)",
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(60,0,0)",
  // writingMode: "vertical-rl",
  fontWeight: "600",
  letterSpacing: "6px",
  lineHeight: "34px",
};
const insideStyle = {
  width: "80%",
  height: "80%",
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(10px)",
};
const imgBoxStyle = {
  backdropFilter: " saturate(40%) blur(2px)",
};
const Charm06 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-300px",
    triggerOnce: true,
  });

  return (
    <>
      <Grid bgcolor="rgb(48, 0, 0)">
        <Section ref={ref} inView={inView}>
          <Grid height="120px"></Grid>
          <Grid display="flex" height="440px" textAlign="center">
            <div className={styles.bgImg01} style={{ width: "100%" }}>
              <Grid
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={imgBoxStyle}
              >
                <Grid sx={insideStyle}>
                  <Grid
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div style={nameStyle}>店舗概要</div>
                    <Grid
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        fontFamily="Noto Serif JP"
                        style={{
                          letterSpacing: "1.1px",
                          lineHeight: "34px",
                          position: "relative",
                          top: "-40px",
                        }}
                      >
                        〒880-0011 <br />
                        宮崎県宮崎市上野町7−7 石井ビル1F <br />
                        宮崎駅から1,066m
                      </Typography>
                      <Btn url="/bishamonten/info" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>

            <div className={styles.bgImg02} style={{ width: "100%" }}>
              <Grid
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={imgBoxStyle}
              >
                <Grid sx={insideStyle}>
                  <Grid
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div style={nameStyle}>商品一覧</div>
                    <Typography
                      fontFamily="Noto Serif JP"
                      style={{
                        letterSpacing: "1.1px",
                        lineHeight: "34px",
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      こだわりの素材を使用した <br />
                      当店自慢の餃子を
                      <br />
                      お気軽にお問い合わせください
                    </Typography>

                    <Btn url="/bishamonten/info" />
                  </Grid>
                </Grid>
              </Grid>
            </div>

            <div className={styles.bgImg03} style={{ width: "100%" }}>
              <Grid
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={imgBoxStyle}
              >
                <Grid sx={insideStyle}>
                  <Grid
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div style={nameStyle}>お問い合わせ</div>
                    <Grid
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="center"
                    ></Grid>
                    <Grid
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <Grid display="flex" alignItems="baseline">
                        <Typography
                          p={1}
                          variant="subtitle1"
                          fontSize="1.5rem"
                          fontFamily="Noto Serif JP"
                        >
                          Tel :
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          fontSize="2.1rem"
                          fontFamily="Noto Serif JP"
                        >
                          080-3944-6543
                        </Typography>
                      </Grid>
                      <Grid
                        display="flex"
                        alignItems="baseline"
                        justifyContent="center"
                      >
                        <Grid px={1} py={0} backgroundColor="rgb(60,0,0)">
                          <Typography
                            fontFamily="Noto Serif JP"
                            fontSize="0.9rem"
                            style={{
                              letterSpacing: "1.6px",
                              lineHeight: "34px",
                              color: "rgba(223, 232, 161, 1)",
                            }}
                          >
                            営業時間
                          </Typography>
                        </Grid>
                        <Typography
                          variant="subtitle1"
                          fontSize="1rem"
                          fontFamily="Noto Serif JP"
                        >
                          17:00～翌3:00
                        </Typography>
                      </Grid>
                    </Grid>
                    <Btn url="/bishamonten/info" />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Section>
      </Grid>
      <Grid bgcolor="rgb(48, 0, 0)" height="100px"></Grid>
    </>
    //　inView属性を割り当てる
  );
};
export default Charm06;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  transition: all 1s ease;

  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
