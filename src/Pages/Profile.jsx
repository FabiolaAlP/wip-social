import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import EditUserForm from '../components/EditUserForm/EditUserForm';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const Profile = () => {

    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto my-40 border-2 rounded-lg shadow-lg bg-white/50 dark:bg-slate-700/30 backdrop-blur-lg border-slate-300 dark:border-slate-200'>
            <ProfileCard />
            <EditUserForm />
        </div>
    )
}

export default Profile