// import { useRef, useState } from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    // const [lessons, setLessons] = useState([]);
    // const [imageFile, setImageFile] = useState(null);
    // const [videoFile, setVideoFile] = useState(null);
    // const lessonContainer = useRef();

    // function addLessonRow () {
    //     const newLesson = (
    //         <div className='border-2 border-black p-4 m-2'>
    //             <input {...register('lessonTitle')} className='p-2' type='text' placeholder='Lesson Title' />
    //             <input {...register('videoUrl')} className='ml-4' type='file' placeholder='Lesson Video' />
    //             <input {...register('duration')} className='p-2' type='text' placeholder='Lesson Duration' />
    //         </div>
    //     )
    //     setLessons(lessons => [...lessons, newLesson]);
    // }

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
                navigate('/admin/dashboard')
            })
            .catch((err) => {
                console.log(err);
            }) 
        } catch(err) {
            console.log(err);
        }
    }

  return (
    <form onSubmit={handleSubmit(addCourse)} encType='multipart/form-data'>
        <div className='w-full flex flex-col gap-12 px-32 py-14'>
            <input {...register('title')} className='w-[400px] h-14 bg-[#01c8b5] outline-none text-black placeholder-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Title'/>
            <input {...register('description')} className='w-[400px] h-14 bg-[#01c8b5] outline-none text-black placeholder-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Description'/>
            <input {...register('price')} className='w-[400px] h-14 bg-[#01c8b5] outline-none text-black placeholder-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Price'/>
            <input {...register('imageFile')} className='relative -z-10 left-[46rem] bottom-10 w-[500px] h-[300px] p-32 bg-white border-[1px] border-gray-300 text-black text-lg font-medium rounded-lg' type="file" placeholder='Course Image'/>
            <div className='my-10 min-h-[150px] p-4'>
                <h3 className='text-xl font-bold'>Lessons</h3>
                <div className='bg-white border-[1px] border-gray-500 rounded-lg p-4 m-2'>
                    <input {...register('lessonTitle')} className='p-2 bg-[#01c8b5] outline-none placeholder-black rounded-lg' type='text' placeholder='Lesson Title' />
                    <input {...register('videoFile')} className='ml-4 bg-[]' type='file' placeholder='Lesson Video' />
                    <input {...register('duration')} className='p-2 bg-[#01c8b5] outline-none placeholder-black rounded-lg' type='text' placeholder='Lesson Duration' />
                </div>
            </div>
            <button type='submit' className='w-24 h-10 font-bold text-lg rounded-lg bg-[#01c8b5]'>Save</button>
        </div>
    </form>
  )
}

export default AddCourse