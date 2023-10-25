import * as Yup from "yup";

export const EmployeeSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .max(50, "Maximum 50 characters only")
    .matches(/^[A-Za-z\s]+$/, "First Name must only contain letters and spaces")

    .test(
      "No-Leading-space",
      "First Name cannot start with a space",
      (value) => {
        // Custom validation logic: Check if the value starts with a space
        return value === undefined || !/^ /.test(value);
      }
    ),
  lastName: Yup.string()
    .required("Last Name is required")
    .max(50, "Maximum 50 characters only")
    .matches(/^[A-Za-z\s]+$/, "Last Name must only contain letters and spaces")

    .test(
      "no-leading-space",
      "Last Name cannot start with a space",
      (value) => {
        // Custom validation logic: Check if the value starts with a space
        return value === undefined || !/^ /.test(value);
      }
    ),
  address: Yup.string()
    .required("Address is required")
    .max(100, "Maximum 100 characters only")
    .test("no-leading-space", "Address cannot start with a space", (value) => {
      // Custom validation logic: Check if the value starts with a space
      return value === undefined || !/^ /.test(value);
    }),
  contactNumber: Yup.string()
    .required("Contact Number is required")

    .matches(/^\d+$/, "Contact Number must contain only digits")
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Maximum 15 characters only")
    .test(
      "no-leading-space",
      "Contact Number cannot start with a space",
      (value) => {
        // Custom validation logic: Check if the value starts with a space
        return value === undefined || !/^ /.test(value);
      }
    ),
  emailAddress: Yup.string()
    .required("Email Address is required")
    .email("Invalid Email format")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email address"
    )
    .test(
      "no-leading-space",
      "Email address cannot start with a space",
      (value) => {
        // Custom validation logic: Check if the value starts with a space
        return value === undefined || !/^ /.test(value);
      }
    )
    .max(100, "Maximum 100 characters only"),

  dateOfBirth: Yup.date()
    .required("Date Of Birth is required")
    .test("age", "Employee must be 18 or older", function (value) {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return value <= cutoff;
    }),

  employmentStartDate: Yup.date()
    .required("Employment Start Date is required")
    .test(
      "todayOrFuture",
      "Employment Start Date should be a future date",
      function (value) {
        if (!value) return false;
        const selectedDate = new Date(value);
        const currentDate = new Date();
        

        return currentDate <= selectedDate;
      }
    ),
  // .min(new Date(), "Employment Start Date cannot be in the past"),

  taxIdentificationNumber: Yup.string()
    .matches(/^[0-9a-zA-Z]+$/, "Please enter a valid number")
    .required("Tax Identification Number is required")
    .max(20, "Maximum 20 characters only"),

  bankName: Yup.string()
    .required("Bank Name is required")
    .matches(/^[A-Za-z\s]+$/, "Bank Name must only contain letters and spaces")
    .max(50, "Maximum 50 characters only")
    .test(
      "No-Leading-space",
      "Bank Name cannot start with a space",
      (value) => {
        // Custom validation logic: Check if the value starts with a space
        return value === undefined || !/^ /.test(value);
      }
    ),

  bankBranch: Yup.string()
    .required("Bank Branch is required")
    .matches(
      /^[A-Za-z0-9\s./-]+$/,
      "Bank Branch must only contain letters, numbers, '.', '/', and '-'"
    )
    .max(50, "Maximum 50 characters only")
    .test(
      "No-Leading-space",
      "Bank Branch cannot start with a space",
      (value) => {
        // Custom validation logic: Check if the value starts with a space
        return value === undefined || !/^ /.test(value);
      }
    ),

  accountNumber: Yup.string()
    .matches(/^\d+$/, "Please enter a valid number")
    .max(20, "Account Number must be at most 20 characters")
    .required("Account Number is required"),

  routingNumber: Yup.string()

    .matches(/^\d+$/, "Please enter a valid number")
    .max(20, "Routing Number must be at most 20 characters")
    .required("Routing Number is required"),

  employeeOfferLetterReleaseDate: Yup.date()
    .required("Employee Offer Letter Release Date is required")
    .test(
      "pastOrToday",
      "Employee Offer Letter Release Date should be in the past or today",
      function (value) {
        const selectedDate = new Date(value);
        const currentDate = new Date();

        return selectedDate <= currentDate;
      }
    ),
  // .min(
  //   new Date(),
  //   "Employee Offer Letter Release Date  cannot be in the past"
  // ),
  employeeDesignation: Yup.string().required(
    "Employee Designation is required"
  ),
  joiningDate: Yup.date()
    .required("Joining Date is required")
    .test(
      "todayOrFuture",
      "Joining Date should be a future date",
      function (value) {
        if (!value) return false;
        const selectedDate = new Date(value);
        const currentDate = new Date();
       

        return currentDate <= selectedDate;
      }
    ),
  // .min(new Date(), "Joining Date cannot be in the past"),

  joiningCtc: Yup.string()
    .matches(/^\d+$/, "Please enter a valid number")
    .required("Joining CTC is required"),

  hikeLetterDate: Yup.date()
    .nullable()
    .test(
      "pastOrToday",
      "Employee Offer Letter Release Date should be in the past or today",
      function (value) {
        const selectedDate = new Date(value);
        const currentDate = new Date();

        return selectedDate <= currentDate;
      }
    ),

  hikeCtc: Yup.string().matches(/^\d+$/, "Please enter a valid number"),

  hikeDesignation: Yup.string().matches(
    /^[A-Za-z0-9\s./-]+$/,
    "Hike Designation must only contain letters, numbers, '.', '/', and '-'"
  ),
  hikeLetterEffectiveDate: Yup.date()
    .min(new Date(), "Hike Letter Effective Date cannot be in the past")
    .nullable(),
});
