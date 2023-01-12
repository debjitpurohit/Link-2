
import Navbar from '../components/navbar'
import styles from '../styles/about.module.css'
import Head from 'next/head'
const about = () => {
    return (
      <>
         <Head>
        <title>About Page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript NEXT.JS" />
        <meta name="author" content="Debjit Purohit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
         <Navbar/>
        <h1 className={`${styles.header} ${styles.about} ${styles.fntwgt} ${styles.underline}`}>about Page</h1>
        <h4 style={{color: 'red',fontSize: '1.5rem',}}> This is inline CSS</h4>
        <h4 className='xx'> This is Styled-JSX using style tag </h4>
        <h5>this is also Styled-JSX</h5>
        <style jsx>
          {` 
          .xx {
            color:green;
            font-size: 1.5rem;
          }
          h5{
            color:blue;
            font-size: 1.5rem;
          }

          `}
        </style>
       
      </>
    )
  }
  export default about
  // [name].module.css is a internal css and style tag is also internal css and only apply for this page 
 /*    <style jsx>
            {` 
            `}
          </style>                 */