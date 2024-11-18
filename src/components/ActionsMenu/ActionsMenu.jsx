import React from 'react'
import { Icon } from '@iconify/react';

const ActionsMenu = () => {
    return (
        <div className='fixed flex flex-col p-2 space-y-4 rounded-xl right-2 top-60 bg-white/30 backdrop-blur-xl dark:text-white'>
            <Icon icon="ion:create" className='w-10 h-10' /><Icon icon="ic:round-account-box" className='w-10 h-10' /><Icon icon="mdi:settings" className='w-10 h-10' />
        </div >
    )
}

export default ActionsMenu
