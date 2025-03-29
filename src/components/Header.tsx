import { useState } from 'react';
import menuBtn from './img/svgexport-1 (1).svg';
import searchBtn from './img/svgexport-2 (1).svg';
import cartBtn from "./img/svgexport-3 (2).svg";
import MenuList from './MenuList';
import whishlist from './img/svgexport-3 (1).svg'
import bell from './img/svgexport-5.svg'
import rightArrow from './img/svgexport-6.svg'
export type MenuItem = {
    title: string;
    items: string[];
};

 
export type HeaderProps = {
    listMenu: MenuItem[];
    profileDrop: {
        items: { item: string }[];
    }[];
};


let listMenu = [
    {
        "title": "Most popular",
        "items": [
            "Web Development", "Mobile Development",
            "Game Development", "Entrepreneurship",
            "Bussiness Analytics & Intelligence", "Finance",
            "IT Certifications", "Personal Transformation",
            "Graphic Design & Illustration", "Digital Marketing",
            "All categories"
        ]
    }, 
    {
        "title": "More from Udemy",
        "items": [
            "Udemy Bussiness",
            "Get the app",
            "Invite friends",
            "Help and Support"
        ]
    }

]

let dropMenuList = [
    {
        "items": [
            "Deveopment", "Bussiness",
            "Finance & Accounting", "IT & Software",
            "Office Productivity", "Personal Development",
            "Design", "Marketing", "Lifestyle", "Photography & Video",
            "Health & Fitness", "Music",
            "Teaching & Academics"
        ]
    }
]
let profileDrop = [
    {
        "items": [
            { "item": "My learning" },
            { "item": "My cart" },
            { "item": "Whishlist" },
            { "item": "Teach on Udemy" },
        ]
    },
    {
        "items": [
            { "item": "Notifications" },
            { "item": "Messages" },
        ]
    },
    {
        "items": [
            { "item": "Account settings" },
            { "item": "Payment methods" },
            { "item": "Subscription" },
            { "item": "Udemy credits" },
            { "item": "Purchase history" },
        ]
    },
    {
        "items": [
            { "item": "Language" }
        ]
    },
    {
        "items": [
            { "item": "Public profile" },
            { "item": "Edit profile" }
        ]
    },
    {
        "items": [
            { "item": "Help and Support" },
            { "item": "Log out" }
        ]
    }
];

export default function Header(prop: HeaderProps) {
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenTwo, setIsDropdownOpenTwo] = useState(false)
    const [isDropdownOpenThree, setIsDropdownOpenThree] = useState(false)
    const [isDropdownOpenFour, setIsDropdownOpenFour] = useState(false)
    const [isDropdownOpenFive, setIsDropdownOpenFive] = useState(false)
    const [isDropdownOpenSix, setIsDropdownOpenSix] = useState(false)
    const [isDropdownOpenSeven, setIsDropdownOpenSeven] = useState(false)
    const [isDropdownOpenEight, setIsDropdownOpenEight] = useState(false)
 




    const MenuListExpand = () => {
        setMenuDisplay(!menuDisplay);
    };

    return (
        <div>
            {menuDisplay && <MenuList closeMenu={() => setMenuDisplay(false)} listMenu={listMenu} />}
 
            <div className='heder flex justify-between items-center xxs:w-full h-56 xxs:p-4 shadow-lg xl:h-72 xl:justify-start xl:pr-24 xl:m-0 xl:pb-6' >
                <div className='px-10' onClick={MenuListExpand} >  
                    <img className='w-20 h-20 cursor-pointer xl:hidden ' src={menuBtn} alt="Menu" />
                </div>

                <div className='flex justify-center xl:justify-start xl:pr-8 xl:h-72 xl:items-center xl:mt-2'>
                    <img className='w-75 xl:w-91 xl:h-34 ' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Logo" />
                </div>
                <div
                    className="hidden my-12 p-12 font-[U-reg] text-14 xl:block cursor-pointer hover:bg-[#ede5f9] rounded-sm"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    Explore

                    {isDropdownOpen && (
                        <div className="absolute w-[260px] bg-white rounded-lg shadow-lg mt-30">
                            <h2 className="px-16 pt-16 text-14 font-[U-bold] text-[#595c73]">Brows Certifications</h2>
                            <div className="flex justify-between items-center py-8 px-16 text-16 font-[U-reg] text-[#303141] hover:bg-gray-100">
                                <p>Certificate preparation</p>
                                <img className="w-5 h-5 ml-2" src={rightArrow} alt="Arrow" /> 
                            </div>

                            <div className="border-t">
                                {dropMenuList.map((list, index) => (  
                                    <div key={index}>
                                        {list.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex justify-between items-center py-8 px-16 text-16 font-[U-reg] text-[#303141] hover:bg-gray-100">
                                                <p>{item}</p>
                                                <img className="w-5 h-5 ml-2" src={rightArrow} alt="Arrow" />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="go   hidden xl:flex items-center h-46 border rounded-full mx-12 flex-1 min-w-[150px]">
                    <img className='mx-6 w-20 h-20 mt-2' src={searchBtn} alt="" />
                </div>
                <div className='hidden my-12 px-17 font-[U-reg] text-14 3lm:block cursor-pointer hover:bg-[#ede5f9] rounded-sm'
                    onMouseEnter={() => setIsDropdownOpenSix(true)}
                    onMouseLeave={() => setIsDropdownOpenSix(false)}
                >
                    <p> Udemy Business</p>
                    {
                        isDropdownOpenSix && (
                            <div className='p-16 w-288 bg-white  shadow-lg rounded-lg absolute mt-30 me-240 flex items-center justify-between flex-col '>
                                <p className='font-[U-bold] text-black text-17 text-center mb-16'>Get your team access to over 27,000 top Udemy courses,anytime,anywhere.</p>
                                <h3 className='flex items-center justify-center w-256 h-48 bg-[#6d28d2] font-[U-bold] text-white text-17 rounded-lg'>Try Udemy Bussiness</h3>
                            </div>
                        )
                    }
                </div>
                <div className='hidden my-12 px-8 font-[U-reg] text-14 lx:block cursor-pointer hover:bg-[#ede5f9] rounded-sm'
                    onMouseEnter={() => setIsDropdownOpenSeven(true)}
                    onMouseLeave={() => setIsDropdownOpenSeven(false)}
                > 
                    Teach on Udemy
                    {
                        isDropdownOpenSeven && (
                            <div className='p-16 w-288 bg-white  shadow-lg rounded-lg absolute mt-30 me-240 flex items-center justify-between flex-col '>
                                <p className='font-[U-bold] text-black text-17 text-center mb-16'>Turn what you know you know into an opportunity and reach millions around the world</p>
                                <h3 className='flex items-center justify-center w-256 h-48 bg-[#6d28d2] font-[U-bold] text-white text-17 rounded-lg'>Learn More</h3>
                            </div>
                        )
                    } 
                </div>
                <div className='hidden  font-[U-reg] text-14 xl:flex w-104 cursor-pointer hover:bg-[#ede5f9] rounded-sm py-12' style={{ justifyContent: 'center' }}
                onMouseEnter={() => setIsDropdownOpenEight(true)}
                onMouseLeave={() => setIsDropdownOpenEight(false)}
                >
                    <p> My learning</p> 
                    {
                        isDropdownOpenEight &&(
                            <div className='p-16 w-288 bg-white  shadow-lg rounded-lg absolute mt-50 me-240 flex items-center justify-between flex-col '>
                            <p className='font-[U-bold] text-black text-17 text-center mb-16'>Turn what you know you know into an opportunity and reach millions around the world</p>
                            <h3 className='flex items-center justify-center w-256 h-48 bg-white border border-[#6d28d2] text-[#6d28d2] font-[U-bold] text-17 rounded-lg'>Learn More</h3>
                        </div>
                        )
                    }
                </div>
                <div className='flex ' style={{ margin: "0px -4px" }}>
                    <div className='px-10 py-12 xl:hidden '>
                        <img className='w-20 h-20 ' src={searchBtn} alt="Search" />
                    </div>

                    <div className='hidden xxs:hidden xxs:items-center xl:hidden px-10 lm:flex lm:px-0 lm:py-10 lm:items-center lm:justify-center lm:w-36 cursor-pointer hover:bg-[#ede5f9] rounded-sm' onMouseEnter={() => setIsDropdownOpenThree(true)} onMouseLeave={() => setIsDropdownOpenThree(false)}>
                        <img className='w-20 h-20 xl:w-17 xl:h-17 ' src={whishlist} alt="Cart" />
                        {
                            isDropdownOpenThree && (
                                <div className='p-16 w-288 bg-white h-90 shadow-lg rounded-lg absolute mt-170 me-240 flex items-center justify-between flex-col '>
                                    <p className='font-[U-reg] text-black'>Your whishlist is empty</p>
                                    <h3 className='font-[U-bold] text-[#6d28d2] text-14'>Explore course</h3>
                                </div>
                            ) 
                        }  
                    </div>
                    <div className='px-10 xl:flex xl:px-0 xl:items-center xl:justify-center xl:w-48 py-10 cursor-pointer hover:bg-[#ede5f9] rounded-sm xl:mt-2'>
                        <img className='w-20 h-20 xl:w-20 xl:h-20' src={cartBtn} alt="Cart"
                            onMouseEnter={() => setIsDropdownOpenFour(true)}
                            onMouseLeave={() => setIsDropdownOpenFour(false)} 
                        /> 
                        { 
                            isDropdownOpenFour && (
                                <div className='p-16 w-288 bg-white h-90 shadow-lg rounded-lg absolute mt-170 me-240 flex items-center justify-between flex-col '>
                                    <p className='font-[U-reg] text-black'>Your cart is empty</p>
                                    <h3 className='font-[U-bold] text-[#6d28d2] text-14'>Keep shoping</h3>
                                </div>
                            )
                        }
                    </div>
                    <div className='hidden px-10 lm:flex lm:px-0 lm:items-center lm:justify-center lm:w-32 cursor-pointer hover:bg-[#ede5f9] rounded-sm py-10 lm:mt-2'>
                        <img className='w-20 h-20 xl:w-20 xl:h-20' src={bell} alt="Cart"
                            onMouseEnter={() => setIsDropdownOpenFive(true)}
                            onMouseLeave={() => setIsDropdownOpenFive(false)}
                        />
                        {
                            isDropdownOpenFive && (
                                <div className='p-16 w-361 bg-white h-107 shadow-lg rounded-lg absolute mt-180 me-330 flex items-center justify-between flex-col '>
                                    <div className='flex justify-between w-full'>
                                        <p className='font-[U-bold] text-black'>Notifications</p>
                                        <h3 className='font-[U-bold] text-[#6d28d2] text-14'>settings</h3>
                                    </div>
                                    <p className='font-[U-reg] text-black'>No notifications</p>
                                </div>
                            ) 
                        } 
                    </div>
                    <div className='hidden xl:flex w-64 justify-center hover:bg-[#ede5f9] rounded-sm py-10 xl:mt-2'>
                        <div className='flex justify-center items-center text-14 text-white bg-black rounded-full w-32 h-32 font-[U-bold] cursor-pointer'
                            onMouseEnter={() => setIsDropdownOpenTwo(true)}
                            onMouseLeave={() => setIsDropdownOpenTwo(false)}
                        >
                            S
                        </div>
                        {isDropdownOpenTwo && (

                            <div className='w-[260px] bg-white shadow-lg absolute rounded-lg mt-55 me-210 ' >
                                <div className='flex p-16 items-center bg-[#ffff]'>
                                    <div className='flex justify-center items-center text-18 text-white bg-black rounded-full w-64 h-64 font-[U-bold]  '>
                                        S
                                    </div>
                                    <div className='ms-16 me-8'>
                                        <h3 className='text-16 font-[U-bold]'>Hi, User</h3>
                                        <p className='font-[U-reg] text-14 text-[#595c73] whitespace-nowrap'>user@gmail.com</p>
                                    </div>

                                </div>
                                {
                                    profileDrop.map((item, id) => (
                                        <div key={id} className='border-t py-8'>
                                            {
                                                item.items.map((list, listInd) => (
                                                    <div className="flex justify-between items-center py-8 px-16 text-16 font-[U-reg] text-[#303141] hover:bg-gray-100">
                                                        <p>{list.item}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
