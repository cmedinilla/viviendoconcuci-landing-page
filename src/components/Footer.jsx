import React from 'react';

import { FaInstagram, FaSpotify, FaYoutube, FaTiktok } from 'react-icons/fa';

const youtubeUri = 'https://www.youtube.com/@viviendoconcuci';
const podcastUri = 'https://open.spotify.com/show/7pz2dCEau9MAkxMi8SEbDB?si=a063b610e96444c9';
const InstagramCuciUri = 'https://www.instagram.com/viviendoconcuci';
const tikokCuciUri = 'https://www.tiktok.com/@viviendoconcuci';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Viviendo con CUCI. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <div className='flex gap-4 py-4'>
              <a href={podcastUri} target='_blank' rel="noreferrer"><div className='p-4 bg-gray-800 rounded-xl'><FaSpotify size={25} style={{color:'#00000'}} /></div></a>
              <a href={youtubeUri} target='_blank' rel="noreferrer"><div className='p-4 bg-gray-800 rounded-xl'><FaYoutube size={25} style={{color:'#00000'}} /></div></a>
              <a href={InstagramCuciUri} target='_blank' rel="noreferrer"><div className='p-4 bg-gray-800 rounded-xl'><FaInstagram size={25} style={{color:'#00000'}} /></div></a>
              <a href={tikokCuciUri} target='_blank' rel="noreferrer"><div className='p-4 bg-gray-800 rounded-xl'><FaTiktok size={25} style={{color:'#00000'}} /></div></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;








