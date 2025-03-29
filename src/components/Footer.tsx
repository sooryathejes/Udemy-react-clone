import DropDownComp from './DropDownComp'
import GroupItems from './GroupItems';
import udemy from './img/Udemy-1 (1).svg'


type FooterProps = {
    footerItems: {
        title: string;
        items: string[];
    }[];
    GrpItems: {
        title: string;
        items: string[];
    }[]; 
};

export let footerItems = [
    {
        "title": "Certification by Issuer",
        "items": [ 
            "Amazon Web Services (AWS) Certifications",
            "Six Sigma Certifications",
            "Microsoft Certifications",
            "Cisco Certification",
            "Tableau Certifications",
            "See all Certifications"
        ]
    },
    {
        "title": "Certifications by Skills",
        "items": [
            "Cybersecurity Certification",
            "Project Management Certification",
            "Cloud Certification",
            "Data Analytics Certification",
            "HR Management Certification",
            "See all Certifications"
        ]
    },
    {
        "title": "Web Development",
        "items": [
            "JavaScript",
            "React JS",
            "Angular",
            "Java"
        ]
    },
    {
        "title": "IT Certifications", 
        "items": [
            "Amazon AWS",
            "AWS Certified Cloud Practitioner",
            "AZ-900: Microsoft Azure Fundamentals",
            "AWS Certified Solutions Architect - Associate",
            "Kubernetes"
        ]
    },
    {
        "title": "Leadership",
        "items": [
            "Leadership",
            "Management Skills",
            "Personal Productivity",
            "Emotional Intelligence"
        ]
    },
    {
        "title": "Data Science",
        "items": [
            "Data Science",
            "Python",
            "Machine Learning",
            "ChatGPT",
            "Deep Learning"
        ]
    },
    {
        "title": "Communication Skills",
        "items": [
            "Communication Skills",
            "Public Speaking",
            "Writing",
            "PowerPoint"
        ]
    },
    {
        "title": "Business Analytics & Intelligence",
        "items": [
            "Microsoft Excel",
            "SQL",
            "Microsoft Power BI",
            "Data Analysis",
            "Business Analysis"
        ]
    }
];
 
export let GrpItems = [
    {
        title: "About",
        items: ["About Us", "Careers", "Contact Us", "Blog", "Investors"]
    },
    {
        title: "Discover Udemy", 
        items: ["Get the app", "Teach on Udemy", "Plans and Pricing", "Affiliate", "Help and Support"]
    },
    {
        title: "Udemy for Business",
        items: ["Udemy Business"]
    }, 
    {
        title: "Legal & Accessibility",
        items: ["Accessibility Statement", "Privacy Policy", "Sitemap", "Terms"] 
    } 
];

export default function Footer(prop: FooterProps) {
    return (
        <div> 
            <div className='py-16 px-24 bg-[#1e1c27] text-white lg:flex'>
                <div> 
                    <h1 className='font-[U-bold] text-16 text-white'> 
                        Teach the world online   
                    </h1>   
                    <p className='font-[U-reg] pt-8 lg:w-[90%]'>
                        Create an online video course, reach students across the globe,and earn money
                    </p>
                </div>
                <div className='flex items-center justify-center w-135 h-40 font-[U-bold] mt-8 border-2 rounded-sm whitespace-nowrap text-14'>
                    Teach on Udemy
                </div> 
            </div>
            <div className='py-16 px-24 bg-[#1e1c27] text-white border-t '>
                <div>
                    <h1 className='font-[U-bold] text-16 text-white py-12 pe-24'>
                        Top companies choose Udemy Business to build in-demand career skills.
                    </h1>
                    <div className='flex flex-wrap'>
                        <img className=' h-44 my-12 me-24' src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
                        <img className=' h-44 my-12 me-24' src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
                        <img className=' h-44 my-12 me-24' src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
                        <img className=' h-44 my-12' src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="pt-16 px-24 bg-[#1e1c27] text-white border-t">
                <h1 className="font-bold text-[17.5px] text-white mt-16 mb-24">
                    Explore top skills and certifications
                </h1>
                <div className='lg:flex flex-wrap'>
                {
                    footerItems.map((items, index) => (<DropDownComp items={items} key={index} index={index}/>))
                }
                </div>
                
            </div>
            <div className="pt-16 px-24 bg-black text-white xs:flex justify-between">

                {
                    GrpItems.map((items,index) => ( <GroupItems items={items} key={index} index={index} /> ))

                }
                </div>
            <div className='p-24 bg-black text-white border-t  '>
                <div className='flex  gap-6 flex-col  lg:flex lg:flex-row-reverse justify-between items-center' >
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <h3 className='font-[U-reg] ms-4'>English</h3>
                    </div>
                    <div className='font-[U-reg]'> 
                        Coockie settings
                    </div>
                    <div className='flex items-center gap-4'>
                        <img className='w-91  py-16' src={udemy} alt="" />
                        <p className='font-[U-reg] text-14'>© 2025 Udemy, Inc.</p>
                    </div>
                </div>
            </div> 
        </div>  
    )
} 