
const CategorySection = () => {
  return (
    <div className='w-full h-[730px] border-black border-2 text-center'>
      <h1 className='text-5xl my-10 font-bold'>Category</h1>
      <div className="flex justify-center my-8">
        <div className='w-full border-2 border-black h-[340px] rounded-2xl'>
          <img className='w-full h-full rounded-2xl aspect-auto object-contain' src="/images/img2.jpg" alt="" />
        </div>
        <div className='w-full border-2 border-black h-[340px] rounded-2xl'>
          <img className='w-full h-full rounded-2xl aspect-auto object-contain' src="/images/img2.jpg" alt="" />
        </div>
        <div className='w-full border-2 border-black h-[340px] rounded-2xl'>
          <img className='w-full h-full rounded-2xl aspect-auto object-contain' src="/images/img2.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CategorySection
