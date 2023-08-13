import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5 '>
        
        {/* heading */}
        <div className='flex justify-center items-center flex-col gap-5'>
            <div className='text-4xl font-semibold tracking-wider font-mono'>450 DSA Tracker</div>
            <div className='text-xl font-medium tracking-wider'>Your Getway To Crack DSA 💥</div>
        </div>



        {/* No. of Questions Solved Part */}
        <div className='text-md mt-7'>
            <div>Total Questions Solved : <span> no. </span> <span> percentage</span></div>
            <div className='w-full h-2 bg-cyan-500'></div>
        </div>

    </div>
  )
}

export default Header