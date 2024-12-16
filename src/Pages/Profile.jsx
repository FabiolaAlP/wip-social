import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useUser } from '../api/userApi/userQueries';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
    const { data: user, isPending, isError, error } = useUser();
    if (isPending) {
        return <span className='block text-2xl text-center text-white'>...Loading</span>
    }
    if (isError) {
        return <span className='block text-center text-red-500'>{error.message}</span>
    }
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto border-2 rounded-lg shadow-lg bg-white/50 dark:bg-slate-700/30 backdrop-blur-lg border-slate-300 dark:border-slate-200'>
            <section className='flex flex-col items-center justify-center gap-2'>
                {user.avatar && (
                    <img src={user.avatar} alt='user avatar' className='mt-4 rounded-full' />
                )}
                <h3 className='text-2xl text-black text-balance dark:text-white'>{user.username}</h3>
                <span className='text-sm font-bold text-slate-500 dark:text-slate-200'>Email: {user.email}</span>
            </section>

        </div>
    )
}

export default Profile