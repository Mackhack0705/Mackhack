// import { useRef, useState } from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios';

const AddCourse = () => {
    const {register, handleSubmit} = useForm();
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
        console.log(imageFile);
        console.log(formData);
        let response;
        try {
            response = await axios.post('http://localhost:8000/admin/upload-image', formData);
        } catch (err) {
            console.log(err);
        }
        console.log(response);
        return response.data.output.path;
    }


    async function handleVideoUpload(videoFile) {
        const formData = new FormData();
        formData.append('videoFile', videoFile[0]);
        console.log(videoFile);
        console.log(formData);

        let response;
        try {
            response = await axios.post('http://localhost:8000/admin/upload-video', formData);
        } catch (err) {
            console.log(err);
        }
        console.log(response)
        return response.data.output;
    }

    const addCourse = async (data) => {
        console.log(data);
        try {
            const imageFilePath = await handleImageUpload(data.imageFile);
            const videoFilePath = await handleVideoUpload(data.videoFile);
            console.log(imageFilePath);
            console.log(videoFilePath);
            axios.post('http://localhost:8000/admin/courses/add', data, {
                headers: {
                    'Authorization': `Bearer ${window.localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                console.log(res);
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
        <div className='w-full border-2 border-black flex flex-col gap-12 px-32 py-14'>
            <input {...register('title')} className='w-[400px] h-14 bg-blue-200 outline-none text-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Title'/>
            <input {...register('description')} className='w-[400px] h-14 bg-blue-200 outline-none text-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Description'/>
            <input {...register('price')} className='w-[400px] h-14 bg-blue-200 outline-none text-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Price'/>
            <input {...register('imageFile')} className=' w-[500px] h-[50px] border-2 border-black outline-none text-black text-lg font-medium rounded-lg' type="file" placeholder='Course Image' accept='image/*'/>
            <div className='border-2 border-black my-10 min-h-[150px] p-4'>
                <div className='border-2 border-black p-4 m-2'>
                    <input {...register('lessonTitle')} className='p-2' type='text' placeholder='Lesson Title' />
                    <input {...register('videoFile')} className='ml-4' type='file' placeholder='Lesson Video' />
                    <input {...register('duration')} className='p-2' type='text' placeholder='Lesson Duration' />
                </div>
            </div>
            <button type='submit' className='border-2 border-black w-20'>Save</button>
        </div>
    </form>
  )
}

export default AddCourse