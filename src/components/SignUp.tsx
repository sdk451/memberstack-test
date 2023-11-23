import { useMemberstackModal } from '@memberstack/react';

function SignUp() {
  const { openModal, hideModal } = useMemberstackModal();

  const planId = process.env.TEST_FREE_PLAN_ID || '';

  return (
    <button
      onClick={() =>
        openModal({
          type: 'SIGNUP',
          planId: [planId],
        }).then(({ data }) => {
          console.log('data', data);
          hideModal();
        })
      }
    >
      Sign up
    </button>
  );
}

export default SignUp;
