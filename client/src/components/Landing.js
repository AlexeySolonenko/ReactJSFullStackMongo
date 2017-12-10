import React from 'react';

const Landing = () => {
  return (
    <div className="left" >
      <h1 className="center">
        Emaily!
      </h1>
      <h5> Welcome to an application developed within "Node with React: Fullstack Web Development" course.</h5>
          <b> This application allows users to:</b>
        <ul className="browser-default">
          <li >Register</li>
          <li>Login with Google Auth</li>
          <li>Top-up  balance with credit cards via Stripe</li>
          <li>Create basic email surveys</li>
          <li>Send the surveys to arbitrary emails</li>
          <li>Collect the feedback on results of the survey, trace the surveys</li>
        </ul>
      <b>To try this application</b>
      <ul className="browser-default">
        <li>Log in with a google account. While it is a native Google API and data is stored in an Mlab hosted Mongo DB I would encourage you not to use your personal or other account with sensitive data. Make a temporary one, please.</li>
        <li>Add credits using virtual test card data: o@o.o (any email), card number 4242 4242 4242 4242, 10/20 (any future date), 123 (any CVC).</li>
        <li>Create new survey. A survey is designed to answer a single yes/no question.</li>
        <li>Send survey.</li>
      </ul>

      <b>Few words about the application</b>
      Front-end is built on ReactJS. Few Materializecss styling. Redux to link data to back-end. Back-end is an express app with Passport (JS) handling a MongoDB with mongoosejs and using various other APIs and modules.  
    </div>
  );
};

export default Landing;