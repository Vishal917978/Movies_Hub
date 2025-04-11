import NavScrollExample from "../components/Nav1";
import BasicExample1 from "../components/Gropdown";
// import { useState } from "react";
import './Home.css';
import img2 from "..//image/card1.jpg";
import BasicExample2 from '../components/Card';
import axios from "axios";
import StaticExample from "../components/Card_Details";
import { useState } from "react";

function Home(){
let [data1,setData1]=useState([]);
  async function fetchUser() {
    let url='https://omdbapi.com/?apikey=4e9e8ed7&s=series';
    const userResult = await axios.get(url);
   console.log(userResult,"<=====result")
   setData1(userResult.data.Search);
  }

  
return(
      <div className="Outer">
       <NavScrollExample/>
   
<div className="back">
    <h1>Movies Released in 2024</h1>
    <h4><b>Select Year</b></h4>
    <BasicExample1/>
    <button onClick={fetchUser}>click </button>
   <div className="card_cntr">
   {
      
      data1.map((movieData)=>{
        return <BasicExample2 data={movieData}/>
      
       
      })
    }
   </div>
    
  </div>
</div>
     )
}
export default Home;