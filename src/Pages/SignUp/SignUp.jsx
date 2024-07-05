import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase2";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  return (
    <div className="sign_up">
      <img src="src\assets\logo.png" alt="" className="login-logo" />
      <div className="sign_up-form">
        <h1>Sign Up</h1>
        <form>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Your name"
          />

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  navigate("/login");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setHasError(true);
                  switch (errorCode) {
                    case "auth/invalid-email":
                      setFirebaseError("Wrong Email");
                      break;
                    case "auth/user-not-found":
                      setFirebaseError("Wrong Email");
                      break;
                    case "auth/wrong-password":
                      setFirebaseError("Wrong Password");
                      break;
                    case "auth/too-many-requests":
                      setFirebaseError(
                        "Too many requests, please try aganin later"
                      );
                      break;
                    default:
                      setFirebaseError("Please check your email & password");
                      break;
                  }
                  // ..
                });
                
            }}
            type="submit"
          >
            Sign Up
          </button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Helps?</p>
          </div>
        </form>

        <div className="form-switch">
          <p>
            Already have account{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              Sign in Now{" "}
            </span>
          </p>
        </div>

        {hasError && (
          <div className="error">
            <h2> {firebaseError} </h2>
          </div>
        )}

      </div>
    </div>
  );
};

export default SignUp;
