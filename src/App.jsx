
import { useState } from 'react';
import './App.css';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const features = [
        {
            icon: '📅',
            title: 'Lesson Bookings',
            description: 'Book driving lessons, manage schedules and keep track of upcoming sessions.'
        },
        {
            icon: '📋',
            title: 'Digital Attendance',
            description: 'Record practical lessons and access attendance records whenever needed.'
        },
        {
            icon: '📈',
            title: 'Learning Progress',
            description: 'Monitor driving performance and track completed practical lessons.'
        },
        {
            icon: '👨‍🏫',
            title: 'Instructor Management',
            description: 'Manage instructors, lesson schedules and student assignments.'
        },
        {
            icon: '🚘',
            title: 'Student Management',
            description: 'Keep student information and driving lesson records organised.'
        },
        {
            icon: '📊',
            title: 'Reports & Analytics',
            description: 'Access useful insights into bookings, attendance and learning progress.'
        }
    ];

    const roles = [
        {
            icon: '🎓',
            title: 'Students',
            description: 'Book lessons, view schedules, monitor attendance and track your driving progress.'
        },
        {
            icon: '🚗',
            title: 'Driving Instructors',
            description: 'Manage lesson schedules, monitor students and record practical driving sessions.'
        },
        {
            icon: '🛡️',
            title: 'Administrators',
            description: 'Manage students, instructors, bookings and overall driving school activities.'
        }
    ];

    return (
        <div className="app">

            {/* Navigation */}
            <nav className="navbar">

                <a href="#home" className="logo" onClick={closeMenu}>
                    <span className="logo-icon">S</span>
                    <span>Smart<span className="logo-highlight">Drive</span></span>
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#features" onClick={closeMenu}>Features</a>
                    <a href="#roles" onClick={closeMenu}>User Roles</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                </div>

                <a href="#login" className="login-button">
                    Sign In
                </a>

            </nav>

            <main>

                {/* Hero Section */}
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
                            and stay connected with your driving instructor
                            through one convenient platform.
                        </p>

                        <div className="hero-actions">
                            <a href="#login" className="primary-button">
                                Get Started →
                            </a>

                            <a href="#features" className="secondary-button">
                                Explore Features
                            </a>
                        </div>

                        <div className="hero-trust">
                            <span>✓ Easy lesson management</span>
                            <span>✓ Progress tracking</span>
                        </div>

                    </div>

                    <div className="hero-visual">

                        <div className="hero-circle"></div>

                        <div className="car-illustration">
                            🚘
                        </div>

                        <div className="visual-card">
                            <span>WELCOME TO SMARTDRIVE</span>
                            <h2>Your Road to Success</h2>
                            <p>Learn. Practise. Progress.</p>
                        </div>

                    </div>

                </section>

                {/* Introduction */}
                <section className="intro-section" id="about">

                    <span className="section-label">ABOUT SMARTDRIVE</span>

                    <h2>Driving School Management, Simplified.</h2>

                    <p>
                        SmartDrive is designed to bring students,
                        driving instructors and administrators together.
                        Our platform makes it easier to organise driving
                        lessons, manage attendance and monitor learning progress.
                    </p>

                </section>

                {/* Features */}
                <section className="features" id="features">

                    <div className="section-heading">

                        <span className="section-label">WHAT WE OFFER</span>

                        <h2>Everything You Need in One Place</h2>

                        <p>
                            Powerful tools designed to simplify
                            your driving school experience.
                        </p>

                    </div>

                    <div className="feature-grid">

                        {features.map((feature, index) => (
                            <div className="feature-card" key={index}>

                                <div className="feature-icon">
                                    {feature.icon}
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                            </div>
                        ))}

                    </div>

                </section>

                {/* User Roles */}
                <section className="roles-section" id="roles">

                    <div className="section-heading">

                        <span className="section-label">WHO IS IT FOR?</span>

                        <h2>One Platform. Three User Roles.</h2>

                        <p>
                            SmartDrive connects everyone involved
                            in the driving school experience.
                        </p>

                    </div>

                    <div className="roles-grid">

                        {roles.map((role, index) => (
                            <div className="role-card" key={index}>

                                <div className="role-icon">
                                    {role.icon}
                                </div>

                                <h3>{role.title}</h3>

                                <p>{role.description}</p>

                            </div>
                        ))}

                    </div>

                </section>

                {/* How It Works */}
                <section className="how-section">

                    <div className="section-heading">

                        <span className="section-label">HOW IT WORKS</span>

                        <h2>Your Driving Journey, Made Easier</h2>

                    </div>

                    <div className="steps-grid">

                        <div className="step">
                            <span>01</span>
                            <h3>Get Started</h3>
                            <p>Access the platform through your registered account.</p>
                        </div>

                        <div className="step">
                            <span>02</span>
                            <h3>Manage Lessons</h3>
                            <p>Organise bookings and driving lesson schedules.</p>
                        </div>

                        <div className="step">
                            <span>03</span>
                            <h3>Track Progress</h3>
                            <p>Monitor attendance and follow your driving development.</p>
                        </div>

                    </div>

                </section>

                {/* Login Placeholder */}
                <section className="login-section" id="login">

                    <span className="section-label">GET STARTED</span>

                    <h2>Ready to Start Your Journey?</h2>

                    <p>
                        Join SmartDrive and experience a simpler
                        way to manage your driving school activities.
                    </p>

                    <p className="coming-soon">
                        Account registration and login coming soon.
                    </p>

                </section>

            </main>

            {/* Footer */}
            <footer>

                <div className="footer-brand">
                    <a href="#home" className="logo footer-logo">
                        <span className="logo-icon">S</span>
                        <span>Smart<span className="logo-highlight">Drive</span></span>
                    </a>

                    <p>Driving Progress Through Technology.</p>
                </div>

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#roles">User Roles</a>
                    <a href="#about">About</a>
                </div>

                <p className="copyright">
                    © 2026 SmartDrive. All rights reserved.
                </p>

            </footer>

        </div>
    );
}

export default App;
