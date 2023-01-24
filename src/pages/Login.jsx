import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "../utils/firebase";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formValue;
      await signInWithEmailAndPassword(firebaseAuth, email, password);

      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          navigate("/netflixui");
        }
      });

      setFormValue({
        email: "",
        password: "",
      });
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login">
      <Header simplified />
      <section>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder=" Your Email"
            name="email"
            required
            value={formValue.email}
            onChange={(e) =>
              setFormValue({ ...formValue, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            required
            value={formValue.password}
            onChange={(e) =>
              setFormValue({ ...formValue, [e.target.name]: e.target.value })
            }
          />
          <button type="submit">Login</button>
          <div>
            <section>
              <input type="checkbox" id="Remember me" name="" value="" />
              <label htmlFor="Remember me">Remember me</label>
            </section>
            <aside>Need Help ?</aside>
          </div>
          <div>
            <span>Not Signed Up Yet ?</span>
            <Link to={"/signup"}>Sign Up now.</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
