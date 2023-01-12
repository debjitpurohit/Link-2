// import { useRouter } from 'next/router'
// import Navbar from '../../components/navbar'
// import styles from '../../styles/blog.module.css'
// const pageNo = () => {
//     const router = useRouter();
//     const pageNum = router.query.pageNo; // amra [] file tar j nam diyechi sei name use krte hbe query er mddhe
//     // localhost:3000/blog/blog5 ei route e jabe and pageNum= blog5
//   return (
//     <>
//        <Navbar/>
//     <h1 className={styles.header}>dynamic routing in {pageNum} page</h1> 
    
//     </>
//   );
// };
// export default pageNo
import Navbar from "../../components/navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(), // same name of this file
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo; // same name of this file
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <h2 style={{fontSize :'30px', textAlign:'center' , color :'red'}}> Description</h2>
      <div className="ssr-styles ssr-styles-inside">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default myData;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.
