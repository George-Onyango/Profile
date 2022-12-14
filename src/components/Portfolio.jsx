import React from 'react'
import matatuu from '../assets/portfolio/matatuu.png'
import realtor from '../assets/portfolio/realtor.png'
import portal from '../assets/portfolio/studentportal.png'
import virusMed from '../assets/portfolio/coronaV.png'
import pizza from '../assets/portfolio/pizzariea.png'
import delani from '../assets/portfolio/delani.jpg'

const Portfolio = () => {


  const portfolios = [
    {
      id: 1,
      src: matatuu,
    },
    {
      id: 2,
      src: realtor,
    },
    {
      id: 3,
      src: portal,
    },
    {
      id: 4,
      src: virusMed,
    },
    {
      id: 5,
      src: pizza,
    },
    {
      id: 6,
      src: delani,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="matatuu"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio