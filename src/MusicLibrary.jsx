import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MusicLibray = () => {
 const[songs, setSongs] = useState([]);
 useEffect(() =>{
     getAllSsongs();
 }, [])

 async function getAllSsongs(){
     let response = await axios({
         method:'GET',
         url:'http://127.0.0.1:8000/api/music/'
     });
     setSongs(response.data);
 }
 return (
   <div>
   <h1>song list</h1>
  
  
       <table>
           <tr>
               <th>title</th>
               <th>artist</th>
               <th>genre</th>
               <th>album</th>
               <th>release_date</th>
           </tr>
           {songs.map((songs)=>{
       return(
           <>
           <tr>
               <th>{songs.title}</th>
               <th>{songs.artist}</th>
               <th>{songs.genre}</th>
               <th>{songs.album}</th>
               <th>{songs.release_date}</th>
            </tr>
        </>
        )
   })}

    </table>



   </div>

 )

}
 export default MusicLibray