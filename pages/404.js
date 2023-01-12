// // 404 is must for 404 page
// import Link from 'next/Link'
// import { useRouter } from 'next/router' //for 404 back to home page route
// import { useEffect } from 'react'; //for 404 back to home page after 3 sec
// import Navbar from '../components/navbar'
// const page404 = () => {
//     const router = useRouter();
//     const handleClick = () => {
//         router.push('/')
//     };
//     // 404 back to home page after 3 sec
//     useEffect(()=>{
//         setTimeout(()=>{
//             router.push('/')
//         },3000)
//     });

//     return (
//         <>
//         <Navbar/>
//             <div id="notfound">
//                 <div className="notfound">
//                     <div className="notfound-404">
//                         <h1>404</h1>
//                     </div>
//                     <h2>Page not found</h2>
//                     <p>lorem34
//                     </p>
//                     <a onClick={handleClick} className="button">Go TO Homepage</a>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default page404;
import { useEffect } from "react";
// import Link from "next/link";
import Navbar from '../components/navbar'
import { useRouter } from "next/router";

const Errorpage = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
    <Navbar/>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>

          <a onClick={handleInput}>Back To Homepage</a>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
