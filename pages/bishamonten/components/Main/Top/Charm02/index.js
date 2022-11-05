import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import OldPaper from "../../../../../../public/bishamonten/bg-paper.jpg";

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
        <h2
          style={{ paddingTop: "40px", fontSize: "1.5rem", fontWeight: "500" }}
        >
          一口サイズの小振りな餃子
        </h2>
      </Grid>

      <h3
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          fontSize: "1rem",
          fontWeight: "300",
          fontFamily: "sans-serif",
        }}
      >
        肉と野菜のバランスが程良く取れたジューシーな具材を、オリジナルブレンドの小麦粉で練り上げた薄皮で包みました。
      </h3>
    </Section>
  );
};
export default Charm02;

// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  margin-left: 7%;
  width: 456px;
  height: 320px;
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(5px);
  text-shadow: 0px 0px 8px #fff, 0px 0px 5px #fff, 0px 0px 3px #fff,
    0px 0px 50px #f4fff9, 0px 0px 50px #ffffea, 0px 0px 50px #ffefff,
    0px 0px 50px #fff;
  color: black;
  filter: drop-shadow(2px 5px 5px #2e2e2e);
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
