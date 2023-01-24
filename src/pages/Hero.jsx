import React from "react";
import Header from "../components/Header";
import {AiOutlineRight} from "react-icons/ai"
import {Link} from "react-router-dom";





const Hero = () => {


  return (
    <div className="hero">
      <Header />
      <section>
        <div>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
        </div>

        <aside>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form>
            <input type="email" placeholder="Email Address..." />
            <Link to={'./login'}>
            <button type="submit">Get Started<AiOutlineRight size={20}/></button>
            </Link>
          </form>
        </aside>
      </section>
    </div>
  );
};

export default Hero;
