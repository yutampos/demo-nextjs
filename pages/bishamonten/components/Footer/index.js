import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import ShopImage from "../../../../public/shop-image-top.png";

const Footer = () => {
  return (
    <>
      <footer>
        <Grid
          color="#C0BB82"
          height="auto"
          backgroundColor="white"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          bgcolor="rgba(48, 10, 0,1)"
        >
          <Grid
            my={3}
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              mx={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Grid width="200px">
                <Image src={ShopImage} alt="お店のロゴ" />
              </Grid>
              <Grid ml={3}>
                <Typography
                  variant="subtitle1"
                  fontSize="1rem"
                  fontFamily="Noto Serif JP"
                >
                  〒880-0011
                  <br /> 宮崎県宮崎市上野町7−7 <br />
                  石井ビル1F
                </Typography>
              </Grid>
            </Grid>
            <Grid mx={10}>
              <Grid display="flex" alignItems="baseline">
                <Typography
                  variant="subtitle1"
                  fontSize="1rem"
                  fontFamily="Noto Serif JP"
                >
                  Tel:
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="2.1rem"
                  fontFamily="Noto Serif JP"
                >
                  080-3944-6543
                </Typography>
              </Grid>

              <Typography
                variant="subtitle1"
                fontSize="0.9rem"
                fontFamily="Noto Serif JP"
              >
                営業時間 17:00～翌3:00
              </Typography>
            </Grid>
          </Grid>

          <Grid bgcolor="rgb(48,0,0)" color="#8e8e8e    " height="50px">
            <Grid
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="end"
              pl={4}
              fontSize="0.7rem"
              fontWeight="100"
            >
              <p>
                Copyright © SICHUAN GOLDEN DRAGON. All rights reserved. Design
                by haku .
              </p>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};
export default Footer;
