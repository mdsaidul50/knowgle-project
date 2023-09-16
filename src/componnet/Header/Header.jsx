/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import {useState} from'react'
import Team from "../team/team";
const Header = () => {
    const [actors, setactors] = useState([])
    const [teams, setteams] = useState([])
    useEffect(()=>{
        fetch("./data.json")
        .then(res=> res.json())
        .then (data=> setactors(data))
    },[])
   const henledteam =(actor) =>{
    setteams([...teams,actor])
   }
   console.log(teams);
    return (
        <div className="flex w-11/12 mx-auto justify-between">
           <div className="grid grid-cols-2 gap-2">
           {
            actors.map(actor=>(
                <div className=" w-44 h-64 border-2 bg-amber-100">
                
               <img className="w-16 rounded-full mx-10" src={actor.image} alt="" />
               <h2 className="text-lg font-semibold text-center">{actor.name}</h2>
               <p className="ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <div className="flex justify-between mx-3">
                <div>
                    <p>salary:{actor.salary}</p>
                </div>
                <h2>{actor.role}</h2>
                </div> 
                <button className="btn bg-cyan-500 ml-14 mt-3 rounded-lg p-1" onClick={()=>henledteam(actor)}>select</button>
            </div>
            ))
           }
           </div>
            <div>
                <Team teams={teams}></Team>
            </div>
           
        </div>
    );
};

export default Header;