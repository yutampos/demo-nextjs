import Image from "next/image";
import styles from "../../styles/bishamonten/about.module.css";
import HeadInfo from "./HeadInfo";
import Body from "./components/Main/About";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";
import ModalMenu from "./components/modalMenu";

export default function About() {
  return (
    <>
      <div className={styles.aboutBgImg}>
        <div className={styles.imgWrapper}>
          <div className={styles.container}>
            <main className={styles.main}>
              <Grid width="auto" height="100%" position="fixed" zIndex={10000}>
                <ModalMenu />
              </Grid>
              <div className={styles.topBox}>
                <div className={styles.titleLogo}>
                  <Image
                    width={280}
                    height={157}
                    src="/shop-image-top.png"
                    alt="お店の画像"
                  />
                </div>

                <h1 className={styles.title}>
                  毘沙門店　公式サイト｜日常に四川を味える選択を
                </h1>
                <Grid
                  position="relative"
                  top="20%"
                  display="flex"
                  justifyContent="center"
                  width="100%"
                >
                  <Grid
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h2 style={{ fontSize: "1.3rem" }}>ABOUT</h2>
                    <p style={{ margin: "0", fontSize: "2rem" }}>
                      四川金竜について
                    </p>
                  </Grid>
                </Grid>
                <Grid
                  position="relative"
                  top="50%"
                  display="flex"
                  justifyContent="center"
                >
                  <Grid
                    maxWidth="1600px"
                    width="100%"
                    display="flex"
                    alignItems="end"
                    justifyContent="center"
                  >
                    <Grid px={2}>
                      <h2 style={{ margin: "0", fontSize: "4rem" }}>
                        金竜の風を <br />
                        あなたに
                      </h2>
                    </Grid>
                    <Grid
                      display="flex"
                      alignItems="center"
                      position="relative"
                      bottom={-40}
                      px={2}
                    >
                      <Grid
                        borderBottom={1}
                        width="110px"
                        height="0.1px"
                        marginRight={2}
                      />

                      <p
                        style={{
                          margin: "0",
                          fontSize: "1.3rem",
                        }}
                      >
                        四川の深みを一つのプレートから
                      </p>
                    </Grid>
                  </Grid>
                </Grid>

                <div className={styles.sBox}>
                  <div className={styles.headerBox}>
                    <div style={{ position: "absolute", top: "100vh" }}>
                      <div className={styles.aboutBgImg}>
                        <Body />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <HeadInfo />
    </>
  );
}
