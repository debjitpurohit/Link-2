// File based routing is a new feature in Next.js 9.5. It allows you to create pages using a file system convention.
// ===> file based routing mechanism

//           =====> when a file is created in the pages folder, by default all the files becomes available as a route. based on the file name 
//                    localhost:3000/<filename we want to render>
//                    (  like we have home.js if we want to render home.js we have to go to localhost:3000/home   )
   //               ba amra ekta folder create kore tate index.js er vetor amra component rakhte pari taholeu localhost:3000/blog ei route e jabe

//======> if we want to render index.js we have to go to localhost:3000/  (index.js is a special file in next.js)
import Navbar from '../components/navbar'
const home = () => {
    return (
      <>
         <Navbar/>
        <h1>Home Page</h1>
      </>
    )
  }
  export default home