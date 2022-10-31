import Head from "next/head";
import {BsFillMoonStrasFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillFacebook} from "react-icons/ai";
import Image from "next/image";
import Sbu from "../public/sbu.png";
import Henley from "../public/henley.png";
import Psyc from "../public/pschTrack.png";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Sibulelo Zondi Portifolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="h-screen">
         <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Developed by Sibulelo</h1>
          <ul className="flex items-center">
            <li><a className= "bg-gradient-to-r from-teal-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8" href="https://mrzondi.github.io/about/">My html website</a></li>
          </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Sibulelo Zondi</h2>
            <h3 className="text-2xl py-2">Software developer | Web developer | Visionary </h3>
            <p className="=text-md py-5 leading-8 text-gray-700">
            I'm a <span className=" text-teal-600 ">software developer</span> and <span className=" text-teal-600 ">fullstack developer</span> with experience in frontend, backend, and database systems. 
            I am currently studying for my final year at the <span className=" text-teal-600 ">University of Johannesburg</span>, 
            where I am pursuing a <span className=" text-teal-600 ">BSc. in Computer science and Informatics</span>.
             I have a strong work ethic, always strive for excellence, and am always willing to learn new things.
             I want to be part of the<span className=" text-teal-600 ">SovTech Graduate programme</span> because, I strive to be a good software engineer
             who will build software systems to help better people's lives and also deliver state of the art
             software to help comapanies requirements and help comapanies to be able to reach new niches.
             SovTech is a comapany which believes in values which are aligned with me, like innovation, growth,
             moving in a team as a unit to change the world with practical ideas and amazing people skills.
           
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-5 py-1  text-gray-700">
            <a href="https://www.linkedin.com/in/sibulelozondi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B67NbwN67SuiK02Yc1lhSCA%3D%3D"><AiFillLinkedin /></a>
           <a href="https://www.facebook.com/HenleyVallege"><AiFillFacebook /></a> 
          </div>
         
        </section>
        <section>
        <div  className="text-center p-10">
          <h3 className="text-2xl py-2">My Web App Design Projects</h3>
          </div>
          <div >
            <div className=" text-left shadow-lg p-10 rounded-xl my-10">
              <Image src={Henley}/>
              <h3 className="text-lg font-medium pt-8 pb-3">Henley web app design</h3>
              <h4 className="py-2 text-teal-600">Tools used</h4>
              <p className="text-gray-700 py-1">Photoshop</p>
              <p className="text-gray-700 py-1">Html</p>
              <p className="text-gray-700 py-1">CSS</p>
            </div>

            <div className=" text-left shadow-lg p-10 rounded-xl my-10">
              <Image src={Psyc} />
              <h3 className="text-lg font-medium pt-8 pb-3">PyschTrack web app design</h3>
              <h4 className="py-2 text-teal-600">Tools used</h4>
              <p className="text-gray-700 py-1">Photoshop</p>
              <p className="text-gray-700 py-1">Html</p>
              <p className="text-gray-700 py-1">CSS</p>
              <p className="text-gray-700 py-1">MySql</p>
              <p className="text-gray-700 py-1">C#</p>
              <p className="text-gray-700 py-1">ASP.net core</p>
              <p className="text-gray-700 py-1">Swagger api</p>
            </div>
          </div>
        </section>
      
      </main>

    </div>
  )
}
