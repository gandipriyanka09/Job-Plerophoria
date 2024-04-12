import '/Job Pleophoria/Job Plerophoria/src/App.css'; // Import your CSS file

function NavBar() {
  return (
    
    <div className="navbar-container"> {/* Apply a CSS class for styling */}
    <header>
        <h1>Welcome To Job Plerophoria</h1>
    </header>
      <nav>
        <input type="checkbox" id="check" />
        <label className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Job Pleophoria</label>
        <ul>
        <li><a href="/home">Home</a></li>
          <li><a className="active" href="/roles">Job Roles</a></li>
          <li><a href="/openings">Job Openings</a></li>
         
          <li><a href="/openings">Know More</a></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default NavBar;
