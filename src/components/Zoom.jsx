var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link href="Stylesheets/SecurityStyles.css" rel="stylesheet" />
          <h1 style={{textAlign: 'center'}}>Can you find all the problems with this email?
            <br />
          </h1>
          <div>
            <div style={{fontFamily: 'Arial', width: '600px'}}>
              <p style={{textAlign: 'center'}}><img alt="Zoom Logo." src="https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png" style={{width: '300px', height: '168px', marginBottom: '30px', display: 'block', marginLeft: '500px', marginRight: 'auto'}} width={150} /></p>
              <p> <strong>Dear Zoom User,</strong> </p>
              <p>Zoom has launched an automatic update feature designed to streamline the update process for desktop clients.</p>
              <p>The new feature is currently available only for desktop Zoom clients on Windows and macOS, with the Linux platform not currently supported.</p>
              <p>For most individual users, automatic updates will be enabled by default. When enabled, users will have the opportunity to opt-out of automatic updates for their desktop client after the first install or first update where this feature is present.</p>
              <p>Users can also change this preference at any time by checking or unchecking 'Automatically keep my Zoom up to date' under Zoom &gt; Settings &gt; General.</p>
              <p>You can see the image below shows where to access the automatic update settings:</p>
              <p style={{textAlign: 'center'}}><img alt="Zoom Automatic Updates." src="https://www.bleepstatic.com/images/news/u/1109292/2021/Zoom_automatic_updates.png" style={{width: '500px', height: '429px'}} /></p>
              <p>Please access your Zoom account and make the necessary changes to your settings. You can do so by using the button below.</p>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody align="center">
                  <tr>
                    <td align="center">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td align="center" bgcolor="#008dff" style={{padding: '12px 18px', borderRadius: '0px'}}><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><span style={{fontSize: '16px', fontFamily: 'Helvetica , Arial , sans-serif', fontWeight: 'normal', color: '#ffffff', textDecoration: 'none', display: 'inline-block'}}>Access Zoom</span></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{margin: '1px'}}>&nbsp;</div>
              <p> <strong>Thank you, </strong>
                <br /> <strong>The Zoom Team </strong></p>
            </div>
          </div>
          {/* Code for faqs -*/}
          <h1 className="faq-heading" style={{textAlign: 'center', paddingTop: '2%'}}>Answers: Select the Portion of the E-mail you Would Like to Check!</h1>
          <section className="faq-container">
            <div className="faq-one">
              {/* faq question */}
              <h1 className="faq-page">Answer for Top Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/Zoom-Top.jpg" /> 
                <p>Based on the other difficulties you would think something is wrong with the logo <br /> but this is actually a legitimate logo taken from Zoom! This is one of the reasons <br /> why you have to stay vigilant when looking at emails.</p>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-two">
              {/* faq question */}
              <h1 className="faq-page">Answer for User Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/Zoom-User.jpg" /> 
                <p>The email begins with a generic "Dear User" instead of something like "Dear John". <br /> Legitimate companies will have access to your account and would rarely, if ever send something generic like this</p>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-three">
              {/* faq question */}
              <h1 className="faq-page">Answer for Middle Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/Zoom-Middle.jpg" /> 
                <p>The first portion of the email talks about how Zoom has created <br /> a new automatic update feature, to the unsuspecting eye this could seem legitimate, <br /> however Zoom would have ways to put this directly in the client application.</p>
                <p>This section tries to bring credibility to the update showing how a user would actually change <br /> their settings.  This is a technique used by scammers and phishers to get users to trust them.</p>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-four">
              {/* faq question */}
              <h1 className="faq-page">Answer for Bottom Portion</h1>
              {/* faq answer */}
              <div className="faq-body">
                <img src="SecurityImg/Zoom-Bottom.jpg" /> 
                <p>The screenshot offered by the "Zoom Team" is not a high quality one, if they were truly trying <br /> to get users to follow along with their steps it would have been made with more professionalism.</p>
              </div>
            </div>
          </section></div>
      );
    }
  });