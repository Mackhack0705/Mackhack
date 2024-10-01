import { useState } from 'react'

const AboutUs = () => {
    const [instructorArray, setInstructorArray] = useState([
        {
            id: 1,
            name: "Emily Carter",
            image: "/images/instructor1.png"
        },
        {
            id: 2,
            name: "Rohan Mehta",
            image: "/images/instructor2.png"
        },
        {
            id: 3,
            name: "Sophia Turner",
            image: "/images/instructor3.png"
        },
        {
            id: 4,
            name: "Aarav Sharma",
            image: "/images/instructor4.png"
        },
        {
            id: 5,
            name: "Olivia Brown",
            image: "/images/instructor5.png"
        },
        {
            id: 6,
            name: "Isabella Martinez",
            image: "/images/instructor6.png"
        }
    ]);
    function slideLeft() {
        const firstInstructor = instructorArray.shift();
        setInstructorArray([...instructorArray, firstInstructor]);
    }
    function slideRight() {
        const lastInstructor = instructorArray.pop();
        setInstructorArray([lastInstructor, ...instructorArray]);
    }
  return (
    <div className='px-4 py-10 text-center'>
        <div className='text-3xl font-bold md:text-4xl'>About Us</div>
        <div className='flex flex-wrap py-10 xl:px-40'>
            <div className='w-full rounded-lg md:w-[40%] lg:w-[30%]'>
                <img src="/images/aboutImage1.jpeg" alt=""  className='rounded-lg'/>
            </div>
            <div className='w-full text-lg text-justify py-14 font-medium md:w-[60%] md:px-4 lg:w-[70%] xl:pl-10'>
                <p>
                    At Makehack, we are committed to empowering learners by providing top-quality,  expertly crafted courses across a variety of fields, including full-stack    development, web3, and machine learning. Our mission is to make cutting-edge   education accessible to everyone, helping individuals unlock their potential and  achieve their career goals.
                </p>
            </div>
        </div>
        <div className='flex flex-wrap justify-center py-10 xl:px-40'>
            <div className='w-full text-lg text-justify order-2 py-14 font-medium md:w-[60%] md:px-4 md:order-1 lg:w-[70%] xl:pr-10'>
                <p>
                    We offer a platform where aspiring professionals can  learn from industry experts, master in-demand skills, and stay ahead of the latest technological trends. Whether you&apos;re looking to start a new career or enhance your existing skill set, we are here to support your learning journey with engaging content and practical insights.
                </p>
            </div>
            <div className='w-full rounded-lg md:w-[40%] md:order-2 lg:w-[30%]'>
                <img src="/images/aboutImage2.jpeg" alt=""  className='rounded-lg'/>
            </div>
        </div>
        <div className='text-2xl font-bold md:text-3xl'>
            <p>Our Top Educators</p>
        </div>
        <div className='flex overflow-hidden py-10'>
            {
                instructorArray.map((instructor) => {
                    return (
                        <div key={instructor.id} className='h-80 w-60 mx-8 shrink-0'>
                            <div className='h-[80%] w-full'>
                                <img src={instructor.image} alt="" className='h-full w-full'/>
                            </div>
                            <div className='text-2xl font-semibold mt-4'>
                                <p>{instructor.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='w-60 m-auto flex justify-between'>
            <div className='h-20 flex items-center'>
                <button onClick={slideRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className='h-20 flex items-center'>
                <button onClick={slideLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs