import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/logo.png'

ReactDOM.render(
  <body>
  <nav>
    <a href="https://brightsideuniversity.com">
      <img align="left" src={logo} height="48px" width="48px" />
    </a>
  </nav>
  <br />
  <main>
    <h1 align="center">Bright Side School of Engineering</h1>
    <form action="#">
      <p>
        This website is still in developement.
        Enter your email to receive progress updates.
      </p>
      <input id="email" type="email" placeholder="Email address" required/>
      <button type="submit">Sign up for updates</button>
    </form>
    </main>
    <footer>
    <a 
      href="https://linkedin.com/company/bright-side-university"
      target="_blank">
      Follow us on LinkedIn
    </a>
    {/* <img 
      src="https://media.istockphoto.com/photos/beautiful-blazing-sunset-landscape-at-over-the-meadow-and-orange-sky-picture-id854130274?k=6&m=854130274&s=612x612&w=0&h=p21BlqMlntinZp5jL3Am40vvMRZ2xZHGsIIoviobkGw="
    /> */}
    </footer>
    </body>,
    document.getElementById('root')
  );