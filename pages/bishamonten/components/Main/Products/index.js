import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import plateImg from "../../../../../public/bishamonten/products/plate-illust-img.png";
import Charm06 from "../Top/Charm06";

const productList = [
  { key: 0, qty: "", name: "四川麻婆豆腐", price: "1,980" },
  { key: 1, qty: "", name: "四川麻婆茄子", price: "1,980" },
  { key: 2, qty: "", name: "青椒肉絲", price: "1,980" },
  { key: 3, qty: "", name: "回鍋肉", price: "1,980" },
  { key: 4, qty: "", name: "棒棒鶏", price: "1,980" },
  { key: 5, qty: "", name: "宮保鶏丁", price: "1,980" },
  { key: 6, qty: "", name: "魚香肉絲", price: "1,980" },
  { key: 7, qty: "", name: "辣子鶏", price: "1,980" },
  { key: 8, qty: "", name: "坦々麺", price: "1,980" },
  { key: 9, qty: 1, name: "肉まん", price: "1,980" },
];

const liquorList = [
  { key: 0, qty: "", name: "生ビール", price: "500" },
  { key: 1, qty: "", name: "瓶ビール", price: "700" },
  { key: 2, qty: "", name: "ハイボール", price: "500" },
  { key: 3, qty: "", name: "焼酎", price: "400" },
  { key: 4, qty: "", name: "梅酒", price: "400" },
  { key: 5, qty: "", name: "酎ハイ", price: "400" },
];

const drinkList = [
  { key: 0, qty: "", name: "コーラ", price: "300" },
  { key: 1, qty: "", name: "カルピス", price: "300" },
  { key: 2, qty: "", name: "オレンジ", price: "300" },
  { key: 3, qty: "", name: "烏龍茶", price: "300" },
];

const HorizonLine = () => {
  return (
    <Grid width="900px">
      <Grid
        p={0.1}
        borderTop="solid rgb(112, 99, 79)"
        style={{ opacity: "40%" }}
      />
      <Grid
        p={0.1}
        borderTop="solid rgb(112, 99, 79)"
        style={{ opacity: "40%" }}
      />
      <Grid
        p={0.1}
        borderTop="solid rgb(112, 99, 79)"
        style={{ opacity: "40%" }}
      />
    </Grid>
  );
};

const SubText = ({ value }) => {
  return (
    <Grid pt={9}>
      <Typography variant="h2" fontSize="1.9rem">
        {value}
      </Typography>
      <Grid borderBottom="solid 5px" width="100％" height="5px"></Grid>
    </Grid>
  );
};
const Self = (name, qty, price) => {
  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Grid width="100%" px={3}>
        <Grid
          width="100%"
          p={2.4}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>{name}</Typography>
          <Grid display="flex">
            {qty === "" ? (
              <></>
            ) : (
              <Typography px={5} textAlign="end">
                {qty}個
              </Typography>
            )}

            <Typography>{price}円</Typography>
          </Grid>
        </Grid>

        <Grid
          width="100%"
          borderTop="solid rgb(112, 99, 79)"
          style={{ opacity: "40%" }}
        />
      </Grid>
    </Grid>
  );
};
const Products = () => {
  return (
    <>
      <Grid
        pt={20}
        height="100%"
        sx={{ bgcolor: "rgba(255,255,255,0.9)", backdropFilter: "blur(20px)" }}
        color="rgb(60, 60, 60)"
        width="100%"
      >
        <Grid pb={13} display="flex" justifyContent="center">
          <Grid display="flex" flexDirection="column" alignItems="center">
            <Grid width="60px" style={{ filter: "opacity(50%)" }}>
              <Image src={plateImg} />
            </Grid>
            <Typography
              p={3.5}
              variant="h2"
              fontSize="1.3rem"
              fontWeight={600}
              color="rgb(100, 100, 100)"
            >
              商品ラインナップ
            </Typography>
            <Typography pb={4} variant="p" fontFamily="sans-serif">
              ※表示金額は全て税込価格となります。
            </Typography>

            <Grid
              mt={10}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Grid border=""></Grid>
              <Typography variant="h2" fontSize="1.9rem">
                ディナーメニュー
              </Typography>
              <Grid my={3}>
                <HorizonLine />
              </Grid>
              <Typography
                p={2}
                variant="p"
                fontSize="1rem"
                textAlign="center"
                fontFamily="sans-serif"
                style={{ letterSpacing: "1.6px", lineHeight: "25px" }}
              >
                店主が厳選した材料だけを使用した小振りな餃子
                <br />
                作りたてのおいしさをお届けいたします。
              </Typography>
              <Grid
                mt={9}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                {/* <Grid
                  width="90%"
                  borderTop="solid 7px rgba(112, 99, 79,0.2)"
                  style={{ opacity: "40%" }}
                /> */}
                <Grid
                  width="100%"
                  height="400px"
                  display="flex"
                  flexDirection="column"
                  flexWrap="wrap"
                >
                  {productList.map((pl) => {
                    return (
                      <Grid key={pl.key}>
                        {Self(pl.name, pl.qty, pl.price)}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              mt={10}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="h2" fontSize="1.9rem">
                ドリンク
              </Typography>

              <Grid my={3}>
                <HorizonLine />
              </Grid>
              <Typography
                p={2}
                variant="p"
                fontSize="1rem"
                textAlign="center"
                fontFamily="sans-serif"
                style={{ letterSpacing: "1.6px", lineHeight: "25px" }}
              >
                料理とご一緒にどうぞ
              </Typography>
              <SubText value="お酒" />

              <Grid
                mt={9}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <Grid
                  width="100%"
                  height="200px"
                  display="flex"
                  flexDirection="column"
                  flexWrap="wrap"
                >
                  {liquorList.map((pl) => {
                    return (
                      <Grid key={pl.key}>
                        {Self(pl.name, pl.qty, pl.price)}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>

              <SubText value="ソフトドリンク" />

              <Grid
                mt={9}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <Grid
                  width="100%"
                  height="200px"
                  display="flex"
                  flexDirection="column"
                  flexWrap="wrap"
                >
                  {drinkList.map((pl) => {
                    return (
                      <Grid key={pl.key}>
                        {Self(pl.name, pl.qty, pl.price)}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              mt={10}
              display="flex"
              alignItems="center"
              flexDirection="column"
            ></Grid>
          </Grid>
        </Grid>
        <Grid
          width="100%"
          display="flex"
          justifyContent="center"
          backgroundColor="white"
        >
          <Grid width="100%">
            <Charm06 />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Products;
