import "./About.css";

export function About() {


    return (
        <div className="About">

            <img src="src/assets/images/profile.jpeg" className="aboutImage"/>
            <p className="aboutDescription">

                <strong>Weather Forecast</strong> is a sleek, real-time weather tracking web application designed for a
                smooth and informative user experience. It provides detailed, localized weather data for Israeli cities
                with live updates on temperature, weather conditions, wind speed, humidity, and UV index. The app
                includes a dynamic search bar to easily switch between cities, and it presents both current conditions
                and hourly forecasts in a clean, visually appealing layout. Designed for clarity and responsiveness, the
                interface uses subtle gradients, clear icons, and intuitive structure, making it easy to monitor
                upcoming weather changes at a glance. Whether you're planning your evening or preparing for
                tomorrow, <strong>Weather Forecast</strong> helps you stay informed with accuracy and style.

            </p>
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
