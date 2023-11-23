import { useAuth } from '@memberstack/react';

const SignOut = () => {
  const { signOut } = useAuth();
  return <button onClick={() => signOut()}>Sign Out</button>;
};

export default SignOut;
