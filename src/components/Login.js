import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkValidName } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrMessage(null);
  };

  const handleButtonClick = () => {
    let message = "";
    if (!isSignInForm) {
      message = checkValidName(name.current.value);
      if (message != null) {
        setErrMessage(message);
        return;
      }
    }
    message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 bg-slate-900 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 bg-slate-900 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-slate-900 w-full"
        />
        <p className="text-red-600 text-lg py-2">{errMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className="text-blue-500 font-bold hover:cursor-pointer hover:underline hover:text-blue-800"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " Sign up now" : " Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
