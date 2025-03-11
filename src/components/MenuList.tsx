
import React from 'react';
import rightArrow from './img/svgexport-6.svg'
import { MenuItem } from '../components/Header'

type MenuListProps = {
    listMenu: MenuItem[];
    closeMenu: () => void;
};

export default function MenuList({ closeMenu, listMenu }: MenuListProps) {

    return (
        <div className='w-full top-0 left-0 bg-[#0d0d0ea1] z-50 fixed overflow-y-auto'>
            <div className='flex'>
                <div className='bg-white opacity-100 z-51 h-[100vh]  shadow-lg overflow-y-auto w-[78%] max-w-[280px]'>
                    <div className='flex p-16 items-center bg-[#f6f7f9]'>
                        <div className='flex justify-center items-center text-18 text-white bg-black rounded-full w-64 h-64 font-[U-bold]'>
                            S
                        </div>
                        <div className='ms-16 me-8'>
                            <h3 className='text-16 font-[U-bold]'>Hi, User</h3>
                            <p className='font-[U-reg] text-14 text-[#595c73] whitespace-nowrap'>Welcome back</p>
                        </div>
                    </div>
                    <h2 className='px-16 pt-16 text-14 font-[U-bold] text-[#595c73]'>Learn</h2>
                    <div className='py-8'>
                        <p className='py-8 px-16 ms-[-4px] text-16 font-[U-reg] text-[#303141]'>My learning</p>
                    </div>
                    <div className='py-8 border-t '>
                        <p className='flex justify-between items-center py-8 px-16 ms-[-4px] text-16 font-[U-reg] text-[#303141]'>Certification preparation
                            <img className='w-20 h-20' src={rightArrow} alt="" />
                        </p>
                    </div>
                    {
                        listMenu.map((list) => (
                            <div className='border-t'>
                                <h2 className='px-16 pt-16 text-14 font-[U-bold] text-[#595c73]'>{list.title}</h2>
                                <div className='py-8'>
                                    {
                                        list.items.map((listItems) => (
                                            <p className='flex justify-between items-center py-8 px-16 ms-[-4px] text-16 font-[U-reg] text-[#303141]'>{listItems}
                                                <img className='w-20 h-20' src={rightArrow} alt="" />
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className='px-16 mb-32'>
                    <div className='flex items-center px-16 border border-[#6d28d2] rounded-md w-140 h-40'>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#6d28d2"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z" /></svg>
                        <p className='text-[#6d28d2] font-[U-reg] ms-4'>English</p>
                    </div>
                    </div>
                    
                </div>
                <div
                    className='flex rounded-full bg-white w-40 h-40 m-16 px-10 z-50 justify-center items-center cursor-pointer'
                    onClick={closeMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div> 
            </div>
        </div>
    );
} 