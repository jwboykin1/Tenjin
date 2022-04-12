import React from "react";

function Contact() {
  return (
    <div class="container">
      <h1 class="text-center">Contact Tenjin Tech</h1>
      {/* <!-- contact form --> */}
      <p class="text-center">
        Please feel free to contact Tenjin Tech with any questions. We will be
        more than happy to answer them!!
      </p>
      <form>
        {/* <!-- name --> */}
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            name="name"
            class="form-control"
            id="name"
            placeholder="enter your name"
          />
        </div>

        {/* <!-- email --> */}
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            placeholder="enter your email"
          />
        </div>

        {/* <!-- subject --> */}
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            name="subject"
            class="form-control"
            id="subject"
            placeholder="enter email subject"
          />
        </div>

        <div class="form-group">
          <label for="email_body">Message</label>
          <textarea class="form-control" id="email_body" rows="5"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div id="mySidenav" class="sidenav">
        <a href="index.html" id="Home">
          Home
        </a>
        <a href="Lesson Plans.html" id="LessonPlans">
          Lesson Plans
        </a>
        <a href="KnowledgeBase.html" id="KnowledgeBase">
          Knowledge Base
        </a>
        <a href="Contact.html" id="Contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Contact;
