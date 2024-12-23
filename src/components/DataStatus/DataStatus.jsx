import React from 'react'

const DataStatus = ({ isPending, isError, isSuccess, error }) => {
    return (
        <section className='w-full h-auto max-w-md mx-auto my-2'>
            {isPending && <span className='block font-bold text-center text-blue-500'>Sending data...</span>}
            {isError && <span className='block font-bold text-center text-red-400'>{error.message}</span>}
            {isSuccess && <span className='block font-bold text-center text-green-500'>Profile updated successfully!</span>}
        </section>
    )
}

export default DataStatus