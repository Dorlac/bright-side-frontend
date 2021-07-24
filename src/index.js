import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <html>
    <body>
    <h1>Brighten your future with marketable skills from
    Bright Side University</h1>
    <p>Bright Side University is still in development.
     Enter your email below to be notified when development is complete.</p>
    <p>Our mission is to provide Devops, Software, and Machine Learning Engineering
     educational resources to those with the aptitude and desire to improve their 
     quality of life with a career in IT.</p>
    <form>
      <p>Get notified when the development is complete</p>
      <input id="email" type="email" placeholder="Email address"/>
      <button>Sign up for updates</button>
    </form>
    </body>
    </html>,
    document.getElementById('root')
  );