//called as the nested root of the blog page (due ti index.js file localhost:3000/blog/ e jabe and blog1 , blog2 er jonno localhost:3000/blog/blog1 , localhost:3000/blog/blog2 e jabe)
import Navbar from '../../components/navbar'
import styles from '../../styles/blog.module.css'
const blog1 = () => {
    return (
      <>
       <Navbar/>
        <h1 className={styles.header}>blog 1</h1>
      </>
    )
  }
  export default blog1  // export component is mandatory
