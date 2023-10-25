import React from "react";
import payrollImage from "../../assets/payroll_image.png";
import logo from "../../assets/pakricornlogo.png";
import "./AdminLogin.css";
import { Formik } from "formik";
import { LoginSchema } from "../Validations/LoginSchema";

const AdminLogin = () => {
  const handleSubmit = () => {};
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/********* leftside image******** */}
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={payrollImage} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
            <div className="text-center ">
              <img
                src={logo}
                style={{ height: "50px", width: "300px" }}
                alt="logo"
                className="mb-2 pb-1"
              />
              <h4 className="mt-1 mb-3 pb-1">We are The Pakricorn Team</h4>
            </div>

            {/* *****Form Starts***********/}
            <Formik
              initialValues={{
                emailAddress: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { values, isSubmitting, handleChange,handleBlur, touched, errors } =
                  props;
                return (
                  <form className="border border-3 border-warning rounded p-4 mb-2">
                    <h2
                      className="text-center mb-3"
                      style={{ color: "#ff8c1a" }}
                    >
                      Login
                    </h2>

                    <div className="">
                      {/* <!-- EmailAddress input --> */}
                      <div className="form-outline mb-4 ">
                        <input
                          type="email"
                          name="emailAddress"
                          id="form3Example3"
                          value={values.emailAddress}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className=" form-control form-control-lg"
                          placeholder="Email address"
                        />
                        {errors.emailAddress && touched.emailAddress && (
                          <div className="input-feedback">
                            {errors.emailAddress}
                          </div>
                        )}
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          name="password"
                          id="form3Example4"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className=" form-control form-control-lg"
                          placeholder="Enter password"
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Remember me
                          </label>
                        </div>
                        <div>
                          <a href="#!" className="text-body">
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="d-flex flex-column align-items-center text-center text-lg-start mt-4 pt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                        >
                          Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Don't have an account?{" "}
                          <a href="#!" className="link-danger">
                            Register
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>

      {/* <!-- Right --> */}
      {/* </div> */}
    </section>
  );
};

export default AdminLogin;
