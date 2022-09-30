import { useCallback } from 'react';

interface UsePermissionHookInterface {
    checkPermission: (permission?: string) => boolean;
    checkAccess: (access?: string) => boolean;
}

export const usePermission = (): UsePermissionHookInterface => {

    const checkPermission = useCallback(
        (permission?: string) => {
            // check actually user has permission of this permission on param
            let hasPermission = permission
            if (!hasPermission) return false;
            return true;
        },
        [],
    );

    const checkAccess = useCallback(
        (access?: string) => {
            // check actually user has access of this access on param
            let hasAccess = access
            if (!hasAccess) return false
            return true
        },
        [],
    );

    return {
        checkPermission,
        checkAccess,
    };
};
