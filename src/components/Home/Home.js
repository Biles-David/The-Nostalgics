import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import './Home.css';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      links: ['Home', 'About', 'Album', 'Calender']
    }
  }
  render() {
    const map = this.state.links.map((e, i) => {
      return <li key={i}>{e}</li>
    })
    return (
      <div className='home'>
      <Navbar/>
        <div className="body1"></div>
        <div className='about'>
          <h1>About Us</h1>
          <p>​​This group was formed in June of 2015. Our desire is to provide a chance to celebrate the 50s, 60s and 70s by singing along, dancing or just listening. Here's your chance to recall the good old days when music was simpler, more fun, easier to dance to and you could understand the words. Hear songs from artists such as Elvis, Buddy Holly, Dion, Roy Orbison, The Shirelles, Leslie Gore, Patsy Cline, Fats Domino, The Everly Brothers, Paul Anka, The Carpenters and many others.</p>
        </div>
      </div>
    );
  }
}

export default Home;
