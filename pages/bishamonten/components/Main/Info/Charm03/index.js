import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import Paper from "../../../../../../public/bishamonten/bg-paper.jpg";
import aboutImg from "../../../../../../public/bishamonten/about-img.png";

import Image from "next/image";
import { Grid, Link, Typography } from "@mui/material";

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
        pt={1}
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
        fontSize="1.1rem"
        fontFamily="Noto Serif JP"
      >
        <Typography variant="p">
          営業時間　17:00～翌3:00 <br />
          定休日：不定休
          <br />
          <br />
          営業時間・定休日は変更となる場合がございますのでご来店前に店舗にご確認ください。
        </Typography>
        <Grid width="350px" pt={5} pb={2}>
          <Grid
            p={0.1}
            borderTop="solid rgb(112, 99, 79)"
            style={{ opacity: "30%" }}
          />
        </Grid>
        <Typography variant="p">
          〒880-0011 <br />
          宮崎市上野町7−7
          <br /> 石井ビル1F <br />
          宮崎駅より車で5分
        </Typography>
        <Grid width="350px" pt={2}>
          <Grid
            p={0.1}
            borderTop="solid rgb(112, 99, 79)"
            style={{ opacity: "30%" }}
          />
        </Grid>
      </Grid>
      <Grid mt={18} width="100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1383.2238840310276!2d139.76703942380468!3d35.68094125383104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1666252362326!5m2!1sja!2sjp"
          width="100%"
          height="450"
          allowfullscreen=""
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
      <Link
        mt={5}
        underline="none"
        href="https://goo.gl/maps/GzcXkkWPUJHp2SBC8"
      >
        <Grid
          color="white"
          bgcolor="black"
          border={1}
          width="300px"
          height="auto"
        >
          <Typography textAlign="center" p={2.8}>
            大きな地図で見る
          </Typography>
        </Grid>
      </Link>
    </Section>
  );
};

export default Charm03;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
