import { useLoaderData } from '@remix-run/react';
import { loginUser } from 'app/lib/authentication.apis';

export const loader = async () => {
  const res = await loginUser();

  return res.data;
};

const Login = () => {
  const { adminDetails, accessToken } = useLoaderData<{
    accessToken: string;
    adminDetails: {
      _id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  }>();

  window.localStorage.setItem('token', accessToken);
  return (
    <div>
      <h1>Welcome, {adminDetails.firstName}</h1>
    </div>
  );
};

export default Login;
