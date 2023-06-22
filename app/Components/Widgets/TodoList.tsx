import React from 'react'

const TodoList = () => {
    return (
        <div>
            <div className='bg-primary text-white py-1 lg:px-48 pb-12'>
                <h2 className='font-bold text-xl mt-16 mb-5 ml-9'>Current Employees</h2>
                <div className='bg-secondary space-y-1 my-4 p-6 mx-10 rounded-lg flex justify-between items-center'>
                    <div>
                        <h2 className='font-bold text-xl'>Muhammad Umer</h2>
                        <p>umer@sparkleo.io</p>
                        <p>+92 308 5904540</p>
                    </div>
                    <div>
                        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 45.8335C16.5699 45.8383 8.9677 40.7624 5.74098 32.9742C2.51425 25.1861 4.29906 16.221 10.2625 10.2625C15.5277 4.99731 23.2019 2.94101 30.3943 4.86821C37.5867 6.79541 43.2046 12.4133 45.1318 19.6057C47.059 26.7981 45.0027 34.4723 39.7375 39.7375C35.8364 43.6563 30.5295 45.8514 25 45.8335ZM8.33334 25.3583C8.43192 34.5276 15.919 41.8949 25.0886 41.8458C34.2583 41.7963 41.6657 34.349 41.6657 25.1792C41.6657 16.0094 34.2583 8.56204 25.0886 8.5125C15.919 8.46346 8.43192 15.8308 8.33334 25V25.3583ZM19.6021 33.3333L16.6667 30.3958L22.0625 25L16.6667 19.6042L19.6042 16.6667L25 22.0625L30.3958 16.6667L33.3333 19.6042L27.9375 25L33.3333 30.3958L30.3979 33.3333L25 27.9375L19.6042 33.3333H19.6021Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='bg-secondary space-y-1 my-4 p-6 mx-10 rounded-lg flex justify-between items-center'>
                    <div>
                        <h2 className='font-bold text-xl'>Ahmed Ali</h2>
                        <p>ahmed@sparkleo.io</p>
                        <p>+92 308 5904540</p>
                    </div>
                    <div>
                        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 45.8335C16.5699 45.8383 8.9677 40.7624 5.74098 32.9742C2.51425 25.1861 4.29906 16.221 10.2625 10.2625C15.5277 4.99731 23.2019 2.94101 30.3943 4.86821C37.5867 6.79541 43.2046 12.4133 45.1318 19.6057C47.059 26.7981 45.0027 34.4723 39.7375 39.7375C35.8364 43.6563 30.5295 45.8514 25 45.8335ZM8.33334 25.3583C8.43192 34.5276 15.919 41.8949 25.0886 41.8458C34.2583 41.7963 41.6657 34.349 41.6657 25.1792C41.6657 16.0094 34.2583 8.56204 25.0886 8.5125C15.919 8.46346 8.43192 15.8308 8.33334 25V25.3583ZM19.6021 33.3333L16.6667 30.3958L22.0625 25L16.6667 19.6042L19.6042 16.6667L25 22.0625L30.3958 16.6667L33.3333 19.6042L27.9375 25L33.3333 30.3958L30.3979 33.3333L25 27.9375L19.6042 33.3333H19.6021Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList