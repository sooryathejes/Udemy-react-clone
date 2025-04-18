import { useState, useEffect, SetStateAction } from 'react';
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
    subtitle: string;
};

export default function CoursesList() {
    let [courses, setCourses] = useState<Course[]>([]);
    let [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    let [selectMultiple, setSelectMultiple] = useState<Course[]>([]);
    let [filterShow, setFilterShow] = useState(false)
    let showFilter = () => {
        setFilterShow(!filterShow)
    }



    let fltrRating = (minRating: number, maxRating: number) => {
        let filteredRating = courses.filter(course => course.rating >= minRating && course.rating < maxRating);
        setFilteredCourses(filteredRating);
    };
    let ratingCount = (minRating: number, maxRating: number) => {
        let countRating = courses.filter(course => course.rating >= minRating && course.rating < maxRating).length
        return countRating
    }; 

    const fltrLevel = (lvl: string) => {
        setSelectMultiple(prev => {
            let updatedSelectMultiple;
            if (prev.some(course => course.levels === lvl)) {
                updatedSelectMultiple = prev.filter(course => course.levels !== lvl);
            } else {
                const filterLvl = courses.filter(course => course.levels === lvl);
                updatedSelectMultiple = [...prev, ...filterLvl];
            }
            setFilteredCourses(updatedSelectMultiple);
            return updatedSelectMultiple;
        });
    };
    let levelCount = (lvl: string) => {
        let countLevel = courses.filter(courses => courses.levels == lvl).length
        return countLevel
    }
    const fltrLang = (lang: string) => {
        setSelectMultiple(prev => {
            let updatedSelectMultiple;
            if (prev.some(course => course.language === lang)) {
                updatedSelectMultiple = prev.filter(course => course.language !== lang);
            } else {
                const filteredLang = courses.filter(course => course.language === lang);
                updatedSelectMultiple = [...prev, ...filteredLang];
            }
            setFilteredCourses(updatedSelectMultiple);
            return updatedSelectMultiple;
        });
    };

    let langCount = (lang: string) => {
        let coutLang = courses.filter(course => course.language == lang).length
        return coutLang
    }
        
    let fltrSub = (sub: string) => {
        setSelectMultiple(prev => {
            let updatedSelectMultiple;
            if (prev.some(course => course.subtitle === sub)) {
                updatedSelectMultiple = prev.filter(course => course.subtitle !== sub);
            } else {
                const filteredSub = courses.filter(course => course.subtitle === sub);
                updatedSelectMultiple = [...prev, ...filteredSub];
            }

            setFilteredCourses(updatedSelectMultiple);
            return updatedSelectMultiple;
        }); 
    }; 

    let subCount = (sub: string) => { 
        let countSub = courses.filter(courses => courses.subtitle == sub).length
        return countSub
    }

    const fltrPrice = (prc: string) => {
        setSelectMultiple(prev => {
            let updatedSelectMultiple;
            if (prc === "Free") {
                if (prev.some(course => course.price === "Free")) {
                    updatedSelectMultiple = prev.filter(course => course.price !== "Free");
                } else {
                    const filteredPrice = courses.filter(course => course.price === "Free");
                    updatedSelectMultiple = [...prev, ...filteredPrice];
                }
            } else {
                if (prev.some(course => course.price !== "Free")) {
                    updatedSelectMultiple = prev.filter(course => course.price === "Free");
                } else {
                    const filteredPrice = courses.filter(course => course.price !== "Free");
                    updatedSelectMultiple = [...prev, ...filteredPrice];
                }
            }
            setFilteredCourses(updatedSelectMultiple);
            return updatedSelectMultiple;
        });
    };


    let priceCount = (prc: string) => {
        let countPrice: number;
        if (prc === "Free") {
            countPrice = courses.filter(course => course.price === "Free").length;
        } else {
            countPrice = courses.filter(course => course.price !== "Free").length;
        }
        return countPrice
    };

    

    useEffect(() => {
        axios.get('/courses.json')
            .then(res => {
                setCourses(res.data);
                let FilteredCourse = res.data.filter((course: { rating: number; }) => course.rating >= 4.5);
                setFilteredCourses(FilteredCourse);
            })
            .catch(err => {
                console.log(err); 
            });
    }, []); 
    return (  
        <div className='max-w-[1340px] mx-auto'>
            <h1 className='font-[U-bold] text-18 h-22 mb-24 max-w-[1340px] mx-auto'>{filteredCourses.length} results for "python"</h1>
            <div className='flex w-full mb-24'>
                <Filter items="example" id={1} showFilter={showFilter} />
                <Sort />
            </div>
            <div className='2xl:flex gap-4'>
                <div className=''>
                    { 
                        filterShow && (
                            <FilterList 
                                closeList={() => { setFilterShow(false); }}
                                fltrRating={fltrRating}
                                fltrLang={fltrLang}
                                fltrPrice={fltrPrice}
                                ratingCount={ratingCount}
                                langCount={langCount}
                                priceCount={priceCount} 
                                fltrLevel={fltrLevel}
                                levelCount={levelCount}
                                fltrSub={fltrSub}
                                subCount={subCount}
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