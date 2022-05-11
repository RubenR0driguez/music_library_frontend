import React from 'react'
// import MusicLibrary from 'MusicLibrary'

async function createSong(newSong) {
    let response = await axios({
        method:'POST',
        url:'http://127.0.0.1:8000/api/music/'
    },newSong);
    if(response.status === 201);
      await getAllsongs();

  return (
    <div>AddMusic</div>
  )
}

export default AddMusic