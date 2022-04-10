var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <title>Tenjin Tech</title>
          <link href="Stylesheets/Styles.css" rel="stylesheet" />
          <img src="logo.jpg" alt="Tenjin Tech" className="center" />
          <div div id="myTopnav" className="topnav">
            <a href="index.html">Home</a>
            <a href="Lesson Plans.html">Lesson Plans</a>
            <a href="#Knowledge Base.html">Knowledge Base</a>
          </div>
          <div id="mySidenav" className="sidenav">
            <a href="index.html" id="Home">Home</a>
            <a href="Lesson Plans.html" id="LessonPlans">Lesson Plans</a>
            <a href="#" id="KnowledgeBase">Knowledge Base</a>
            <a href="#" id="Contact">Contact</a>
          </div>
          <h1>Courses</h1>
          <button onclick="secDrop1()" className="dropbtnSec1">Introduction to Phishing</button>
          <div className="dropdownSec1">
            <div id="myDropdownSec1" className="dropdown-content-sec1">
              <a href="UPS2.html" target="_blank">Dangers of Phishing</a>
              <a href="Spotify.html" target="_blank">How to Protect Yourself Online</a>
            </div>
          </div>
          <button onclick="secDrop()" className="dropbtnSec">Phishing - Test your Knowledge with Real-World Examples</button>
          <div className="dropdownSec">
            <div id="myDropdownSec" className="dropdown-content-sec">
              <a href="UPS2.html" target="_blank">Easy</a>
              <a href="Spotify.html" target="_blank">Medium</a>
              <a href="Zoom.html" target="_blank">Hard</a>
            </div>
          </div>
        </div>
      );
    }
  });