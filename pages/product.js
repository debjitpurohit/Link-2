import Navbar from '../components/navbar'
import styles from '../styles/blog.module.css'
const product = () => {
  return (
    <> 
       <Navbar/>
    <h1 className={`${styles.header} ${styles.prdt}`}>
      Product page</h1>
      </>
  )
}

export default product
