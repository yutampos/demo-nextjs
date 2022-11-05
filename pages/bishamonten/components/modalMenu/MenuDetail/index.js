import { Grid, Link, Typography } from "@mui/material";

const MenuDetail = () => {
  return (
    <Grid
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      fontSize="0.9rem"
      fontFamily="sans-serif"
    >
      <Link href="/bishamonten" underline="none" color="rgba(223, 232, 161, 1)">
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
  );
};
export default MenuDetail;
