import { MemberstackProvider } from '@memberstack/react';
import SignUp from './components/SignUp';
import MemberStackAuthStatus from './components/MemberStackAuthStatus';
import LogIn from './components/LogIn';
import SignOut from './components/SignOut';

const config = {
  publicKey: process.env.MEMBERSTACK_PUBLIC_KEY || '',
};

function App() {
  return (
    <MemberstackProvider config={config}>
      <MemberStackAuthStatus />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          marginTop: '20px',
        }}
      >
        <SignUp />
        <LogIn />
        <SignOut />
      </div>
    </MemberstackProvider>
  );
}

export default App;
