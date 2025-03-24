import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
    credentials: 'include',
    defaultHeaders: {
        'Content-Type': 'application/json'
    }
})

export type Session = typeof authClient.$Infer.Session;
