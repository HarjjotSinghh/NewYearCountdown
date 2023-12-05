import React from 'react'

export default function MainCard({ countdown }) {
    return (
        <div className='xl:p-32 py-32 px-16 sm:scale-100 scale-[65%] bg-var(--background-alpha) rounded-[3rem] backdrop-blur-2xl shadow-[20px_20px_80px_var(--background)]'>
            <h1 className="xl:text-4xl text-2xl m-0 font-[300] text-center uppercase">
                Time left until{'\t\t'}
                <span className='text-[var(--accent)] font-[600]'>
                    New Year
                </span>
            </h1>
            <div className="xl:text-[144px] text-[72px] m-0 font-[900] [text-shadow:0px_0px_80px_var(--foreground-alpha)] flex-row flex md:gap-12 gap-6 justify-center items-center">
                <div className='flex justify-center items-center flex-col'>
                    <span>
                        {countdown.days}
                    </span>
                    <span className='md:text-3xl text-xl uppercase font-[200] tracking-wide md:-mt-4 -mt-3 opacity-90 '>
                        days
                    </span>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span>
                        {countdown.hours}
                    </span>
                    <span className='md:text-3xl text-xl uppercase font-[200] tracking-wide md:-mt-4 -mt-3 opacity-90 '>
                        Hours
                    </span>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span>
                        {countdown.minutes}
                    </span>
                    <span className='md:text-3xl text-xl uppercase font-[200] tracking-wide md:-mt-4 -mt-3 opacity-90 '>
                        Minutes
                    </span>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span>
                        {countdown.seconds}
                    </span>
                    <span className='md:text-3xl text-xl uppercase font-[200] tracking-wide md:-mt-4 -mt-3 opacity-90 '>
                        Seconds
                    </span>
                </div>
            </div>
        </div>
    )
}
