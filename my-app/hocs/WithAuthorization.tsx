import { FunctionComponent, ReactNode } from 'react';
import Error from 'next/error';
import { usePermission } from 'hooks';

export interface WithAuthorizationProps {
  permission?: string;
  access?: string;
  fail?: ReactNode;
  children: ReactNode;
}

export const WithAuthorization: FunctionComponent<WithAuthorizationProps> = ({
  permission,
  access,
  fail = <Error statusCode={404} />,
  children,
}) => {
  const { checkAccess, checkPermission } = usePermission();

  return checkPermission(permission) && checkAccess(access) ? <>{children}</> : <>{fail}</>;
};
