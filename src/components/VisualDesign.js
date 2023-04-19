import React from 'react';
import { Navbar } from './Navbar';
import './visualDesign.css';
import PhotoAlbum from "react-photo-album";
// documentation: https://react-photo-album.com

import f1 from '../content/galleryImages/f1.jpg'
import f2 from '../content/galleryImages/f2.jpg'
import f3 from '../content/galleryImages/f3.jpg'
import f4 from '../content/galleryImages/f4.jpg'
import f5 from '../content/galleryImages/f5.jpg'
import f6 from '../content/galleryImages/f6.jpg'
import f7 from '../content/galleryImages/f7.jpg'
import f8 from '../content/galleryImages/f8.jpg'
import f9 from '../content/galleryImages/f9.png'
import f10 from '../content/galleryImages/f10.png'
import f11 from '../content/galleryImages/f11.png'

import tp1 from '../content/galleryImages/tp1.png'
import tp2 from '../content/galleryImages/tp2.png'
import tp3 from '../content/galleryImages/tp3.png'
import tp4 from '../content/galleryImages/tp4.png'
import tp5 from '../content/galleryImages/tp5.png'
import tp6 from '../content/galleryImages/tp6.png'

const finalProjectPhotos = [
  { src: f1, width: 200, height: 200 },
  { src: f2, width: 600, height: 600 },
  { src: f3, width: 600, height: 600 },
  { src: f4, width: 200, height: 200 },
  { src: f5, width: 600, height: 600 },
  { src: f6, width: 600, height: 600 },
  { src: f7, width: 200, height: 200 },
  { src: f8, width: 600, height: 600 },
  { src: f9, width: 600, height: 600 },
  { src: f10, width: 200, height: 200 },
  { src: f11, width: 600, height: 600 },
];

const travisPalacePhotos = [
  { src: tp1, width: 300, height: 200 },
  { src: tp2, width: 300, height: 200 },
  { src: tp3, width: 300, height: 200 },
  { src: tp4, width: 300, height: 200 },
  { src: tp5, width: 300, height: 200 },
  { src: tp6, width: 300, height: 200 },
]

export const VisualDesign = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>This is the VisualDesign page</h1>
      </div>
      <div class="fp-gallery">
        <PhotoAlbum  layout="rows" photos={finalProjectPhotos} />;
      </div>

      <div class="fp-gallery">
        <PhotoAlbum  layout="rows" photos={travisPalacePhotos} />;
      </div>
    </>

  )
}