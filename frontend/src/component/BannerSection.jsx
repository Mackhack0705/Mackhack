
const BannerSection = () => {
  return (
    <div className='flex justify-around items-center h-[670px] border-white border-2'>
      <div className='border-white border-2 h-[300px] w-[300px] flex flex-col justify-center text-center'>
        <h1>Full stack Development</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa a blanditiis voluptas numquam possimus commodi iste dolorum nostrum architecto debitis laboriosam fugiat, officia pariatur quaerat aliquam. Aperiam qui asperiores obcaecati veniam at!</p>
      </div>
      <div className='border-white border-2 h-[400px] w-[400px]'>
        <img src="https://i.insider.com/61fa7f77ef63e10018101db3?width=1136&format=jpeg" alt="" />
      </div>
    </div>
  )
}

export default BannerSection
