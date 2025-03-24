import React, { useState } from 'react'
import LoadingButton from './LoadingButton.js'
import { authClient } from 'auth-client';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const [pending, setPending] = useState<boolean>(false);
    const router = useNavigate();

    const handleSignOut = async () => {
        try {
            setPending(true);
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router('/sign-in');
                        router(0)
                    },
                },
            });
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            setPending(false);
        }
    };
  return (
    <LoadingButton pending={pending} onClick={handleSignOut}>
        Sign out
    </LoadingButton>
  )
}

export default SignOut