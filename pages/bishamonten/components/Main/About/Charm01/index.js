import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import nikuman from "../../../../../../public/bishamonten/nikuman-2.jpg";
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
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid width="45%" display="flex" justifyContent="center" padding={7}>
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "200",
              letterSpacing: "6px",
              lineHeight: "70px",
            }}
          >
            ここにしかない <br />
            料理を
            <br />
            胸を張れる
            <br />
            四川料理を
          </h2>
        </Grid>
        <Grid width="55%" display="flex" justifyContent="center">
          <Grid position="relative" maxWidth="600px">
            <Image width={5184} height={3456} src={nikuman} alt="肉まん" />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm01;
const Section = styled.section`
  transition: all 1.3s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(70px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
