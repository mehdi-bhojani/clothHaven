import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import { Alert } from "react-bootstrap";

const Login = () => {
  const { getUserData } = useUser();
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const initialFormData = {
    userEmail: "",
    userPassword: "",
    userFirstName: "",
    userLastName: "",
    userCity: "",
    userState: "",
    userZip: "",
    userPhone: "",
    userCountry: "",
    userAddress: "",
    agreeTerms: false,
  };
  const [signupSuccess,setSignupSuccess] = useState(false);
  const [signupFormData, setSignupFormData] = useState(initialFormData);

  const handleFormChange = (e, formDataFunction) => {
    const { name, value, type, checked } = e.target;
    formDataFunction((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (
    e,
    formData,
    url,
    successCallback,
    errorCallback
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        successCallback(data);
      } else {
        const errorData = await response.json();
        errorCallback(errorData);
      }
    } catch (error) {
      console.error(error); // Handle network or other errors
    }
  };

  // Example usage in a React component
  const handleSignupChange = (e) => {
    handleFormChange(e, setSignupFormData);
  };

  const handleSignupSubmit = (e) => {
    handleFormSubmit(
      e,
      signupFormData,
      "http://localhost:5000/users/register",
      (data) => {
        setSignupFormData(initialFormData);
        setSignupSuccess(true);
      },
      (error) => console.error("Signup error:", error)
    );
  };

  const handleLoginChange = (e) => {
    handleFormChange(e, setLoginFormData);
  };

  const handleLoginSubmit = (e) => {
    handleFormSubmit(
      e,
      loginFormData,
      "http://localhost:5000/users/login",
      (data) => {
        console.log("Login success:", data);
        getUserData(loginFormData.loginEmail);
        // Redirect to home page on successful login
        navigate("/");
      },
      (error) => console.error("Login error:", error)
    );
  };

  return (
    <div>
      {(signupSuccess) ? (
        <Alert variant="success" dismissible>
        <strong>Signup Success</strong> Login Below to proceed. Thanks
      </Alert>
      ) : ""}
      {/* Login Section */}
      <div className="login__section section--padding">
        <div className="container">
          <form action="#" onSubmit={handleLoginSubmit}>
            <div className="login__section--inner">
              <div className="row row-cols-md-2 row-cols-1">
                <div className="col">
                  <div className="account__login">
                    <div className="account__login--header mb-25">
                      <h2 className="account__login--header__title h3 mb-10">
                        Login
                      </h2>
                      <p className="account__login--header__desc">
                        Login if you are a returning customer.
                      </p>
                    </div>
                    <div className="account__login--inner">
                      <input
                        className="account__login--input"
                        placeholder="Email Address"
                        type="text"
                        name="loginEmail"
                        onChange={handleLoginChange}
                        value={loginFormData.loginEmail}
                        required
                      />
                      <input
                        className="account__login--input"
                        placeholder="Password"
                        type="password"
                        name="loginPassword"
                        onChange={handleLoginChange}
                        value={loginFormData.loginPassword}
                        required
                      />
                      <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                        {/* ... (Remember me checkbox and forgot password button) ... */}
                      </div>
                      <button
                        className="account__login--btn primary__btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="account__login--divide">
                        <span className="account__login--divide__text">OR</span>
                      </div>
                      <div className="account__social d-flex justify-content-center mb-15">
                        {/* ... (Social media login links) ... */}
                      </div>
                      <p className="account__login--signup__text">
                        Don't Have an Account?{" "}
                        <button type="submit">Sign up now</button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="account__login register">
                    <div className="account__login--header mb-25">
                      <h2 className="account__login--header__title h3 mb-10">
                        Create an Account
                      </h2>
                      <p className="account__login--header__desc">
                        Register here if you are a new customer
                      </p>
                    </div>
                    <div className="account__login--inner">
                      <input
                        className="account__login--input"
                        placeholder="Email Address"
                        type="text"
                        name="userEmail"
                        onChange={handleSignupChange}
                        value={signupFormData.userEmail}
                      />
                      <input
                        className="account__login--input"
                        placeholder="Password"
                        type="password"
                        name="userPassword"
                        onChange={handleSignupChange}
                        value={signupFormData.userPassword}
                      />
                      <input
                        className="account__login--input"
                        placeholder="First Name"
                        type="text"
                        name="userFirstName"
                        onChange={handleSignupChange}
                        value={signupFormData.userFirstName}
                      />
                      <input
                        className="account__login--input"
                        placeholder="Last Name"
                        type="text"
                        name="userLastName"
                        onChange={handleSignupChange}
                        value={signupFormData.userLastName}
                      />
                      <input
                        className="account__login--input"
                        placeholder="City"
                        type="text"
                        name="userCity"
                        onChange={handleSignupChange}
                        value={signupFormData.userCity}
                      />
                      <input
                        className="account__login--input"
                        placeholder="State"
                        type="text"
                        name="userState"
                        onChange={handleSignupChange}
                        value={signupFormData.userState}
                      />
                      <input
                        className="account__login--input"
                        placeholder="Zip"
                        type="text"
                        name="userZip"
                        onChange={handleSignupChange}
                        value={signupFormData.userZip}
                      />
                      <input
                        className="account__login--input"
                        placeholder="Phone"
                        type="text"
                        name="userPhone"
                        onChange={handleSignupChange}
                        value={signupFormData.userPhone}
                      />
                      <input
                        className="account__login--input"
                        placeholder="Country"
                        type="text"
                        name="userCountry"
                        onChange={handleSignupChange}
                        value={signupFormData.userCountry}
                      />
                      <input
                        className="account__login--input"
                        placeholder="Address"
                        type="text"
                        name="userAddress"
                        onChange={handleSignupChange}
                        value={signupFormData.userAddress}
                      />
                      <button
                        className="account__login--btn primary__btn mb-10"
                        type="submit"
                        onClick={handleSignupSubmit}
                      >
                        Submit & Register
                      </button>
                      <div className="account__login--remember position__relative">
                        <input
                          className="checkout__checkbox--input"
                          id="check2"
                          type="checkbox"
                          name="agreeTerms"
                          onChange={handleSignupChange}
                          checked={signupFormData.agreeTerms}
                        />
                        <span className="checkout__checkbox--checkmark"></span>
                        <label
                          className="checkout__checkbox--label login__remember--label"
                          htmlFor="check2"
                        >
                          I have read and agree to the terms & conditions
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/*Start shipping section  */}
      <section class="shipping__section2 shipping__style3 section--padding pt-0">
        <div class="container">
          <div class="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="assets/img/other/shipping1.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Shipping</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="assets/img/other/shipping2.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Payment</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="assets/img/other/shipping3.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Return</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="assets/img/other/shipping4.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Support</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*   <!-- End shipping section --> */}
    </div>
  );
};

export default Login;
