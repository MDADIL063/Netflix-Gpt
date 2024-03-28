import React, { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = CheckValidData(email?.current?.value, password?.current?.value, name?.current?.value);
    setErrorMessage(message);

    if (message) return;

    // Sign in Sing Up Logic
    if (!isSignInForm) {
      // Logic for SignUp form
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }));
            })
            .catch((error) => {
              navigate("/error");
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Logic for SignIn form
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 bg-black my-20 mx-auto left-0 right-0 text-white px-14 rounded-md bg-opacity-80"
      >
        <h1 className="text-3xl font-semibold mb-6 mt-14">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? null : (
          <input placeholder="Enter Name" ref={name} type="text" className="my-3 py-2 w-full px-4 rounded-md bg-gray-700" />
        )}
        <input placeholder="Email Address..." ref={email} type="text" className="my-3 py-2 w-full px-4 rounded-md bg-gray-700" />
        <input placeholder="Password" ref={password} type="password" className="my-3 py-2 w-full px-4 rounded-md bg-gray-700" />
        <p className="text-red-500 py-2 font-bold">{errorMessage}</p>
        <button className="my-7 py-3 bg-red-700 w-full rounded-md" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
