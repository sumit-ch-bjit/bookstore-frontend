import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./SignUp.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // const password = watch("password", "");

  const onSubmit = (data) => {
    // Handle signup logic here
    console.log("Signup data:", data);
  };

  return (
    <div className="signup-form signup-form-container">
      <h2>Sign Up to the Bookstore</h2>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First Name is required" }}
            render={({ field }) => <input {...field} />}
          />
          <p className="error-message">{errors.firstName?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last Name is required" }}
            render={({ field }) => <input {...field} />}
          />
          <p className="error-message">{errors.lastName?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
            render={({ field }) => <input {...field} />}
          />
          <p className="error-message">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="pass-wrapper">
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required", minLength: 6 }}
              render={({ field }) => (
                <input type={showPassword ? "text" : "password"} {...field} />
              )}
            />
            <i onClick={handleTogglePassword}>{eye}</i>
          </div>
          <p className="error-message">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className="pass-wrapper">
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords must match",
              }}
              render={({ field }) => (
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...field}
                />
              )}
            />
            <i onClick={handleToggleConfirmPassword}>{eye}</i>
          </div>
          <p className="error-message">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
