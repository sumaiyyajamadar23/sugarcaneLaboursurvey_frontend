
// import React, { Component } from "react";
// import { Row, Col, Button, Alert, Container, Label, Input, FormGroup } from "reactstrap";
// import { useForm } from "react-hook-form";

// // Redux
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// // import images
// import logodark from "../../assets/images/logo-dark.png";

// // Actions
// import { registerUser, registerUserFailed, apiError } from '../../store/actions';

// class Register extends Component {
//     componentDidMount() {
//         this.props.registerUserFailed("");
//         this.props.apiError("");
//         document.body.classList.add("auth-body-bg");
//     }

//     componentWillUnmount() {
//         document.body.classList.remove("auth-body-bg");
//     }

//     render() {
//         return (
//             <RegisterForm
//                 user={this.props.user}
//                 registrationError={this.props.registrationError}
//                 loading={this.props.loading}
//                 onRegisterUser={this.props.registerUser}
//             />
//         );
//     }
// }

// function RegisterForm({ user, registrationError, loading, onRegisterUser }) {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: 
//         {
//             email: "",
//             password: "",
//             firstName: "",
//             lastName: "",
//             gender: "",
//             bloodGroup: "",
//             mobileNo: ""
//         }
//     });

//     const onSubmit = (data) => {
//         onRegisterUser(data);
//     };

//     return (
//         <div>
//             <Container fluid className="p-0">
//                 <Row className="g-0">
                   
//                         <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
//                             <div className="w-100">
//                                 <Row className="justify-content-center">
//                                     <Col lg={9}>
//                                         <div>
//                                             <div className="text-center">
//                                                 <div>
//                                                     <Link to="#" className="logo">
//                                                         <img src={logodark} height="20" alt="logo" />
//                                                     </Link>
//                                                 </div>
//                                                 <h4 className="font-size-30 mt-4">Register account</h4>
//                                                 <p className="text-muted">Get your free UTS account now.</p>
//                                             </div>

//                                             {user && <Alert color="success">Registration Done Successfully.</Alert>}
//                                             {registrationError && <Alert color="danger">{registrationError}</Alert>}

//                                             <div className="p-2 mt-5">
//                                                 <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
//                                                 <Row>
//                                                     <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-mail-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="useremail">Email</Label>
//                                                         <Input
//                                                             type="email"
//                                                             id="useremail"
//                                                             {...register("email", { required: "Email is required", pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })}
//                                                             placeholder="Enter email"
//                                                         />
//                                                         {errors.email && <span className="text-danger">{errors.email.message}</span>}
//                                                     </FormGroup>
//                                                    </Col>
//                                                    <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-lock-2-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="userpassword">Password</Label>
//                                                         <Input
//                                                             type="password"
//                                                             id="userpassword"
//                                                             {...register("password", { required: "Password is required" })}
//                                                             placeholder="Enter password"
//                                                         />
//                                                         {errors.password && <span className="text-danger">{errors.password.message}</span>}
//                                                     </FormGroup>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-user-2-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="firstName">firstName</Label>
//                                                         <Input
//                                                             type="text"
//                                                             id="firstName"
//                                                             {...register("firstName", { required: "firstName is required" })}
//                                                             placeholder="Enter firstName"
//                                                         />
//                                                         {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
//                                                     </FormGroup>
//                                                     </Col>
//                                                     <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-user-2-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="lastName">lastName</Label>
//                                                         <Input
//                                                             type="text"
//                                                             id="lastName"
//                                                             {...register("lastName", { required: "lastName is required" })}
//                                                             placeholder="Enter lastName"
//                                                         />
//                                                         {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
//                                                     </FormGroup>
//                                                     </Col>
//                                                     </Row>
//                                                     <Row>
//                                                     <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-user-2-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="gender">gender</Label>
//                                                         <Input
//                                                             type="text"
//                                                             id="gender"
//                                                             {...register("gender", { required: "gender is required" })}
//                                                             placeholder="Enter gender"
//                                                         />
//                                                         {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
//                                                     </FormGroup>
// </Col>
// <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-user-2-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="bloodGroup">bloodGroup</Label>
//                                                         <Input
//                                                             type="text"
//                                                             id="bloodGroup"
//                                                             {...register("bloodGroup", { required: "bloodGroup is required" })}
//                                                             placeholder="Enter bloodGroup"
//                                                         />
//                                                         {errors.bloodGroup && <span className="text-danger">{errors.bloodGroup.message}</span>}
//                                                     </FormGroup>
//                                                     </Col>
//                                                     <Col>
//                                                     <FormGroup className="auth-form-group-custom mb-4">
//                                                         <i className="ri-user-2-line auti-custom-input-icon"></i>
//                                                         <Label htmlFor="mobileNo">mobileNo</Label>
//                                                         <Input
//                                                             type="text"
//                                                             id="mobileNo"
//                                                             {...register("mobileNo", { required: "mobileNo is required" })}
//                                                             placeholder="Enter mobileNo"
//                                                         />
//                                                         {errors.mobileNo && <span className="text-danger">{errors.mobileNo.message}</span>}
//                                                     </FormGroup>
//                                                     </Col>
// </Row>

//                                                     <div className="text-center">
//                                                         <Button color="primary" className="w-md waves-effect waves-light" type="submit">
//                                                             {loading ? "Loading ..." : "Register"}
//                                                         </Button>
//                                                     </div>

//                                                     <div className="mt-4 text-center">
//                                                         <p className="mb-0">By registering you agree to the UTS <Link to="#" className="text-primary">Terms of Use</Link></p>
//                                                     </div>
//                                                 </form>
//                                             </div>

//                                             <div className=" text-center">
//                                                 <p>Already have an account ? <Link to="/login" className="fw-medium text-primary"> Login</Link> </p>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </div>
                    
                    
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// const mapStatetoProps = state => {
//     const { user, registrationError, loading } = state.Account;
//     return { user, registrationError, loading };
// }

// export default connect(mapStatetoProps, { registerUser, apiError, registerUserFailed })(Register);


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import { message, Modal, Button } from "antd";  // Import Modal and Button
// import ReCAPTCHA from "react-google-recaptcha";

// import logo from '../../assets/logo5.jpg';
import logodark from "../../assets/images/logo-dark.png";


const Register = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    firstName: "",
    email: "",
    password: "",
    lastName: "",
    dob: "",
    address: "",
    district: "",
    mobNumber: ""
  });
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const isMobile = window.innerWidth <= 768;
  const [districts, setDistricts] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);

  const [regText, setRegText] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);  // For modal visibility
  const [agreedToTerms, setAgreedToTerms] = useState(false);    // Check if user agrees to terms

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await axios.get(apiUrl + "/ssakti/users/district/getAllDistricts");
        setDistricts(response.data.getAllDistrictData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDistricts();
  }, [apiUrl]);

  const validate = () => {
    const newErrors = {};

    if (!inputs.firstName) newErrors.firstName = "First name is required";
    if (!inputs.lastName) newErrors.lastName = "Last name is required";
    if (!inputs.password) {
      newErrors.password = "Password is required";
    } else if (inputs.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!inputs.dob) newErrors.dob = "Date of birth is required";
    if (!inputs.address) newErrors.address = "Address is required";
    if (!inputs.district) newErrors.district = "District is required";
    // if (!captchaToken) newErrors.captcha = "Please complete the CAPTCHA";
    if (!inputs.email && !inputs.mobNumber) {
      newErrors.email = "Either Email or Mobile Number is required";
      newErrors.mobNumber = "Either Email or Mobile Number is required";
    } else {
      if (inputs.email && !/\S+@\S+\.\S+/.test(inputs.email)) {
        newErrors.email = "Email is invalid";
      }
      if (inputs.mobNumber && !/^\d{10}$/.test(inputs.mobNumber)) {
        newErrors.mobNumber = "Mobile number is invalid";
      }
    }
    if (!agreedToTerms) newErrors.terms = "You must agree to the terms and conditions"; // Check if terms are agreed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // Clear errors as user types
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setRegText(true);
      await axios.post(apiUrl + "/ssakti/users/user/userRegister", {
        userFirstName: inputs.firstName,
        userLastName: inputs.lastName,
        userEmail: inputs.email,
        userGender: "FEMALE",
        userDateOfBirth: inputs.dob,
        userAddress: inputs.address,
        userProfileImagePath: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png",
        userCoverProfileImagePath: "https://images.unsplash.com/photo-1528459584353-5297db1a9c01?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userPassword: inputs.password,
        districtId: inputs.district,
        userMobileNumber: inputs.mobNumber,
        userRole: "ROLE_USER",
        isTermsAndConditionsAccepted: agreedToTerms
      });
      setSuccess(true);
      messageApi.open({
        type: 'success',
        content: <RegistrationSuccess />,
        className: 'custom-class',
        style: isMobile ? successMobile : successWeb,
      });
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (err) {
      setErr(err.response.data.message);
      setRegText(false);
    }
    setRegText(false);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);  // Update captcha token state
  };

  const handleTermsClick = () => {
    setIsModalVisible(true);  // Show the modal when clicking on Terms link
  };

  const handleAgree = () => {
    setAgreedToTerms(true);   // Set the agreement state
    setIsModalVisible(false); // Hide the modal
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close the modal
  };

  let successMobile = {
    marginTop: '10vh',
    height: "200px",
  };

  let successWeb = {
    marginTop: '10vh',
    marginRight: '50vw',
    height: "200px",
  };

  const RegistrationSuccess = () => {
    return (
      <div className="success">
        <h4>Registration Successful</h4>
        <p>You will be redirected to the login page in 5 seconds.</p>
      </div>
    );
  };

  return (
    <div className="register">
      {contextHolder}
      <div className="card">
        <div className="left">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <div className="image"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="text-center">
             <div>
                <Link to="#" className="logo">
                <img src={logodark} height="20" alt="logo" />
                </Link>
             </div>                                              
             <h4 className="font-size-30 mt-4">Register account</h4>
             <p className="text-muted">Get your free UTS account now.</p>
        </div>                            
          <form>
            <div className="input-wrapper">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
                <span className="error">{errors.firstName}</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
                <span className="error">{errors.lastName}</span>
              </div>
            </div>
            <div className="input-wrapper">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <span className="error">{errors.email}</span>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <span className="error">{errors.password}</span>
              </div>
            </div>
            <div className="input-wrapper">
              <div>
                <select
                  name="district"
                  value={inputs.district}
                  onChange={handleChange}
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district.districtId} value={district.districtId}>
                      {district.districtName}
                    </option>
                  ))}
                </select>
                <span className="error">{errors.district}</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                />
                <span className="error">{errors.address}</span>
              </div>
            </div>
            <div className="input-wrapper">
              {/* <div> */}
                {/* <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <span className="error">{errors.password}</span>
              </div> */}
              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  name="mobNumber"
                  onChange={handleChange}
                />
                <span className="error">{errors.mobNumber}</span>
              </div>
            </div>
            {/* <div className="captcha-container">
              <ReCAPTCHA
                sitekey="6Lc0qiMqAAAAAMKMV2oMuDzB2j9rKx3uD4Kg5rxy"
                onChange={handleCaptchaChange}
              />
              <span className="error">{errors.captcha}</span>
            </div> */}
            <div className="terms-wrapper">
              <input type="checkbox" checked={agreedToTerms} onChange={() => setAgreedToTerms(!agreedToTerms)} />
              <span>
                I agree to the{" "}
                <a onClick={handleTermsClick}>Terms and Conditions</a>
              </span>
              <span className="error">{errors.terms}</span>
            </div>
            <button onClick={handleClick} disabled={regText}>Register</button>
          </form>
          <p>Already have an account? <Link className="link-signup" to="/login">Login </Link></p>
        </div>
      </div>

      {/* Modal for Terms and Conditions */}
      <Modal
        title="Terms and Conditions"
        visible={isModalVisible}
        onOk={handleAgree}
        onCancel={handleCancel}
        footer={[
          <Button key="agree" type="primary" onClick={handleAgree}>
            Agree
          </Button>,
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div class="terms-container">
          <h2>Terms and Conditions</h2>

          <section class="terms-section">
            <h3>1. Introduction</h3>
            <p>Welcome to our platform. By using our services, you agree to these terms and conditions. Please read them carefully.</p>
          </section>

          <section class="terms-section">
            <h3>2. Eligibility</h3>
            <p>You must be at least 18 years old to use our services. By registering, you confirm that you meet this requirement.</p>
          </section>

          <section class="terms-section">
            <h3>3. Privacy</h3>
            <p>We respect your privacy. Our <a href="#">Privacy Policy</a> explains how we collect, use, and share your personal information.</p>
          </section>

          <section class="terms-section">
            <h3>4. User Conduct</h3>
            <p>Users are expected to use the platform responsibly and ethically. Harassment, spamming, and other harmful activities are prohibited.</p>
          </section>

          <section class="terms-section">
            <h3>5. Termination</h3>
            <p>We reserve the right to terminate your account if you violate any of these terms.</p>
          </section>

          <section class="terms-section">
            <h3>6. Limitation of Liability</h3>
            <p>Our platform is provided on an "as is" basis. We are not responsible for any damages or losses that result from your use of the service.</p>
          </section>

          <section class="terms-section">
            <h3>7. Changes to the Terms</h3>
            <p>We may modify these terms at any time. It is your responsibility to review the terms periodically for any updates.</p>
          </section>

          <section class="terms-section">
            <h3>8. Contact Us</h3>
            <p>If you have any questions or concerns about these terms, please <a href="#">contact us</a>.</p>
          </section>

          {/* <div class="terms-acceptance">
            <input type="checkbox" id="agree" />
            <label for="agree">I have read and agree to the Terms and Conditions.</label>
          </div> */}
        </div>

      </Modal>
    </div>
  );
};

export default Register;
