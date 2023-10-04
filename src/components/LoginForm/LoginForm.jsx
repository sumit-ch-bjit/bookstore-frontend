import { useState } from "react";
import "./LoginForm.styles.scss";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-form login-form-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className="submit-btn">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
