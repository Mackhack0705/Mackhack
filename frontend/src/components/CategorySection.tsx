import { pauseImg, playImg, replayImg } from '@/lib/utils.js';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const CategorySection = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoDivRef = useRef<(HTMLSpanElement | null)[]>([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    if(loadedData.length > 3) {
      if(!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]) {
      // animate the progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {

        }, 

        onComplete: () => {

        }
      })
    }
  }, [videoId, startPlay])

  const categories = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: '/videos/category-first.mp4',
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: '/videos/category-second.mp4',
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: '/videos/category-third.mp4',
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: '/videos/category-four.mp4',
      videoDuration: 3.63,
    },
  ];

  interface VideoState {
    isEnd: boolean;
    startPlay: boolean;
    videoId: number;
    isLastVideo: boolean;
    isPlaying: boolean;
  }

  type HandleProcessType = 'video-end' | 'video-last' | 'video-reset' | 'play';

  const handleProcess = (type: HandleProcessType, i: number): void => {
    switch (type) {
      case 'video-end':
        setVideo((prev: VideoState) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case 'video-last':
        setVideo((prev: VideoState) => ({ ...prev, isLastVideo: true }));
        break;
      case 'video-reset':
        setVideo((prev: VideoState) => ({ ...prev, isLastVideo: false, videoId: 0 }));
        break;
      case 'play':
        setVideo((prev: VideoState) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return;
    }
  };


  return (
    <section className='h-screen text-center'>
      <div className='text-3xl font-bold m-5 md:text-5xl bg-gradient-to-t from-gray-500 to-white bg-clip-text text-transparent'>
        <h2>Categories</h2>
      </div>
      <div className='h-screen flex items-center border border-red-500'>
        {
          categories.map((list, i) => (
            <div key={list.id} id='slider' className='sm:pr-20 pr-10 border border-blue-500'>
              <div className='video-carousel_container border border-yellow-500'>
                <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                  <video id='video' playsInline={true} preload='auto' muted ref={(el) => (videoRef.current[i] = el)}
                    onPlay={
                      () => {
                        setVideo((prevVideo) => ({
                          ...prevVideo, isPlaying: true
                        }))
                      }
                    }>
                    <source src={list.video} type='video/mp4' />
                  </video>
                </div>

                <div className='absolute top-12 left-[5%] z-10'>
                  {list.textLists.map((text) => (
                    <p key={text} className='md:text-2xl text-xl font-medium'>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className='relative flex-center mt-10'>
        <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
          {videoRef.current.map((_, i) => (
            <span key={i} ref={(el) => (videoDivRef.current[i] = el)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
              <span className='absolute h-full w-full rounded-full' ref={(el) => (videoSpanRef.current[i] = el)} />
            </span>
          ))}
        </div>

        <button className='control-btn'>
          <img src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'} onClick={ isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') :
            () => handleProcess('pause')
          } />
        </button>
      </div>
    </section>
  )
}

export default CategorySection
