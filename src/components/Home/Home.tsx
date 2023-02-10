import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

interface IHomeProps {

}

const HomePage: React.FC<IHomeProps> = () => {


  return (
    <h1 className={styles.header}>Hello</h1>
  )
}


export default HomePage;