import React from "react"
import sushiImage from "../../assets/sushi.jpg"
import styles from "./Header.module.css"
import HeaderCardButton from "./HeaderCardButton"
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Суші Київ</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt='суші' />
      </div>
    </>
  )
}

export default Header
