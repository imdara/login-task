import "./App.css";
import { useState } from "react";
import leftBgImg from "./assets/images/leftBg.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function App() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordVisibility2, setPasswordVisibility2] = useState(false);
  const [formData, setFormData] = useState({});

  const passwordValidator = (pwd) => {
    const lengthCheck = pwd.length >= 8;
    const uppercaseCheck = pwd
      .split("")
      .map((item) => item.toUpperCase() === item);
    const lowercaseCheck = pwd
      .split("")
      .map((item) => item.toLowerCase() === item);
    const allChecks = {
      lengthCheck,
      uppercaseCheck: uppercaseCheck.some((item) => item === true),
      lowercaseCheck: lowercaseCheck.some((item) => item === true),
    };
    return allChecks;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { lengthCheck, uppercaseCheck, lowercaseCheck } = passwordValidator(
      formData.password
    );
    !lengthCheck && console.log("password must be atleast 8 characters long");
    !uppercaseCheck &&
      console.log("password must atleast have 1 upper case characters");
    !lowercaseCheck &&
      console.log("password must atleast have 1 lower case characters");
    const passwordCheck = formData.password === formData.confirmPassword;
    const phoneCheck = formData.mobile?.length === 12;
    !phoneCheck && console.log("enter a valid phone number");
    !passwordCheck && console.log("passwords dont match");
  };
  return (
    <div className="App">
      <div className="sideBlock">
        <img className="leftBgImg" src={leftBgImg} alt="img not found" />
      </div>
      <div className="main">
        <h2 className="heading">Become an instructor</h2>
        <p className="subHeading">
          Already have an account? <span className="orangeText">Login</span>{" "}
        </p>
        <form className="loginForm" onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <label htmlFor="mobile">Mobile No.</label>
          <PhoneInput
            // inputStyle={{
            //   border: "none",
            //   padding: "0.25rem 0.5rem",
            //   borderBottom: "2px solid rgb(231, 146, 35)",
            // }}
            country={"in"}
            onChange={(_value) => setFormData({ ...formData, mobile: _value })}
          />
          <label htmlFor="password">Password</label>
          <input
            type={passwordVisibility ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          {passwordVisibility ? (
            <svg
              onClick={() => setPasswordVisibility(!passwordVisibility)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setPasswordVisibility(!passwordVisibility)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={passwordVisibility2 ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Reenter your password"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
          {passwordVisibility2 ? (
            <svg
              onClick={() => setPasswordVisibility2(!passwordVisibility2)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setPasswordVisibility2(!passwordVisibility2)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
          <label htmlFor="socialProfiles">Social Profiles</label>
          <input
            type="text"
            name="socialProfiles"
            id="socialProfiles"
            placeholder="Enter the link to your social profile"
            onChange={(e) =>
              setFormData({ ...formData, social: e.target.value })
            }
            required
          />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default App;
