import React from 'react';
function Location() {
    return ( 
        <div className='bg-white flex items-center justify-between px-4 py-2'>
            <div className='flex items-center '>

            <div className='p-3 rounded-full bg-cyan-500'>
                <img src="pin.png" className='object-contain h-[20px] w-[20px]'></img>
            </div>
            <div className='px-3'>
                <p>MANIT Bhopal</p>
                <p>Manit,462003 </p>

            </div>
            </div>
            <div>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.308694 15.6869C-0.101551 15.2776 -0.101546 14.5952 0.300655 14.1859L6.37488 8.00396L0.308694 1.82302C-0.101551 1.40455 -0.101551 0.731307 0.308694 0.313856C0.718939 -0.104619 1.38157 -0.104619 1.79182 0.313856L8.75491 7.39928C9.0817 7.7318 9.0817 8.26896 8.75491 8.60149L1.79182 15.6869C1.38157 16.1044 0.718939 16.1044 0.308694 15.6869Z" fill="#37474F"/>
</svg>

            </div>
        </div>
     );
}

export default Location;