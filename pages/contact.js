import Navbar from '../components/navbar'
import styles from '../styles/contact.module.css'
//internal image must be withnin public folder

const Contact = () => {
    return (
      <>
         <Navbar/>
        <h1 className={`${styles.cnct} ${styles.header}`}>contact Page</h1>


      </>
    )
  }
  export default Contact