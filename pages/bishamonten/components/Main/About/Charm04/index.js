import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import Paper from "../../../../../../public/bishamonten/bg-paper.jpg";
import aboutImg from "../../../../../../public/bishamonten/about-img.png";

import Image from "next/image";
import { Grid, Typography } from "@mui/material";

const Charm04 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-300px",
    triggerOnce: true,
  });

  return (
    //　inView属性を割り当てる
    <Section ref={ref} inView={inView}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography
          px={5}
          variant="h2"
          fontFamily="serif"
          style={{
            paddingTop: "2rem",
            paddingLeft: "5rem",
            fontSize: "2rem",
            fontWeight: "200",
            letterSpacing: "2.6px",
            lineHeight: "48px",
            writingMode: "vertical-rl",
          }}
        >
          大明神の一口餃子の魅力を知る
        </Typography>
        <Grid
          position="relative"
          height="640px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Grid
            sx={{ position: "relative", left: "100px" }}
            display="flex"
            flexDirection="column"
          >
            <h3
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.4rem",
                fontWeight: "200",
                color: "orangered",
              }}
            >
              一枚一枚手延べで、とても薄く仕上げ
            </h3>
            <Typography
              fontFamily="sans-serif"
              style={{
                maxWidth: "500px",
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.03rem",
                fontWeight: "500",
                letterSpacing: "1px",
                lineHeight: "31px",
              }}
              variant="p"
            >
              一般的な餃子の半分あるかないかといったぐらいの大きさ。サイズは小さいですが焼き目は強めにカリッとした状態に仕上げられていて、存在感は抜群。
            </Typography>
          </Grid>
          <Grid display="flex" flexDirection="column">
            <h3
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.4rem",
                fontWeight: "200",
                color: "orangered",
              }}
            >
              驚かされるのが餡に使われている野菜
            </h3>
            <Typography
              fontFamily="sans-serif"
              style={{
                maxWidth: "500px",
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.03rem",
                fontWeight: "500",
                letterSpacing: "1px",
                lineHeight: "31px",
              }}
              variant="p"
            >
              口に入れるとカリッとした食感の奥から玉ねぎの甘みが一気に口の中に広がります。玉ねぎの甘みに負けない餡の風味のバランスを取っています。
            </Typography>
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            sx={{ position: "relative", left: "100px" }}
          >
            <h3
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.4rem",
                fontWeight: "200",
                color: "orangered",
              }}
            >
              素材の味を活かしたシンプルな味付け
            </h3>
            <Typography
              fontFamily="sans-serif"
              style={{
                maxWidth: "500px",
                paddingLeft: "30px",
                paddingRight: "30px",
                fontSize: "1.03rem",
                fontWeight: "500",
                letterSpacing: "1px",
                lineHeight: "31px",
              }}
              variant="p"
            >
              自家製ゆず胡椒で食べる一口餃子はビールとの相性抜群。肉には合挽肉ではなく国産豚肉のみを利用。餃子の餡からはとても強いお肉の旨味が感じられます。
            </Typography>
          </Grid>
        </Grid>
        <Grid
          style={{ filter: "brightness(160%)", filter: "opacity(92%)" }}
          ml={9}
          width="780px"
        >
          <Image src={aboutImg} />
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm04;
// inViewがtrueになると透明度が0.5から1になり、50px下から移動してくる
const Section = styled.section`
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
