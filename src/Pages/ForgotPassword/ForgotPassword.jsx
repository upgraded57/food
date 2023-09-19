import "./forgotpassword.css";
import "../Auth/auth.css";
import SectionHead from "./../../Components/SectionHead/SectionHead";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import successIcon from "../../assets/images/successicon.svg";

export default function ForgotPassword() {
  const [mail, setMail] = useState("");
  const [mailIsValid, setMailIsValid] = useState(false);
  const validateMail = (e) => {
    if (
      e.target.value.includes("@gmail.com") ||
      e.target.value.includes("@yahoo.com") ||
      e.target.value.includes("@hotmail.com")
    ) {
      setMailIsValid(true);
      setMail(e.target.value);
    } else {
      setMailIsValid(false);
    }
  };

  const sendMail = (e) => {
    e.preventDefault();
    document.querySelector(".mailsent").classList.add("active");
  };

  const resendMail = () => {
    toast.success("Mail resent successfully!");
  };
  return (
    <>
      <div className="forgotpassword">
        <SectionHead
          title="Forgot Password"
          subtitle="Enter your registered email below"
        />

        <div className="forgotpassword__form">
          <div className="auth__modal-form-screen">
            <form onSubmit={sendMail}>
              <span>
                <label htmlFor="email">
                  <p className="text-body text-bold">Email address</p>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Eg namaemail@emailkamu.com"
                    onChange={validateMail}
                  />
                </label>
              </span>
              <div className="forgot-password-btn-alt">
                <p className="text-body">Remembered the password?</p>
                <Link to="/auth" className="text-body">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="forgotpassword__submit-btn">
          <button
            type="button"
            className={!mailIsValid ? "btn-pry-bg disabled" : "btn-pry-bg"}
            onClick={sendMail}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="mailsent">
        <div className="mailsent__content">
          <div className="mailsent__content-img">
            <img src={successIcon} alt="" />
          </div>
          <div className="mailsent__content-text">
            <h1 className="h-300">Success!</h1>
            <p className="text-body">
              Please check your email for link to create a new password
            </p>
          </div>
          <div className="forgot-password-btn-alt">
            <p className="text-body">Didn't get the mail?</p>
            <p
              className="text-body text-bold"
              style={{ color: "var(--pry-clr)", cursor: "pointer" }}
              onClick={resendMail}
            >
              Resend Mail
            </p>
          </div>
        </div>
        <div className="mailsent__btn">
          <button
            type="button"
            className="btn-pry-bg"
            onClick={() => {
              if (
                document.querySelector(".mailsent").classList.contains("active")
              ) {
                document.querySelector(".mailsent").classList.remove("active");
              }
            }}
          >
            Back to mail
          </button>
        </div>
      </div>
    </>
  );
}
