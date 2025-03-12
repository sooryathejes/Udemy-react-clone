import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Sort from './Sort';
import FilterList from './FilterList'
import RelatedSearches from './RelatedSearches';
import Pagination from './Pagination';


export type Course = {
    img: string;
    course: string;
    courseDiscription: string;
    instructor: string;
    rating: number;
    stars: string;
    reviews: string;
    time: string;
    lectures: string;
    levels: string;
    price: string;
    language: string;
}; 
 
export default function CoursesList() {
    let [courses, setCourses] = useState<Course[]>([]);
    let [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

    let fltrRating = (minRating: number, maxRating: number) => {
        const filtered = courses.filter(course => course.rating >= minRating && course.rating < maxRating);
        setFilteredCourses(filtered);
    };
    let fltrLang = (lang: string) => {
        const filtered = courses.filter(course => course.language == lang);
        setFilteredCourses(filtered);
    };

    let fltrPrice = (prc: string) => { 
        let filtered: Course[];
        if (prc === "Free") {
            filtered = courses.filter(course => course.price === "Free");
        } else { 
            filtered = courses.filter(course => course.price !== "Free");
        }
        setFilteredCourses(filtered);
    };

    let [filterShow, setFilterShow] = useState(false)
    let showFilter = () => {
        setFilterShow(!filterShow)
    }

    useEffect(() => {
        axios.get('/courses.json')
            .then(res => {
                setCourses(res.data);
                const FilteredCourse = res.data.filter((course: { rating: number; }) => course.rating >= 4.5);
                setFilteredCourses(FilteredCourse); 
            })  
            .catch(err => {
                console.log(err);
            });
    }, []);
    return ( 
        <div className='max-w-[1340px] mx-auto'>
            <div className='flex w-full mb-24'>
                <Filter items="example" id={1} showFilter={showFilter} />
                <Sort />
            </div> 
            <div className='2xl:flex'>
                <div className='2xl:w-[auto] '>  
                    {  
                        filterShow && ( 
                            <FilterList 
                                closeList={() => { setFilterShow(false); }}
                                fltrRating={fltrRating}
                                fltrLang={fltrLang}
                                fltrPrice={fltrPrice}
                            />
                        )
                    }
                </div>
                <div className='2xl:w-[full]'>
                    {filteredCourses.map((course, index) => (
                        <div key={index} className='flex py-16 gap-[8px] w-full sm:gap-[16px]'>
                            <div className='flex xxs:w-66 xxs:h-66 sm:w-[63.5%] sm:h-137 w-full sm:max-w-[248px]'>
                                <img className='w-full h-66 object-cover sm:h-137' src={course.img} alt="" />
                            </div> 
                            <div className='w-[74%] sm:w-[full] sm:flex sm:place-items-start sm:justify-between'>
                                <div className='sm:w-[71%]'>
                                    <h1 className='mb-4 font-bold overflow-hidden text-[16px] leading-[19px] text-ellipsis line-clamp-2'>
                                        {course.course}
                                    </h1>
                                    <p className='mb-4 font-[U-reg] text-12 text-[#303141]'>{course.instructor}</p>
                                    <div className='flex mb-4 items-center'>
                                        <p className='text-[#8b4309] font-[U-bold] text-16'>{course.rating}</p>
                                        <img className='' src={course.stars} alt="" />
                                        <p className='font-[U-reg] text-12 text-[#303141]'>{course.reviews}</p>
                                    </div> 
                                    <div className='flex flex-wrap items-center font-[U-reg] text-12 text-[#303141] mb-4'>
                                        <p>{course.time}</p>
                                        <p className='text-8 text-gray-300'>●</p> 
                                        <p>{course.lectures}</p>
                                        <p className='text-9 text-gray-300'>●</p>
                                        <p>{course.levels}</p>
                                    </div>
                                </div>

                                <div className='flex mb-4 items-center sm:right-0'>
                                    <h3 className='text-16 text-black font-[U-bold] py-4 me-8'>{course.price}</h3>
                                    {/* <p className='text-16 font-[U-reg] py-4 text-[#303141] line-through'>{course.}</p> */} 
                                </div>
                            </div>
                        </div> 
                    ))}
                    <RelatedSearches />
                    <Pagination />
                </div>
            </div>



        </div>
    );
}  

