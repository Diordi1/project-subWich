import React from 'react';
function Head() {
    return (  
        <div className='flex justify-between bg-white p-4 sticky'>
            <div className='flex items-center'>
                <p className='text-yellow-500 text-2xl bg-white  font-semibold'>Sub<span className='text-green-500'>Wich</span></p>
            </div>
            <div className='bg-white flex items-center '>
                <div className='me-4'>

                <select>
                    <option>Eng</option>
                    <option>Fr</option>
                    <option>Sp</option>
                </select>
                </div>
                <div className='p-1 bg-slate-300 rounded-full '>
                    <img src="/image1.png" className='object-cover h-[20px] w-[20px]'></img>
                </div>
            </div>
        </div>
    );
}

export default Head;