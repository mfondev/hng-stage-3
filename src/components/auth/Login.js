import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.email);

      onLogin();
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error.message);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-section">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className={`${error ? "submit-error-msg" : "hide-error"}`}>
            {error}
          </div>
        )}
        <div className="login-form">
          <div className="input-box">
            <label>Email</label>
            <Input
              variant={"filled"}
              placeholder="user@example.com"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              outline={"none"}
              autoFocus
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <InputGroup>
              <Input
                variant={"filled"}
                placeholder="1Password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightAddon onClick={togglePassword} cursor={"pointer"}>
                <button onClick={togglePassword}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </InputRightAddon>
            </InputGroup>
          </div>

          <button className="submit-btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
