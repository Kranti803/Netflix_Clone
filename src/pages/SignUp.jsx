import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);

      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) navigate("/login");
      });

      setFormValue({
        email: "",
        password: "",
      });
      
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className="signup">
      <Header simplified />
      <section>
        <h2>SignUp</h2>
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
          <button type="submit">Sign Up</button>
          <div>
            <section>
              <input type="checkbox" id="Remember me" name="" value="" />
              <label htmlFor="Remember me">Remember me</label>
            </section>
            <aside>Need Help ?</aside>
          </div>
          <div>
            <span>Already Signed UP ?</span>
            <Link to={"/"}>Sign In now.</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
