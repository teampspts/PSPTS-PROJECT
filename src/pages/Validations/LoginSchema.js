import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .required("Email Address is required")
      .email("Invalid Email Address")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid email address"
      )
      .test(
        "no-leading-space",
        "Email  address cannot start with a space",
        (values) => {
          // Custom validation logic: Check if the value starts with a space
          return values === undefined || !/^ /.test(values);
        }
      )
      .max(100, "Maximum 100 characters only"),

      password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password cannot exceed 30 characters")
      .required("Password is required"),
  });