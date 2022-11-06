import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Grid, Link as MuiLink, Typography } from "@mui/material";
import Image from "next/image";
// import logo from "../../../../../../public/";

const fontStyle = {
  fontSize: "1.3rem",
  //   color: "rgba(223, 232, 161, 1)",
  color: "rgba(223, 232, 161, 0.9)",
  fontFamily: "serif",
  transition: "0.4s",
  fontWeight: "600",
  letterSpacing: "2px",
  "&:hover": {
    letterSpacing: "4px",
    borderBottom: "solid 2px ",
  },
};

const muiLinkStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};
const underlineStyle = {
  width: "0px",

  "&:hover": {
    width: "100%",
  },
};

const boxStyle = {
  height: "80px",
  display: "flex",
  alignItems: "center",
};

const Charm01 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    //　inView属性を割り当てる
    <Section ref={ref} inView={inView}>
      <Grid display="flex" justifyContent="center">
        <Grid
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid sx={boxStyle}>
            <NextLink href="/bishamonten" passHref>
              <Grid sx={muiLinkStyle}>
                <Typography sx={fontStyle}>トップ</Typography>
                <Grid sx={underlineStyle} />
              </Grid>
            </NextLink>
          </Grid>

          <Grid sx={boxStyle}>
            <NextLink href="/bishamonten/products" passHref>
              <Grid sx={muiLinkStyle}>
                <Typography sx={fontStyle}>商品一覧</Typography>
                <Grid sx={underlineStyle} />
              </Grid>
            </NextLink>
          </Grid>
          <Grid sx={boxStyle} height="80px">
            <NextLink href="/bishamonten/about" passHref>
              <Grid sx={muiLinkStyle}>
                <Typography sx={fontStyle}>四川金竜について</Typography>
                <Grid sx={underlineStyle} />
              </Grid>
            </NextLink>
          </Grid>
          <Grid sx={boxStyle} height="80px">
            <NextLink href="/bishamonten/info" passHref>
              <Grid sx={muiLinkStyle}>
                <Typography sx={fontStyle}>店舗概要</Typography>
                <Grid sx={underlineStyle} />
              </Grid>
            </NextLink>
          </Grid>
          <Grid sx={boxStyle} height="80px">
            <NextLink href="/bishamonten/contact" passHref>
              <Grid sx={muiLinkStyle}>
                <Typography sx={fontStyle}>お問い合わせ</Typography>
                <Grid sx={underlineStyle} />
              </Grid>
            </NextLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        position="absolute"
        bottom="0%"
        pr={2}
        display="flex"
        justifyContent="start"
        style={{ opacity: "0.5" }}
      >
        <Grid display="flex" alignItems="center">
          <Grid maxWidth="200px">
            <Image
              src="/shop-image-top.png"
              width={100}
              height={100}
              alt="お店のイメージ写真"
            />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm01;
// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
