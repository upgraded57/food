import "../ForgotPassword/forgotpassword.css";
import "../Auth/auth.css";
import SectionHead from "./../../Components/SectionHead/SectionHead";
import { Link, useNavigate } from "react-router-dom";

import successIcon from "../../assets/images/successicon.svg";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [mailIsValid, setMailIsValid] = useState(false);
  const [passwords, setPasswords] = useState({ pass1: "", pass2: "" });

  const updateMail = (e) => {
    switch (e.target.id) {
      case "pass1":
        setPasswords({ ...passwords, pass1: e.target.value });
        break;
      case "pass2":
        setPasswords({ ...passwords, pass2: e.target.value });
        break;
      default:
        setPasswords(passwords);
    }
  };

  useEffect(() => {
    if (
      passwords.pass1.length > 1 &&
      passwords.pass2.length > 1 &&
      passwords.pass1 === passwords.pass2
    ) {
      setMailIsValid(true);
    } else {
      setMailIsValid(false);
    }
  }, [passwords.pass1, passwords.pass2]);

  const [passwordReset, setPasswordReset] = useState(false);

  const resetPassword = () => {
    if (passwords.pass1 === passwords.pass2) {
      setPasswordReset(true);
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <>
      <div className="forgotpassword">
        <SectionHead
          title="Reset your password"
          subtitle="Enter a new strong password to proceed"
        />

        <div className="forgotpassword__form">
          <div className="auth__modal-form-screen">
            <form>
              <span>
                <label htmlFor="pass1">
                  <p className="text-body text-bold">New Password</p>
                  <input
                    required
                    type="password"
                    id="pass1"
                    onChange={updateMail}
                    placeholder="**** *** ****"
                  />
                </label>
              </span>
              <span>
                <label htmlFor="pass2">
                  <p className="text-body text-bold">Confirm Password</p>
                  <input
                    required
                    type="password"
                    id="pass2"
                    onChange={updateMail}
                    placeholder="**** *** ****"
                  />
                </label>
              </span>
            </form>
          </div>
        </div>

        <div className="forgotpassword__submit-btn">
          <button
            type="button"
            className={!mailIsValid ? "btn-pry-bg disabled" : "btn-pry-bg"}
            onClick={resetPassword}
          >
            Submit
          </button>
        </div>
      </div>

      <div className={passwordReset ? "mailsent active" : "mailsent"}>
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
        </div>
        <div className="mailsent__btn">
          <button
            type="button"
            className="btn-pry-bg"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
