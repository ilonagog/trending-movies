import React from 'react'
import { posters } from './Posters';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function PostersSlide() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {posters.map((poster) => (
                        <img key={poster.id}
                            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            src={poster.img}
                            alt='/'
                        />
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    );
}

export default PostersSlide;