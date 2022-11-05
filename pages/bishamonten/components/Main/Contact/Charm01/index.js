import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid, Link, Typography } from "@mui/material";

const Charm01 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-200px",
    triggerOnce: true,
  });

  return (
    <Section ref={ref} inView={inView}>
      <Grid width="100%" display="flex" justifyContent="space-around">
        <Grid display="flex" flexDirection="column">
          <Grid display="flex" alignItems="center">
            <Grid width="100px" height="auto" bgcolor="rgb(230, 33, 18)">
              <Typography
                py={0.2}
                variant="body1"
                fontSize="1.2rem"
                textAlign="center"
                color="white"
                fontFamily="serif"
              >
                電話
              </Typography>
            </Grid>
            <Typography
              pl={1.2}
              fontFamily="serif"
              fontSize="3rem"
              color="rgb(230, 33, 18)"
            >
              080-3944-6543
            </Typography>
          </Grid>
          <Grid py={1.5} display="flex" alignItems="center">
            <Grid width="100px" height="auto" bgcolor="rgb(230, 230, 230)">
              <Typography
                py={0.2}
                variant="body1"
                fontSize="1rem"
                textAlign="center"
                fontFamily="serif"
              >
                営業時間
              </Typography>
            </Grid>
            <Typography pl={1.7} fontFamily="serif" fontSize="1rem">
              17:00～翌3:00
            </Typography>
            <Grid
              ml={6}
              width="100px"
              height="auto"
              bgcolor="rgb(230, 230, 230)"
            >
              <Typography
                py={0.2}
                variant="body1"
                fontSize="1rem"
                textAlign="center"
                fontFamily="serif"
              >
                定休日
              </Typography>
            </Grid>
            <Typography pl={1.7} fontFamily="serif" fontSize="1rem">
              不定
            </Typography>
          </Grid>
          <Grid py={1.5} display="flex" alignItems="center">
            <Grid width="160px" height="auto" bgcolor="rgb(230, 230, 230)">
              <Typography
                py={0.2}
                variant="body1"
                fontSize="1rem"
                textAlign="center"
                fontFamily="serif"
              >
                直接お越しの場合
              </Typography>
            </Grid>
            <Typography pl={1.7} fontFamily="serif" fontSize="1rem">
              〒880-0011 <br />
              宮崎市上野町7−7 石井ビル1F
            </Typography>
            <Link
              ml={3}
              underline="none"
              href="https://goo.gl/maps/GzcXkkWPUJHp2SBC8"
            >
              <Grid width="200px" height="auto" bgcolor="rgb(230, 33, 18)">
                <Typography
                  py={0.5}
                  variant="body1"
                  fontSize="1rem"
                  textAlign="center"
                  color="white"
                  fontFamily="serif"
                >
                  交通アクセスはこちら
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </Grid>
        <Grid
          borderRadius="100px"
          width="170px"
          height="170px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="rgb(230, 33, 18)"
        >
          <Grid
            border="solid white"
            borderRadius="100px"
            width="155px"
            height="155px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            color="white"
          >
            <Typography variant="body1" fontSize="1.1rem">
              お気軽に <br />
              お問い合わせ <br />
              ください
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
