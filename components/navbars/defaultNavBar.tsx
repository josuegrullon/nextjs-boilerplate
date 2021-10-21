import React from 'react';
import { useRouter } from 'next/router'
import LoginModal from '@components/navbars/loginModal';

const DefaultNavBar = () => {
    const router = useRouter()
    
    React.useEffect(() => {
        console.log(router.pathname)
    }, [])

    return (<>
    <LoginModal/>
    </>)
            
}

export default DefaultNavBar