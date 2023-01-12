// ekta folder create kore tate index.js er vetor amra component rakhte pari taholeu localhost:3000/blog ei route e jabe 
// due to file based routing mechanism in next.js
// index.js e rakhte hbe sssdg.js erm albal rakhle hbe nah

import Navbar from '../../components/navbar'
import styles from '../../styles/blog.module.css'
import Link from 'next/link'
// to fetch data get static props are important
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const blog = ({data}) => {
    return (
      <>
        <Navbar/>
        <h1 className={`${styles.header} ${styles.blog}`}>My Blogs</h1>
        {data.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>                        
            <Link href={`/blog/${curElem.id}`} style={{textDecoration:'none'}}>
              <h2>{curElem.title}</h2>
            </Link> 
            
          </div> 
        );
      })}
      </>
    )
  }
  export default blog


  //for dynamic routing we need to use [] bracket file within blog folder 
    // [pageNo].js