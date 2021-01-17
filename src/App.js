import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(a => setAlbums(a))
  },[]);

  function getPhotos(albumId){
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => res.json())
      .then(p => setPhotos(p))
  }

    return (
        <div className="App">
          <h1>Select an album:</h1>
          <select onChange={(e)=>getPhotos(e.target.value)}>
            <option>Select...</option>
            {albums.map(album=>{
              return <option key={album.id} value={album.id}>{album.title}</option>
            })}
          </select>
          <div className="gallery">
            {photos.map((photo)=>{
              return <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
            })}
          </div>
        </div>
    );
}

export default App;
