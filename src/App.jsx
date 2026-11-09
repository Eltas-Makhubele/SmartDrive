
import './App.css'

function App() {
    return (
        <div className="app">

            {/* Navigation */}
            <nav className="navbar">
                <a href="/" className="logo">
                    <span className="logo-icon">S</span>
                    SmartDrive
                </a>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                </div>

                <a href="#login" className="login-button">
                    Sign In
                </a>
            </nav>

            {/* Hero Section */}
            <main>
                <section className="hero" id="home">

                    <div className="hero-content">
            <span className="tagline">
              YOUR JOURNEY STARTS HERE
            </span>

                        <h1>
                            Learn to Drive.
                            <span> Drive with Confidence.</span>
                        </h1>

                        <p>
                            SmartDrive makes driving school management
                            simpler. Manage lessons, track your progress
                            and stay connected with your driving instructor.
                        </p>

                        <div className="hero-actions">
                            <a href="#login" className="primary-button">
                                Get Started
                            </a>

                            <a href="#features" className="secondary-button">
                                Explore Features
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="car-icon">🚘</div>
                        <div className="visual-card">
                            <span>SMARTDRIVE</span>
                            <h2>Your Road to Success</h2>
                            <p>Learn. Practise. Progress.</p>
                        </div>
                    </div>

                </section>

                {/* Features */}
                <section className="features" id="features">
                    <div className="section-heading">
                        <span>WHAT WE OFFER</span>
                        <h2>Everything in One Place</h2>
                        <p>
                            A simpler way to manage your driving school experience.
                        </p>
                    </div>

                    <div className="feature-grid">

                        <div className="feature-card">
                            <div className="feature-icon">📅</div>
                            <h3>Lesson Bookings</h3>
                            <p>
                                Request driving lessons and keep track
                                of your scheduled sessions.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📋</div>
                            <h3>Digital Attendance</h3>
                            <p>
                                Record practical lessons and access
                                attendance history.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📈</div>
                            <h3>Learning Progress</h3>
                            <p>
                                Follow your practical driving progress
                                and completed lessons.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Login section placeholder */}
                <section className="login-section" id="login">
                    <h2>Welcome to SmartDrive</h2>
                    <p>
                        Your driving school management platform.
                    </p>
                    <p className="coming-soon">
                        User login and registration coming soon.
                    </p>
                </section>

            </main>

            {/* Footer */}
            <footer>
                <p>© 2026 SmartDrive. All rights reserved.</p>
                <p>Driving Progress Through Technology.</p>
            </footer>

        </div>
    )
}

export default App
