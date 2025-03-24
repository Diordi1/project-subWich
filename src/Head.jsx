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
                {/* <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img src="/image1.png" className='object-cover h-[20px] w-[20px]'>
                </img>s
<span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
</button> */}
                <button className='p-1 bg-slate-300 rounded-full relative  inline-flex'>
                    <img src="/image1.png" className='object-cover h-[20px] w-[20px]'>
                    </img>
                    <span class="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-0.25 -end-0.25 dark:border-gray-900"></div>
                </button>
            </div>
        </div>
    );
}

export default Head;