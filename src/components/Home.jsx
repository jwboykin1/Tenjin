import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="col-lg-7">
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src="http://placehold.it/900x400"
          alt=""
        />
      </div>
      <div class="col-lg-5">
        <h1 class="font-weight-light">Home</h1>
        <p>
          Computers are a challenging component to modern day to day life. But
          when used correctly, computers can provide benefits to everyone.
          Tenjin Tech strives to teach computer literacy to all those that want
          to learn.
        </p>
        <p>
          Tenjin Tech is dedicated to improving computer literacy. Having an
          understanding of computers has been proven to increase your
          productivity and professionalism. These courses are fun and
          interactive, and will help you increase your knowledge of computers
          and the problems around them.
        </p>
        <p>
          The skills you gain will be applicable to your daily life and you will
          see an increase in your productivity and long-term goals. This is the
          age of technology, so computer literacy is essential.{" "}
        </p>
        <div id="id01" class="modal" />
        <span
          onclick="document.getElementById('id01').style.display='none'"
          class="close"
          title="Close Modal"
        ></span>
        <form class="modal-content animate" action="/action_page.php" />
        <div class="container" />
        <label>
          <b>Full Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Full Name"
          name="Full Name"
          required
        />
        <label>
          <b>Birthday</b>
        </label>
        <input
          type="text"
          placeholder="Enter Birthdate"
          name="Birthday"
          required
        />
        <label>
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="Email" required />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="PSW"
          required
        />
        <label>
          <b>Repeat Password</b>
        </label>
        <input type="checkbox" /> Remember me
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>
        <div class="clearfix">
          <button
            type="button"
            onclick="document.getElementById('id01').style.display='none'"
            class="cancelbtn"
          >
            Cancel
          </button>
          <button type="submit" class="signupbtn">
            Sign Up
          </button>
        </div>
        //faq answer
        <div class="faq-body">
          <p>
            To create an account, you will click on the "Create an account"
            button in the upper right corner of the webpage. The only
            information that is needed are birthdate, email, full name,
            username, and password of your choosing. At Tenjin Tech we strive to
            keep your data as safe as possible and will not share or sell
            personal information.
          </p>
        </div>
      </div>

      <hr class="hr-line" />
      <div class="faq-three">
        //faq question
        <h1 class="faq-page">How to sign in?</h1>
        //faq answer
        <div class="faq-body">
          <p>
            To sign into your account, you will click the sign in button in the
            upper right corner of the webpage; you will need to enter your
            username and password.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
