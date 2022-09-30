import { ComponentType, FunctionComponent } from 'react';

export const withAuthentication = (
  Component: ComponentType,
)=> {
  const Wrapper: FunctionComponent = (props) => {

    // fetch data for `user` and `status`
    const user = true
    const status : string = 'authenticated'

    return status === 'authenticated' && user ? (
      <Component {...props} />
    ) : status === 'loading' ? (
      <div className="fixed left-0 top-0 w-screen h-screen bg-white text-text-body flex justify-center items-center">
        loading . . .
      </div>
    ) : null;
  };

  return Wrapper;
};
