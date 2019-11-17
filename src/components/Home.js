import React from 'react';
import { Link } from 'react-router-dom'
// shows if user is NOT loged in


const Home = () => (
  <div>
    <span>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
  </div>

);


// <Link> on click connects to http://localhost:3000/login that is connected via <Route> to component with inputs
export default Home;