import React from 'react'
import { useUser } from '../../api/userApi/userQueries';

const ProfileCard = () => {
    const { data: user, isPending, isError, error } = useUser();
    if (isPending) {
        return <span className='block text-2xl text-center text-white'>...Loading</span>
    }
    if (isError) {
        return <span className='block text-center text-red-500'>{error.message}</span>
    }
    return (
        <section className='flex flex-col items-center justify-center gap-2'>
            {user.avatar && (
                <img src={user.avatar} alt='user avatar' className='mt-4 rounded-full' />
            )}
            <h3 className='text-2xl text-black text-balance dark:text-white'>{user.username}</h3>
            <span className='text-sm font-bold text-slate-500 dark:text-slate-200'>Email: {user.email}</span>
            <p className='text-black text-pretty dark:text-white'>{user.bio}</p>
        </section>
    )
}

export default ProfileCard