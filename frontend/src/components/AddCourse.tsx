// import { useRef, useState } from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form.js';
import { z } from 'zod';
import { Input } from './ui/input.js';
import { courseSchema } from '@/lib/zod.js';
import { zodResolver } from '@hookform/resolvers/zod';
import { Upload } from 'lucide-react';
// import { useRecoilState } from 'recoil';
// import { lessonAtom } from '../store/atoms/lessons';

const AddCourse = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    // const [lessons, setLessons] = useRecoilState(lessonAtom);
    const lessonContainer = useRef<HTMLDivElement>();
    const [rowNumber, setRowNumber] = useState(1);

    function RemoveLessonRow(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        // setLessons(lessons.filter((lesson: { id: string }) => lesson.id !== e.currentTarget.parentElement?.id));
    }

    function addLessonRow() {
        const newLesson = (
            <div key={rowNumber} id={rowNumber.toString()} className='bg-white border-[1px] border-gray-500 rounded-lg p-3 relative flex flex-wrap gap-2 my-2 pt-6 lg:gap-10 xl:w-[80%]'>
                <input {...register('lessonTitle')} className='py-1 pl-2 border border-[#333] outline-hidden placeholder-black rounded-lg lg:w-60' type='text' placeholder='Lesson Title' />
                <input {...register('videoFile')} className='border-2 border-gray-300 w-44 lg:w-60' type='file' placeholder='Lesson Video' />
                <input {...register('duration')} className='py-1 pl-2 border border-[#333] outline-hidden placeholder-black rounded-lg lg:w-60' type='text' placeholder='Lesson Duration' />
                    <svg onClick={RemoveLessonRow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 absolute right-2 top-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
            </div>
        )
        // setLessons([...lessons, newLesson]);
        setRowNumber((rowNum) => rowNum + 1);
    }

    const form = useForm<z.infer<typeof courseSchema>>({
            resolver: zodResolver(courseSchema),
            defaultValues: {
                title: "",
                description: "",
                price: "",
                imageUrl: "",
                lessonTitle: "",
                lessonDescription: "",
                lessonDuration: "",
                lessonVideoUrl: "",
                lessonImageUrl: "",
            },
    });

    const handleCourseData = async (data: z.infer<typeof courseSchema>) => {
    }

    // async function handleImageUpload(imageFile) {
    //     const formData = new FormData();
    //     formData.append('imageFile', imageFile[0]);
    //     let response;
    //     try {
    //         response = await axios.post('https://course-selling-website-q42x.onrender.com/admin/upload-image', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         console.log(response);
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     return response.data.imageFile;
    // }


    // async function handleVideoUpload(videoFile) {
    //     const formData = new FormData();
    //     formData.append('videoFile', videoFile[0]);

    //     let response;
    //     try {
    //         response = await axios.post('https://course-selling-website-q42x.onrender.com/admin/upload-video', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         console.log(response);
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     return response.data.videoFile;
    // }

    // const addCourse = async (data) => {
    //     try {
    //         const imageFile= await handleImageUpload(data.imageFile);
    //         const videoFile = await handleVideoUpload(data.videoFile);
    //         const lesson = {
    //             lessonTitle: data.lessonTitle,
    //             videoFile,
    //             duration: data.duration
    //         }
    //         data.imageFile = imageFile;
    //         data.lessons = [lesson];
    //         data.instructorId = window.localStorage.getItem('userId');
    //         delete data.lessonTitle;
    //         delete data.duration;
    //         delete data.videoFile;
    //         await axios.post('https://course-selling-website-q42x.onrender.com/admin/courses/add', data, {
    //             headers: {
    //                 'Authorization': `Bearer ${window.localStorage.getItem("token")}`
    //             }
    //         })
    //         .then((res) => {
    //             alert(res.data.msg);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         }) 
    //         navigate('/admin/dashboard');
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

  return (
    <div className='px-20 py-3'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCourseData)}>
                {['title', 'description', 'price', 'imageUrl', 'lessonTitle', 'lessonDescription', 'lessonDuration', 'lessonVideoUrl', 'lessonImageUrl'].map((field) => (
                    <FormField
                        control={form.control}
                        key={field} 
                        name={field as keyof z.infer<typeof courseSchema>}
                        render={({ field: fieldProps }) => (
                            <FormItem className='my-6'>
                                <FormLabel className={`${field === 'imageUrl' ? 'hidden' : ''}`}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </FormLabel>
                                <FormControl>
                                    <Input type={
                                        field === 'price'
                                        ? 'number'
                                        : field === 'imageUrl'
                                        ? 'file'
                                        : 'text'
                                    }
                                    className={`${field === 'imageUrl' ? 'hidden upload' : ''} w-1/3`}
                                    placeholder={`Enter your ${field}`}
                                    {...fieldProps}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
            </form>
        </Form>

        <div onClick={() => {
            document.querySelector<HTMLInputElement>('.upload')?.click();
        }} className='border border-[#333] cursor-pointer flex flex-col justify-center items-center gap-2 p-4 rounded-xl absolute top-35 right-60 w-1/3 h-60 hover:border-white hover:shadow-lg hover:shadow-white/100 hover:translate-x-2 hover:-translate-y-2 transition-all duration-300'>
            <h5>Upload Course Image</h5>
            <p>Drag and drop your files here or click to upload</p>
            <Upload
            size={100}
            />
        </div>
    </div>
  )
}

export default AddCourse