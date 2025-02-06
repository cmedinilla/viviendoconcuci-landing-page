import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import convert from 'xml-js';

const RSS_URL = 'https://anchor.fm/s/f1f1fb70/podcast/rss';

import image1 from '../assets/episode1.jpg'
import image2 from '../assets/episode2.avif'
import image3 from '../assets/episode3.avif'
import defaultImage from '../assets/episode-default.jpg'

const images = {
  '1': image1,
  '2': image2,
  '3': image3,
  '4': defaultImage,
  'default': defaultImage,
};

const Episodes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: RSS_URL,
        headers: {
          'Content-Type': 'application/JSON',
        },
      };
      try {
        const response = await axios.request(options);
        const xmlResponse = response.data;
        const jsonResponse = convert.xml2json(xmlResponse, {compact: true, spaces: 4})
        const parsedJson = JSON.parse(jsonResponse);
        const episodes = parsedJson.rss.channel.item;

        const onlyFullEpisodes = episodes.filter((episode) => {
          const title = episode['itunes:episodeType']['_text'];
          return title === 'full'
        });

        const formattedEpisodes = onlyFullEpisodes.map((episode) => {
          return {
            title: episode.title['_cdata'].split('-')[1].trim(),
            description: episode.description['_cdata'],
            link: episode.link['_text'],
            number: episode['itunes:episode']['_text'],
            image : images[episode['itunes:episode']['_text']] || images['default'],
          }
        }).reverse();

        setPosts(formattedEpisodes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, [])
  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={post.image} alt="Episode 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Episodio {post.number}: {post.title}</h3>
            <p className="text-gray-600 mb-4">
              { <div dangerouslySetInnerHTML={{ __html: post.description }} /> }
            </p>
            <a href={post.link} target='_blank' rel="noreferrer">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Escuchar
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Episodes;