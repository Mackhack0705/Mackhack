import { useRef, useState } from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios';

const AddCourse = () => {
    const {register, handleSubmit} = useForm();
    // const [lessons, setLessons] = useState([]);
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

    const addCourse = (data) => {
        console.log(data);
        try {
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
            {/* <input {...register('title')} className='w-[400px] h-14 bg-blue-200 outline-none text-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Title'/>
            <input {...register('description')} className='w-[400px] h-14 bg-blue-200 outline-none text-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Description'/>
            <input {...register('price')} className='w-[400px] h-14 bg-blue-200 outline-none text-black text-lg font-medium p-4 rounded-lg' type="text" placeholder='Course Price'/> */}
            <input {...register('file')} className=' w-[500px] h-[50px] border-2 border-black outline-none text-black text-lg font-medium rounded-lg' type="file" placeholder='Course Image'/>
            {/* <div ref={lessonContainer} className='border-2 border-black my-10 min-h-[150px] p-4'>
                <button onClick={addLessonRow} className='border-2 border-black p-2'>Add Lessons</button>
                {
                    lessons.map((lesson) => {
                        return lesson;
                    })
                }
            </div> */}
            <button type='submit' className='border-2 border-black w-20'>Save</button>
        </div>
    </form>
  )
}

export default AddCourse