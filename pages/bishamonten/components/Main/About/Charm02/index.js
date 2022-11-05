import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import goodLogo from "../../../../../../public/shop-good-logo.png";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

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
            p: "6%",
            orverflow: "hidden",
            position: "relative",
            left: "-100px",
            mx: "5rem",
          }}
        >
          <Grid
            border="double 3.6px #c2c2c2"
            sx={{ width: "126px", height: "510px" }}
          ></Grid>
          <Grid
            sx={{
              position: "relative",
              top: "-510px",
              left: "-80px",
              backgroundColor: "rgb(246, 246, 246)",
              width: "287px",
              height: "510px",
              transform: "rotate(-26deg)",
            }}
          >
            <h2
              style={{
                paddingTop: "2rem",
                paddingLeft: "5rem",
                fontSize: "2rem",
                fontWeight: "200",
                letterSpacing: "2.6px",
                lineHeight: "48px",
                writingMode: "vertical-rl",
                transform: "rotate(26deg)",
              }}
            >
              宮崎の豊かな食文化を <br />
              未来へとつないでいきたい
            </h2>
          </Grid>
        </Grid>

        <Grid
          position="relative"
          width="70%"
          display="flex"
          justifyContent="space-between"
          mt={12}
        >
          <Grid display="flex" flexDirection="column">
            <Grid width="530px">
              <Image src={goodLogo} alt="いい感じのお店のロゴ" />
            </Grid>
            <h3
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.4rem",
                fontWeight: "200",
              }}
            >
              限りなく味を追求し続けること
            </h3>
            <p
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1rem",
                fontWeight: "200",
              }}
            >
              豚肉とレタスに、にら・にんにく・生姜を加え、自家製ゆず胡椒で味付けし薄皮で包んだ一口サイズの餃子です。
            </p>
          </Grid>
          <Grid display="flex" flexDirection="column">
            <Grid width="530px">
              <Image src={goodLogo} alt="いい感じのお店のロゴ" />
            </Grid>

            <h3
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.4rem",
                fontWeight: "200",
              }}
            >
              小さな餃子に込めた大明神の想い
            </h3>
            <p
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1rem",
                fontWeight: "200",
              }}
            >
              あっさりとした上品な味の中に「ピリッ」としたパンチのある味で具と皮が織り成す食感をお楽しみください。
            </p>
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
