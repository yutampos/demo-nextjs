import { Button, Grid, Typography, Link } from "@mui/material";

import styles from "../../../../../styles/bishamonten/components/Menu/menu.module.css";

const Menu = ({ status }) => {
  return (
    <>
      <div className={styles.Menu}>
        <Grid
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          width="730px"
          fontSize="0.9rem"
          fontFamily="sans-serif"
        >
          <Link
            href="/bishamonten"
            underline="none"
            color="rgba(223, 232, 161, 1)"
          >
            <Typography>トップ</Typography>
          </Link>
          <Link
            href="/bishamonten/products"
            underline="none"
            color="rgba(223, 232, 161, 1)"
          >
            <Typography>商品一覧</Typography>
          </Link>
          <Link
            href="/bishamonten/about"
            underline="none"
            color="rgba(223, 232, 161, 1)"
          >
            <Typography>四川金竜について</Typography>
          </Link>
          <Link
            href="/bishamonten/info"
            underline="none"
            color="rgba(223, 232, 161, 1)"
          >
            <Typography>店舗概要</Typography>
          </Link>
          <Link
            href="/bishamonten/contact"
            underline="none"
            color="rgba(223, 232, 161, 1)"
          >
            <Typography>ご予約・お問い合わせ</Typography>
          </Link>
        </Grid>
      </div>
    </>
  );
};
export default Menu;
