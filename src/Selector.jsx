import React from 'react';
function Selector() {
    return (
    <div className='bg-white p-4 border sticky bottom-0 w-full z-10'>

    <div className='flex items-center justify-between py-3'>
        <div>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4401 10.7893C21.3838 10.9263 21.2883 11.0436 21.1655 11.1263C21.0427 11.2091 20.8982 11.2536 20.7501 11.2543H18.5001V18.7543C18.5001 19.3511 18.2631 19.9234 17.8411 20.3453C17.4191 20.7673 16.8468 21.0043 16.2501 21.0043H13.2501C13.0512 21.0043 12.8604 20.9253 12.7198 20.7847C12.5791 20.644 12.5001 20.4533 12.5001 20.2543V15.7543C12.5001 15.5554 12.4211 15.3647 12.2804 15.224C12.1398 15.0834 11.949 15.0043 11.7501 15.0043H10.2501C10.0512 15.0043 9.86043 15.0834 9.71978 15.224C9.57912 15.3647 9.5001 15.5554 9.5001 15.7543V20.2543C9.5001 20.4533 9.42109 20.644 9.28043 20.7847C9.13978 20.9253 8.94902 21.0043 8.7501 21.0043H5.75011C5.15337 21.0043 4.58107 20.7673 4.15911 20.3453C3.73716 19.9234 3.5001 19.3511 3.5001 18.7543V11.2543H1.2501C1.10204 11.2536 0.957498 11.2091 0.834708 11.1263C0.711918 11.0436 0.61637 10.9263 0.560105 10.7893C0.50267 10.6528 0.486978 10.5022 0.515009 10.3567C0.543039 10.2112 0.613536 10.0773 0.717605 9.97185L10.4676 0.221849C10.5373 0.151552 10.6203 0.0957567 10.7117 0.0576802C10.8031 0.0196037 10.9011 0 11.0001 0C11.0991 0 11.1971 0.0196037 11.2885 0.0576802C11.3799 0.0957567 11.4629 0.151552 11.5326 0.221849L21.2826 9.97185C21.3867 10.0773 21.4572 10.2112 21.4852 10.3567C21.5132 10.5022 21.4975 10.6528 21.4401 10.7893Z" fill="#C5C5C5"/>
</svg>

        </div>
        <div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z" fill="#C5C5C5"/>
</svg>


        </div>
        <div className='border flex items-center  bg-black rounded-full p-2 bottom-[50%] left-[38vw]  absolute w-fit h-fit'>

        <div className='bg-orange-300 p-4   rounded-full border-6  border-white relative '>
        <img src="cart.png" className='h-[25px] w-[25px]' ></img>

        {/* <div class="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500 border-white rounded-full -top-0.25 -end-0.25 dark:border-gray-900"></div> */}

        </div>
        </div>
        <div className='bg-orange-200'>
        <img src="cart.png" className='h-[24px] w-[24px]' hidden={true}></img>


        </div>
        <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.835 4.55252C19.7694 3.49089 18.3266 2.89481 16.8225 2.89481C15.3183 2.89481 13.8755 3.49089 12.81 4.55252L12 5.36252L11.19 4.55252C10.1244 3.49089 8.68158 2.89481 7.17745 2.89481C5.67332 2.89481 4.23049 3.49089 3.16495 4.55252C2.10287 5.61933 1.50659 7.0634 1.50659 8.56877C1.50659 10.0741 2.10287 11.5182 3.16495 12.585L11.4675 20.8875C11.5372 20.9578 11.6201 21.0136 11.7115 21.0517C11.8029 21.0898 11.9009 21.1094 12 21.1094C12.099 21.1094 12.197 21.0898 12.2884 21.0517C12.3798 21.0136 12.4627 20.9578 12.5325 20.8875L20.835 12.585C21.897 11.5182 22.4933 10.0741 22.4933 8.56877C22.4933 7.0634 21.897 5.61933 20.835 4.55252Z" fill="#C5C5C5"/>
</svg>

        </div>
        <div>
        <img src="prof.png" className='h-[24px] w-[24px]'></img>

        </div>
    </div>
    </div>

);
}

export default Selector;