// import { useRef, useState } from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { lessonAtom } from '../store/atoms/lessons';

const AddCourse = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [lessons, setLessons] = useRecoilState(lessonAtom);
    const lessonContainer = useRef<HTMLDivElement>();
    const [rowNumber, setRowNumber] = useState(1);

    function RemoveLessonRow(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        setLessons(lessons.filter((lesson: { id: string }) => lesson.id !== e.currentTarget.parentElement?.id));
    }

    function addLessonRow() {
        const newLesson = (
            <div key={rowNumber} id={rowNumber.toString()} ref={lessonContainer} className='bg-white border-[1px] border-gray-500 rounded-lg p-3 relative flex flex-wrap gap-2 my-2 pt-6 lg:gap-10 xl:w-[80%]'>
                <input {...register('lessonTitle')} className='py-1 pl-2 bg-[#01c8b5] outline-none placeholder-black rounded-lg lg:w-60' type='text' placeholder='Lesson Title' />
                <input {...register('videoFile')} className='border-2 border-gray-300 w-44 lg:w-60' type='file' placeholder='Lesson Video' />
                <input {...register('duration')} className='py-1 pl-2 bg-[#01c8b5] outline-none placeholder-black rounded-lg lg:w-60' type='text' placeholder='Lesson Duration' />
                    <svg onClick={RemoveLessonRow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 absolute right-2 top-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
            </div>
        )
        setLessons([...lessons, newLesson]);
        setRowNumber((rowNum) => rowNum + 1);
    }

    async function handleImageUpload(imageFile) {
        const formData = new FormData();
        formData.append('imageFile', imageFile[0]);
        let response;
        try {
            response = await axios.post('https://course-selling-website-q42x.onrender.com/admin/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        return response.data.imageFile;
    }


    async function handleVideoUpload(videoFile) {
        const formData = new FormData();
        formData.append('videoFile', videoFile[0]);

        let response;
        try {
            response = await axios.post('https://course-selling-website-q42x.onrender.com/admin/upload-video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        return response.data.videoFile;
    }

    const addCourse = async (data) => {
        try {
            const imageFile= await handleImageUpload(data.imageFile);
            const videoFile = await handleVideoUpload(data.videoFile);
            const lesson = {
                lessonTitle: data.lessonTitle,
                videoFile,
                duration: data.duration
            }
            data.imageFile = imageFile;
            data.lessons = [lesson];
            data.instructorId = window.localStorage.getItem('userId');
            delete data.lessonTitle;
            delete data.duration;
            delete data.videoFile;
            await axios.post('https://course-selling-website-q42x.onrender.com/admin/courses/add', data, {
                headers: {
                    'Authorization': `Bearer ${window.localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                alert(res.data.msg);
            })
            .catch((err) => {
                console.log(err);
            }) 
            navigate('/admin/dashboard');
        } catch(err) {
            console.log(err);
        }
    }

  return (
    <form onSubmit={handleSubmit(addCourse)} encType='multipart/form-data'>
        <div className='w-full flex flex-col gap-12 px-10 py-14 xl:px-36'>
            <input {...register('title')} className='w-60 h-10 bg-[#01c8b5] outline-none text-black placeholder-black text-base font-medium p-4 rounded-lg lg:w-80 lg:text-lg xl:w-96' type="text" placeholder='Course Title'/>
            <input {...register('description')} className='w-60 h-10 bg-[#01c8b5] outline-none text-black placeholder-black text-base font-medium p-4 rounded-lg lg:w-80 lg:text-lg xl:w-96' type="text" placeholder='Course Description'/>
            <input {...register('price')} className='w-60 h-10 bg-[#01c8b5] outline-none text-black placeholder-black text-base font-medium p-4 rounded-lg lg:w-80 lg:text-lg xl:w-96' type="text" placeholder='Course Price'/>
            <input {...register('imageFile')} className='absolute top-96 w-60 h-10 p-1 bg-white border-[1px] border-gray-300 text-black text-base font-medium rounded-lg md:right-20 md:top-36 md:h-52 md:py-20 md:px-6 lg:w-96 lg:top-40 lg:h-56 lg:px-20 lg:py-24 xl:right-80' type="file" placeholder='Course Image'/>
            <div className='my-10 min-h-[150px] p-4 max-w-[70vw]'>
                <h3 className='text-xl font-bold'>Lessons</h3>
                {
                    lessons.map((lesson) => (
                        lesson
                    ))
                }
                <button onClick={addLessonRow} type='button' className='bg-[#01c8b5] px-4 py-2'>Add Lesson</button>
            </div>
            <button type='submit' className='w-24 h-10 font-bold text-lg rounded-lg bg-[#01c8b5]'>Save</button>
        </div>
    </form>
  )
}

export default AddCourse