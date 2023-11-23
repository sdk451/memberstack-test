import { useMemberstackModal } from '@memberstack/react';

function LogIn() {
  const { openModal, hideModal } = useMemberstackModal();

  return (
    <button
      onClick={() =>
        openModal({
          type: 'LOGIN',
        })
          .then(({ data }) => {
            console.log('data', data);
            hideModal();
          })
          .catch((e) => console.log('error', e))
      }
    >
      Log In
    </button>
  );
}

export default LogIn;
