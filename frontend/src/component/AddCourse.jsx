// import { useRef, useState } from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const AddCourse = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [lessons, setLessons] = useState([]);
    const lessonContainer = useRef();
    const [rowNumber, setRowNumber] = useState(1);

    function RemoveLessonRow(e) {
        setLessons((lessons) => lessons.filter((lesson) => lesson.ref.current.id !== e.target.parentElement.id));
    }

    function addLessonRow () {
        const newLesson = (
            <div id={rowNumber} ref={lessonContainer} className='bg-white border-[1px] border-gray-500 rounded-lg p-4 m-2 relative'>
                <input {...register('lessonTitle')} className='p-2 bg-[#01c8b5] outline-none placeholder-black rounded-lg' type='text' placeholder='Lesson Title' />
                <input {...register('videoFile')} className='ml-4 bg-[]' type='file' placeholder='Lesson Video' />
                <input {...register('duration')} className='p-2 bg-[#01c8b5] outline-none placeholder-black rounded-lg' type='text' placeholder='Lesson Duration' />
                    <svg onClick={RemoveLessonRow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute right-4 top-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
            </div>
        )
        setLessons(lessons => [...lessons, newLesson]);
        setRowNumber((rowNum) => rowNum + 1);
    }

    async function handleImageUpload(imageFile) {
        const formData = new FormData();
        formData.append('imageFile', imageFile[0]);
        let response;
        try {
            response = await axios.post('http://localhost:8000/admin/upload-image', formData, {
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
            response = await axios.post('http://localhost:8000/admin/upload-video', formData, {
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
            await axios.post('http://localhost:8000/admin/courses/add', data, {
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
        <div className='w-full flex flex-col gap-12 pl-32 pr-72 py-14'>
            <input {...register('title')} className='w-[400px] h-14 bg-[#01c8b5] outline-none text-black placeholder-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Title'/>
            <input {...register('description')} className='w-[400px] h-14 bg-[#01c8b5] outline-none text-black placeholder-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Description'/>
            <input {...register('price')} className='w-[400px] h-14 bg-[#01c8b5] outline-none text-black placeholder-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Price'/>
            <input {...register('imageFile')} className='absolute right-80 w-[500px] h-[300px] p-32 bg-white border-[1px] border-gray-300 text-black text-lg font-medium rounded-lg' type="file" placeholder='Course Image'/>
            <div className='my-10 min-h-[150px] p-4'>
                <h3 className='text-xl font-bold'>Lessons</h3>
                {
                    lessons.map((lesson) => (
                        lesson
                    ))
                }
                <button onClick={addLessonRow} className='bg-[#01c8b5] px-4 py-2'>Add Lesson</button>
            </div>
            <button type='submit' className='w-24 h-10 font-bold text-lg rounded-lg bg-[#01c8b5]'>Save</button>
        </div>
    </form>
  )
}

export default AddCourse