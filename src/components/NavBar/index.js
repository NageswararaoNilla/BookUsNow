const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div>
          <h1 className="text-2x1 font-bold text-red-600">BookUsNow</h1>
          <div>Mumbai, India</div>
        </div>
        <div className="icons-container"></div>
      </nav>
      <div>
        <ul>
          <li>Live shows</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
