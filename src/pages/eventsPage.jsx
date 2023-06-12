import React from 'react'

const eventsPage = () => {
  return (
      <div className="container">
        <header className="header">
          <h1 className="logo">ISTE-NITH</h1>
          <nav className="nav">
            <ul className="nav-list">
              <DarkMode />
              <li className="nav-item"><a href='/blogs'>Blogs</a></li>
              <li className="nav-item"><a href='/members'>Members</a></li>
              <li className="nav-item"><a href='/gallery'>Gallery</a></li>
              <li className="nav-item"><a href='/events'>Events</a></li>
              <li className="nav-item"><a href='/about'>About</a></li>
            </ul>
          </nav>
        </header>
        <section className="hero">
          <div className="hero-content">
            <img alt='logo' style={{ width: 100 }} src={String(logo)} />
            <h2 className="hero-title">ISTE-NITH</h2>
            <p className="hero-description">
              Indian Society for Technical Education is a college society dedicated to promoting technical education and fostering a spirit of innovation among students.
            </p>
            <button className="cta-button">Enter</button>
          </div>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>
          The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country. The Students' Chapter NIT Hamirpur is the representative at NIT Hamirpur to promote such techincal culture in our college. We at NITH, conduct various events within the college and also participate in inter-college fests.
          </p>
        </section>
        <section className="events">
          <h2>Events</h2>
          <div className="event-list">
            <div className="event-item">
              <h3>Hult Prize</h3>
              <p>Date and Time: July 12, 2023 at 2 PM</p>
              <p>Venue: Auditorium</p>
            </div>
            <div className="event-item">
              <h3>Pahal</h3>
              <p>Date and Time: August 5, 2023 at 3 PM</p>
              <p>Venue: Seminar Hall</p>
            </div>
            <div className="event-item">
              <h3>Prodyogiki</h3>
              <p>Date and Time: August 5, 2023 at 3 PM</p>
              <p>Venue: Seminar Hall</p>
            </div>
            <div className="event-item">
              <h3>Prarambh</h3>
              <p>Date and Time: August 5, 2023 at 3 PM</p>
              <p>Venue: Seminar Hall</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p>&copy; 2023 ISTE | Indian Society for Technical Education</p>
        </footer>
      </div>
  )
}

export default eventsPage