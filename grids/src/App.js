import React from 'react';
// import BasicGrids from './BasicGrids';
// import Grids1 from './Grids1';
// import Bubble from './Bubble';
import ImageGallery from './ImageGallery';
import Dashboard from './Dashboard';
const images = [
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },
  { thumbnail: 'https://via.placeholder.com/250', full: 'https://via.placeholder.com/1200', alt: 'Image 1', title: 'Title 1' },

  
];
export default function App() {
  return (
    <div>
      {/* <BasicGrids/> */}
      {/* <Grids1/> */}
      {/* <h1>React Image Gallery</h1> */}
      {/* <ImageGallery images={images} />  */}
      <Dashboard/>
      {/* <Bubble/> */}
    </div>
  )
}
