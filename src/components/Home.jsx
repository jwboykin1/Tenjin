import React from "react";
import Teacherstudent from "./Teacherstudent.jpeg";

function Home() {
  return (
    <div className="home">
      <div class=" col justify-content-md-center">

        <div class="col-lg-5">
          <h1 class="font-weight-light">Home</h1>
          <p>
            Computers are a challenging component to modern day to day life. But
            when used correctly, computers can provide benefits to everyone.
            Tenjin Tech strives to teach computer literacy to all those that
            want to learn.
          </p>
          <p>
            Tenjin Tech is dedicated to improving computer literacy. Having an
            understanding of computers has been proven to increase your
            productivity and professionalism. These courses are fun and
            interactive, and will help you increase your knowledge of computers
            and the problems around them.
          </p>
          <p>
            The skills you gain will be applicable to your daily life and you
            will see an increase in your productivity and long-term goals. This
            is the age of technology, so computer literacy is essential.{" "}
          </p>
        </div>
      </div>
      <div className="col-lg-7">
        <img src={Teacherstudent} height="290" width="510"/>
      </div>
    </div>
  );
}

export default Home;
