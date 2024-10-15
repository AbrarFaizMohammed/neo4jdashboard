'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Dashboardpage from './dashboard/page'
import Navigationbar from './compoents/Navigationbar'
import HomeCard from "./compoents/HomeCard";
import Document from "./compoents/Document";
import Footer from "./compoents/Footer";
import {makeStyles} from '@fluentui/react-components';


const useStyles = makeStyles({
  root:{
    margin:'auto',
    width:'80%'
  }
});

export default function Home() {

  const classes = useStyles();

  return (
    <section className={classes.root}>
    <Navigationbar></Navigationbar>
    <HomeCard></HomeCard>
    <Document></Document>
    <Footer></Footer>
    </section>
    
  );
}
