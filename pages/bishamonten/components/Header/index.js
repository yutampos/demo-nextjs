import Image from "next/image";
import styles from "../../../../styles/bishamonten/components/header.module.css";
import ShopImage from "../../../../public/shop-logo.png";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import ModalMenu from "../modalMenu";
import { Grid } from "@mui/material";

const Header = () => {
  const [reflectEnable, setReflectEnable] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scrollY = window.scrollY;
      setReflectEnable(isNotTopPosition(scrollY));
    });
  }, []);
  const isNotTopPosition = (Y) => {
    return Y > 60;
  };

  return (
    <>
      <div className={reflectEnable === true ? styles.open : styles.close}>
        <header className={styles.header}>
          <div className={styles.box}>
            <div className={styles.inside}>
              <div className={styles.imageContainer}>
                <Image
                  width={113}
                  height={45}
                  src={ShopImage}
                  alt="お店の画像"
                />
              </div>
              <div className={styles.Menu}>
                <Menu />
              </div>
              <Grid height="100%" display="flex" alignItems="center">
                <ModalMenu />
              </Grid>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
