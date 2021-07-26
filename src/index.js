import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/logo.png'

ReactDOM.render(
  <body>
  {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/> */}
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap" rel="stylesheet"></link>
  <div id="nav-bar"><nav>
    <a href="https://brightsideuniversity.com">
      <img src={logo} height="48px" width="48px" align="left"/>
    </a>
  </nav>
  </div>
  <main>
    <h1 class="big-text">Bright Side School of Engineering</h1>
    <p>This website is still in developement. Enter your email to receive progress updates.</p>
    <form action="#">
      <input class="field" id="email" type="email" placeholder="Email address" required/>
      <button class="field" type="submit">Sign up for updates</button>
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