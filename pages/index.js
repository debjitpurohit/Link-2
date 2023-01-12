// import React from 'react' // dont need for next appLinkcation
// but component and export component is mandatory

import Navbar from '../components/navbar' // import navbar component based on react so component name must be capital letter
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Head from 'next/head' //to avail property of html head tag and head tag ta ke ekdm top e dite hbe nahole reload e prblm hbe 
// import Link from 'next/link'
const index = () => {

  // <a></a> use krle ektu holeu refreash hte time nicche taii 
  //next ekhan e Link  pachkage provide kre to  ,<a></a> er jaigai <Link></Link> use korte hobe
  // Link package route without refreash e help kore
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <Navbar />
      <header className={`${styles.header} ${styles.mt}`}>
        <div className="text_box">
          <h1 className="heading_primary">
            <div className={styles.img}>
              <span className={styles.fntwgt}>Welcome to</span>
              {/* external image lagate gele hbe nah karon next.js sei domain chene  nah tai amder next.config.js e jeye images er under e domains provide krtwe hbe and start the server again */}
              <a href='https://nextjs.org/' target='_blank'><Image className={styles.image} src="/nxt.png" width="300" height="200" alt="aboutImage"></Image></a>
            </div>
            {/* <span className={styles.js}> Love with js</span> */}
          </h1>
          <a href="https://nextjs.org/docs/api-reference/next/link" className={styles.btn} target="_blank" >Discover our tours</a>
        </div>
      </header>

    </div>
  );
};
export default index
//export component is mandatory

//for single class name {styles.header} for multiple class name {`${styles.header} ${styles.header2}`}
//{`${styles.bt} ${styles.bt2}`} in prdt page about page blog page 
