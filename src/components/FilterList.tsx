import React, { useState } from 'react';
import fourHalf from '../components/img/4.5 star.svg';
import four from '../components/img/4star.svg';
import threeHalf from '../components/img/3.5star.svg';
import three from '../components/img/3star.svg';

type FilterProps = {
  closeList: () => void;
  fltrRating: (minRating: number, maxRating: number) => void;
  fltrLang: (lang: string) => void;
  fltrPrice: (prc: string) => void;
};

export default function FilterList({
  closeList,
  fltrRating, 
  fltrLang,
  fltrPrice, 
}: FilterProps) {
  const [dropdown, setDropdown] = useState({ rating: false, language: false, price: false });
  const [selectedRating, setSelectedRating] = useState(4.5);

  const toggleDropdown = (section: 'rating' | 'language' | 'price') => {
    setDropdown(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleRatingChange = (min: number, max: number) => {
    setSelectedRating(min); 
    fltrRating(min, max); 
  };

  return (
    <div className="top-0 left-0 h-[100vh] w-full bg-[#0a0a0aa8] z-51 flex flex-row-reverse fixed 2xl:relative 2xl:w-auto 2xl:min-w-[241px] 2xl:max-w-[311px] 2xl:bg-[#fff] duration-300 ease-in-out">
      <div className="w-[78%] max-w-[280px] z-100 bg-white 2xl:w-[100%] 2xl:left-0 2xl:ml-0 justify-self-start 2xl:absolute">
        <div className="p-16 font-[U-reg] text-16 text-black shadow-lg 2xl:hidden">
          <p>10000 results</p> 
        </div>
        <div className="m-16">
          <div> 
            <div
              className="flex justify-between w-full py-16 font-[U-bold] text-16 cursor-pointer border-t"
              onClick={() => toggleDropdown('rating')}
            >
              <h3>Ratings</h3> 
              <svg 
                className={`dropdown_icon transition-transform duration-300 ${dropdown.rating ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"  
                width="24"
                height="24"
              >
                <defs>
                  <symbol id="icon-expand" viewBox="0 0 24 24">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                  </symbol>
                </defs>
                <g>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                </g>
              </svg>
            </div>
            {dropdown.rating && (
              <div className="pt-8 pb-16"> 
                <div className="flex py-8">
                  <input 
                    className="me-8"  
                    type="radio" 
                    id='one' 
                    name='rating' 
                    checked={selectedRating === 4.5} 
                    onChange={() => handleRatingChange(4.5, 5.0)} 
                  />
                  <img src={fourHalf} alt="" />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">4.5 & up</div>
                  <div className="ms-8 font-[U-reg] text-14 text-[#303141]">(10,000) </div>
                </div>
                <div className="flex py-8">
                  <input 
                    className="me-8" 
                    type="radio" 
                    id='one1' 
                    name='rating' 
                    checked={selectedRating === 4.0} 
                    onChange={() => handleRatingChange(4.0, 4.5)} 
                  />
                  <img src={four} alt="" />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">4.0 & up</div>
                  <div className="ms-8 font-[U-reg] text-14 text-[#303141]">(10,000) </div>
                </div>
                <div className="flex py-8">
                  <input 
                    className="me-8" 
                    type="radio" 
                    id='one2' 
                    name='rating' 
                    checked={selectedRating === 3.5} 
                    onChange={() => handleRatingChange(3.5, 4.0)} 
                  />
                  <img src={threeHalf} alt="" />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">3.5 & up</div> 
                  <div className="ms-8 font-[U-reg] text-14 text-[#303141]">(10,000) </div>
                </div>
                <div className="flex py-8">
                  <input 
                    className="me-8" 
                    type="radio" 
                    id='one3' 
                    name='rating' 
                    checked={selectedRating === 3.0} 
                    onChange={() => handleRatingChange(3.0, 3.5)} 
                  />
                  <img src={three} alt="" />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">3.0 & up</div>
                  <div className="ms-8 font-[U-reg] text-14 text-[#303141]">(10,000) </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              className="flex justify-between w-full py-16 font-[U-bold] text-16 cursor-pointer border-t"
              onClick={() => toggleDropdown('language')}
            >
              <h3>Language</h3>
              <svg
                className={`dropdown_icon transition-transform duration-300 ${dropdown.language ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
              >
                <defs>
                  <symbol id="icon-expand" viewBox="0 0 24 24">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                  </symbol>
                </defs>
                <g>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                </g>
              </svg>
            </div>
            {dropdown.language && (
              <div className="pt-8 pb-16">
                <div className="flex py-8">
                  <input className="me-8" type="checkbox" onClick={() => fltrLang("English")} />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">English</div>
                </div>
                <div className="flex py-8">
                  <input className="me-8" type="checkbox" onClick={() => fltrLang("Spanish")} />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">Spanish</div>
                </div>
                <div className="flex py-8">
                  <input className="me-8" type="checkbox" onClick={() => fltrLang("French")} />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">French</div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between w-full py-16 font-[U-bold] text-16 cursor-pointer border-t"
              onClick={() => toggleDropdown('price')}
            >
              <h3>Price</h3>
              <svg
                className={`dropdown_icon transition-transform duration-300 ${dropdown.price ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
              >
                <defs>
                  <symbol id="icon-expand" viewBox="0 0 24 24">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                  </symbol>
                </defs>
                <g>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                </g>
              </svg>
            </div>
            {dropdown.price && (
              <div className="pt-8 pb-16">
                <div className="flex py-8">
                  <input className="me-8" type="checkbox" onClick={() => fltrPrice("Free")} />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">Free</div>
                </div>
                <div className="flex py-8">
                  <input className="me-8" type="checkbox" onClick={() => fltrPrice("Paid")} />
                  <div className="font-[U-reg] text-14 text-[#303141] ms-4">Paid</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="flex rounded-full bg-white w-40 h-40 m-16 px-10 z-50 justify-center items-center cursor-pointer 2xl:hidden"
        onClick={closeList}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  );
}