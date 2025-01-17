import React from 'react'

const BentoCard = ({ src, title, description }) => {
    return (
        <div className='relative size-full '>
            <video
                src={src}
                loop
                autoPlay
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col p-5 text-blue-50'>
                <h1 className='bento-title special-font'>{title}</h1>
                {
                    description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                    )
                }
            </div>
        </div>
    )
}

export default BentoCard