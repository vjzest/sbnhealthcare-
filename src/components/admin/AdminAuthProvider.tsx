'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchMe, logout as logoutAction } from '@/store/slices/authSlice';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch<AppDispatch>();
    const { admin, loading, token } = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (token && !admin) {
            dispatch(fetchMe());
        } else if (!token && pathname.startsWith('/admin') && pathname !== '/admin') {
            router.push('/admin');
        }
    }, [token, admin, pathname, router, dispatch]);

    const logout = () => {
        dispatch(logoutAction());
        router.push('/admin');
    };

    return <>{children}</>;
}

export const useAdminAuth = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { admin, loading } = useSelector((state: RootState) => state.auth);
    const logout = () => dispatch(logoutAction());
    return { admin, loading, logout };
};
