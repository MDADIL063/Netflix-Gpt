import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-3">
          <img className="w-8 h-8 mt-2 " alt="User Icon" src={USER_ICON} />
          <button className="ml-1 font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
          <h3
            className="mt-3
          ml-4 text-blue-300 font-bold"
          >
            {user.displayName}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Header;
