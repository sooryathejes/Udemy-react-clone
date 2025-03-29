import { useState, useEffect } from 'react';

type DropDownCompProps = {
    items: {
        title: string;
        items: string[];
    };
    index: number;
};

export default function DropDownComp({ items, index }: DropDownCompProps) {
    const [dropdown, setDropdown] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 701);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 701);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleCategory = (index: number) => {
        if (isMobile) { 
            setDropdown(dropdown === index ? null : index);
        }
    }; 

    return (  
        <div className='lg:w-[25%]'>
            <div className="nth-[1]:border-0 border-t lg:border-0 "> 
                <div
                    className={`flex justify-between py-16 ${isMobile ? 'cursor-pointer' : ''}`}
                    onClick={() => toggleCategory(index)}
                >
                    <p className="font-bold text-[16px] pb-8 lg:pb-0">{items.title}</p>
                    {isMobile && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2" 
                            stroke="white"
                            className={`size-4 ms-16 mt-8 transition-transform ${dropdown === index ? 'rotate-180' : ''}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    )}
                </div>
                {(isMobile ? dropdown === index : true) && (
                    <div className="pt-8 pb-16">
                        {items.items.map((item, i) => ( 
                            <p key={i} className="py-4 text-[14px]">{item}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
 
} 
 