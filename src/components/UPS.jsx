var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <link href="Stylesheets/SecurityStyles.css" rel="stylesheet" />
          <h1 style={{textAlign: 'center'}}>Can you find all the problems with this email?</h1>
          <div>
            <table border={0} cellSpacing={1} cellPadding={1}>
              <tbody>
                <tr bgcolor="#644117">
                  <td><br /> <img src="https://media.merchantcircle.com/3679002/ups-logo_full.png" alt="" width={100} /></td>
                </tr>
                <tr>
                  <td><br /><strong>Original Shipment Detail:</strong><br /><br /><strong>Ship To:</strong><br />Sherlock Holmes&nbsp;<br />221B Baker Street<br />London,&nbsp;England<br /><br /><strong>Number of Packages:</strong><br />1<br /><br /><strong>UPS Service:</strong><br />UPS 2ND DAY AIR<br /><br /><strong>Weight:</strong><br />1.0 LBS<br /><br /><strong>Lead Tracking Number:</strong><br /><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">1ZBE312TNY00015011</a> <strong>(click for full Details)</strong><br />&nbsp;</td>
                </tr>
                <tr>
                  <td>© 2017 United Parcel Service of America, Inc. UPS, the UPS brandmark, and the color brown are trademarks of United Parcel Service of America, Inc. All rights reserved.<br /><br />All trademarks, trade names, or service marks that appear in connection with UPS's services are the property of their respective owners.<br />&nbsp;<br />Please do not reply directly to this e-mail. UPS will not receive any reply message.<br />For more information on UPS's privacy practices, refer to the UPS Privacy Notice.<br />For questions or comments, visit Contact UPS.<br /><br />This communication contains proprietary information and may be confidential.&nbsp;If you are not the intended recipient, the reading, copying, disclosure or&nbsp;other use of the contents of this e-mail is strictly prohibited and you are instructed to please delete this e-mail immediately.<br /><br /><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><strong>UPS Privacy Notice</strong></a><br /><br /><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><strong>Contact UPS</strong></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Code for faqs -*/}
          <h1 className="faq-heading" style={{textAlign: 'center', paddingTop: '2%'}}>Answers: Select the Portion of the E-mail you Would Like to Check!</h1>
          <section className="faq-container">
            <div className="faq-one">
              {/* faq question */}
              <h1 className="faq-page">Answer for Top Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/UPS-Top.jpg" /> 
                <p>Based on a quick look this logo looks legitimate, however after looking a little closer you can see <br /> it is not. The color and positioning of the logo are slightly off! This is one of the reasons that you <br /> need to be careful and not trust everything just because you see the logo of a company you trust.</p>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-two">
              {/* faq question */}
              <h1 className="faq-page">Answer for Middle Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/UPS-Middle.jpg" /> 
                <p>This email ships this item to "Sherlock Holmes" whom many should recognize from the fictional series. <br /> Many times a phishing link will not have access to your name and will use a name or person that people <br /> will recognize. In this case it is more for a learning purpose, but a name like "John Smith" could actually <br /> catch some unaware users!</p>
                <p>The next section focuses on the "Tracking Number" and presents the user a link. It also says "(click for full Details)" <br /> There are a couple key things wrong here, although the tracking number looks legitimate if you hover over it then it <br /> displays a Youtube URL which is definitely not what the intended target of UPS Tracking is. In this training exercise <br /> all of the links go to a simple Youtube redirect but in the case of an actual phishing attempt a user would be redirected <br /> to a suspicious website where they could be fooled into putting in their username and password for a certain account. <br /> It is important to keep this in mind as you continue through this course and continue in the online world.</p>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-three">
              {/* faq question */}
              <h1 className="faq-page">Answer for Bottom Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/UPS-Bottom.jpg" /> 
                <p>The Copyright information listed here is from 2017 which should throw up a flag as a reputable company like UPS would have this up-to-date.</p>
                <p>Just like the link above to the tracking number, if you hover over these two links they do not take you to the intended destination. You must <br /> be careful with all links in a phishing email not just the first one that is presented, as attackers could hide multiple redirects in one message.</p>
              </div>
            </div>
          </section></div>
      );
    }
  });