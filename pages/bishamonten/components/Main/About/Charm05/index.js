import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import ShopImage from "../../../../../../public/bishamonten/shop-logo-gold.png";
import Cook from "../../../../../../public/bishamonten/cook.jpg";
import BgVideo from "../../../../../../public/bishamonten/video/stir-fly.mp4";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import styles from "../../../../../../styles/bishamonten/components/Main/Top/Charm03/charm03.module.css";

const Charm05 = () => {
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
        py={20}
        sx={{
          bgcolor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(20px)",
        }}
        display="flex"
        justifyContent="center"
      >
        <Grid display="flex" justifyContent="center" p={6}>
          <Grid display="flex" flexDirection="column" justifyContent="center">
            <Typography
              m={5}
              textAlign="center"
              variant="h2"
              fontSize="1.6rem"
              fontFamily="serif"
            >
              餃子作りに一切妥協はありません
            </Typography>
            <Typography
              variant="p"
              fontSize="1rem"
              textAlign="center"
              fontFamily="sans-serif"
              style={{ letterSpacing: "2.2px", lineHeight: "30px" }}
            >
              餃子に自家製ゆず胡椒をつけて頬張ると、カリッとした食感のあと
              <br />
              から玉ねぎの甘みが口の中に広がります。
            </Typography>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="center" p={4}>
          <video muted width="600px" controls playsInline={true}>
            <source src={BgVideo} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm05;
// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
