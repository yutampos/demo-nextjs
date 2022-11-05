import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import ShopImage from "../../../../../../public/bishamonten/shop-logo-gold.png";
import InShop from "../../../../../../public/bishamonten/in-shop.jpeg";
import Cook from "../../../../../../public/bishamonten/cook.jpg";
import Mapo from "../../../../../../public/bishamonten/mapo.jpg";

import Image from "next/image";
import { Grid, Typography } from "@mui/material";
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
      <Grid m={2} border={1} borderColor="orange">
        <Typography
          fontFamily="serif"
          my={5}
          textAlign="center"
          fontSize="2.4rem"
          fontWeight="bold"
        >
          Make the best move.
        </Typography>
        <Grid display="flex" px={4}>
          <Grid maxWidth="200px" maxHeight="270px" overflow="hidden" m={6}>
            <Grid ml={0}>
              <Image width={4160} height={6240} src={Cook} alt="店員" />
            </Grid>
          </Grid>
          <Grid display="flex" flexDirection="column" m={6} py={3}>
            <Typography
              fontFamily="serif"
              variant="h2"
              fontSize="1.7rem"
              fontWeight="bold"
              color="orangered"
            >
              すべては、挑戦から。
            </Typography>
            <Typography
              fontFamily="sans-serif"
              variant="p"
              fontSize="1rem"
              sx={{ letterSpacing: "1.2px", lineHeight: "30px" }}
              pt={3}
            >
              「安心・安全・餃子づくり」の為に想いを一つにして、まっすぐ正直に、一つひとつ丁寧に。
              <br />
              自信と誇りをもってお客様に提供できるお店でありたいと思います。
              <br />
              地域を愛し、地域に愛され、信頼され、必要とされ、無くてはならない存在に。
              <br />
              無くてはならない餃子専門店になり地域貢献していく事が目標です。
              <br />
              餃子に込めた想いを知り、より大明神を好きになって頂ければ幸いです。
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm03;
// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  max-width: 1600px;
  width: 90%;
  height: 100%;
  background-color: white;
  filter: drop-shadow(0px 6px 6px #909090);
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
