import { useAuth } from '@memberstack/react';

const MemberStackAuthStatus = () => {
  const { userId, status, isLoggedIn } = useAuth();
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p style={{ fontWeight: 'bold' }}>Is logged in?</p>
        <p>{isLoggedIn ? 'yes' : 'no'}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p style={{ fontWeight: 'bold' }}>UserId:</p>
        <p>{userId}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p style={{ fontWeight: 'bold' }}>Status:</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default MemberStackAuthStatus;
