import { useUserInfoQuery } from "../api/queries";

function Account() {
  const userInfoQuery = useUserInfoQuery();
  const handleSignOutClick = () => {
    const signOut = userInfoQuery.data?.signOut;
    if (signOut) {
      signOut();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 text-black text-xl">
        {userInfoQuery.data?.cognitoId}
      </div>
      <button
        className="font-bold text-red-600 m-4 rounded bg-red-50 px-[1em] py-[0.5em] border-red-600 border-2 hover:bg-red-100"
        onClick={() => {
          handleSignOutClick;
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Account;
