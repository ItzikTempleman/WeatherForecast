import "./About.css";

export function About() {


    return (
        <div className="About">

                <img src="src/assets/images/profile.jpeg" className="aboutImage"/>
                <p className="aboutDescription"><strong>Crypto King</strong> is a real-time cryptocurrency tracking web
                    app where you can follow live prices and interactive charts for your favorite coins. Prices are
                    available in <strong>USD</strong>, <strong>ILS</strong>, and <strong>EUR</strong>. It also includes
                    a built-in search to quickly find any coin you're interested in.</p>
                <hr className="aboutDivider"/>
                <h3 className="developerHeading">About Me</h3>
                <div className="developerInfo">
                    <p><strong>Name:</strong> Itzik Templeman</p>
                    <p><strong>Age:</strong> 33</p>
                    <p><strong>Nationality:</strong> Israel</p>
                    <p><strong>Background:</strong> Experienced Android developer currently expanding into full-stack
                        web development</p>
                    <p><strong>Email:</strong> <a href="mailto:itzik.templeman@gmail.com">itzik.templeman@gmail.com</a>
                    </p>
                    <p><strong>Phone:</strong> <a href="tel:+972-545408531">+972 54-540-8531</a></p>
                </div>

                <p className="developerNote">
                    This project represents a big step in my journey to mastering modern web development.
                    Thank you for checking it out
                </p>
            </div>


    );
}
