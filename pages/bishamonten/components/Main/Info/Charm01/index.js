import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import nikuman from "../../../../../../public/bishamonten/nikuman.jpg";
import Image from "next/image";

const Charm01 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-200px",
    triggerOnce: true,
  });

  return (
    <Section ref={ref} inView={inView}>
      <Grid
        my={10}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        color="white"
      >
        <Typography p={5} fontFamily="serif" variant="h2" fontSize="1.7rem">
          ごあいさつ
        </Typography>
        <Typography
          fontFamily="serif"
          fontSize="1.05rem"
          sx={{ letterSpacing: "1.3px", lineHeight: "40px" }}
        >
          売り手、買い手とお互い顔の見える商売を大切に
          <br />
          地域に根ざした食文化を守りたい。
          <br />
          伝統や食文化を守り、地元に愛される活動を続けていきます。
        </Typography>
        <Typography p={7} fontFamily="serif" variant="h2" fontSize="1.7rem">
          共感し合い喜ぶこと
        </Typography>
        <Grid
          mb={4}
          width="680px"
          display="flex"
          justifyContent="space-between"
        >
          <Grid
            border={1}
            width="200px"
            height="200px"
            borderRadius="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontFamily="serif" variant="p" fontSize="1.3rem">
              正直に丁寧に
            </Typography>
          </Grid>
          <Grid
            border={1}
            width="200px"
            height="200px"
            borderRadius="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontFamily="serif" variant="p" fontSize="1.3rem">
              使命感を持ち
            </Typography>
          </Grid>
          <Grid
            border={1}
            width="200px"
            height="200px"
            borderRadius="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontFamily="serif" variant="p" fontSize="1.3rem">
              地域社会に貢献
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm01;
const Section = styled.section`
  width: 100%;
  transition: all 1.3s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(70px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
