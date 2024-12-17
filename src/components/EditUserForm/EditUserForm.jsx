import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import toast from 'react-hot-toast';

const EditUserForm = () => {
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
        // resolver: yupResolver(signInSchema),
        mode: "onTouched"
    })
    const submitHandler = (data) => {
        // const {email, username, bio} = data;
        // try {
        //     const response = await 
        // } catch (error) {

        // }
    }
    return (
        <form className='flex flex-col justify-center gap-10 p-2 sm:p-4' onSubmit={handleSubmit(submitHandler)}>
            <label htmlFor="email">
                <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.email && errors.email ? 'border-red-500' : touchedFields.email && !errors.email ? 'border-green-500' : 'border-none'
                    }`} type="email" placeholder='email' {...register("email")} autoComplete='email' />
                {errors.email ? (
                    <p className="mt-2 text-xs font-medium text-red-300">
                        {errors.email.message}
                    </p>
                ) : (
                    touchedFields.email && !errors.email && (
                        <p className="mt-2 text-xs font-medium text-green-500">Email looks good!</p>
                    )
                )}
            </label>
            <label htmlFor="username">
                <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.username && errors.username ? 'border-red-500' : touchedFields.username && !errors.username ? 'border-green-500' : 'border-none'}`} type="text" placeholder='username'{...register("username")} autoComplete='username' />
                {errors.username ? (
                    <p className="mt-2 text-xs font-medium text-red-300">
                        {errors.username.message}
                    </p>
                ) : (
                    touchedFields.username && !errors.username && (
                        <p className="mt-2 text-xs font-medium text-green-500">Username looks good!</p>
                    )
                )}
            </label>
            <label htmlFor="bio">
                <textarea className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.bio && errors.bio ? 'border-red-500' : touchedFields.bio && !errors.bio ? 'border-green-500' : 'border-none'}`} placeholder='bio' maxLength={200} rows={4} cols={50} {...register("bio")}></textarea>
                {errors.bio ? (
                    <p className="mt-2 text-xs font-medium text-red-300">
                        {errors.bio.message}
                    </p>
                ) : (
                    touchedFields.bio && !errors.bio && (
                        <p className="mt-2 text-xs font-medium text-green-500">Bio looks good!</p>
                    )
                )}
            </label>
            {/* TODO: Finish form */}
            <label htmlFor='avatar'>
                <input type="file" className='block w-full text-sm dark:text-white file:text-white file:px-4 file:rounded-full file:py-2 file:mr-4 file:border-0 file:bg-blue-400 file:font-semibold' name='avatar' accept='image/jpg, image/jpeg, image/png, image/gif, image/webp' {...register("avatar")} />
            </label>
            <button className='block w-full p-4 mx-auto text-black border-2 rounded-lg bg-neutral-200 dark:bg-slate-800 dark:text-white border-slate-300 dark:border-slate-200 sm:w-40 hover:scale-110' type='submit'>Update</button>
        </form>
    )
}

export default EditUserForm