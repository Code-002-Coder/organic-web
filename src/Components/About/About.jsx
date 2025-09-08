import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; // optional, you can remove if you don't use custom CSS
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="min-vh-100 bg-light my-5 py-5">
      <div className="container my-5">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Welcome to The Farm Fresh, your trusted source for 100% organic and
            eco-friendly products. We believe in healthy living and sustainable
            farming practices that respect both people and the planet.
          </p>
        </div>

        {/* Content */}
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1506806732259-39c2d0268443"
              alt="Organic Farm"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-semibold mb-3">Our Mission</h3>
            <p className="text-muted">
              Our mission is to deliver the freshest organic produce and natural
              products directly to your doorstep. By supporting local farmers,
              we ensure fair trade and promote a healthier lifestyle for all.
            </p>
            <h3 className="fw-semibold mb-3 mt-4">Why Choose Us?</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔ 100% Certified Organic</li>
              <li className="list-group-item">✔ Locally Sourced Produce</li>
              <li className="list-group-item">✔ Eco-friendly Packaging</li>
              <li className="list-group-item">✔ Sustainable Farming Practices</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-5">
          <h3 className="fw-semibold text-center mb-4">Meet Our Team</h3>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3">
                <img
                  src="/profile.jpeg"
                  alt="Founder"
                  className="rounded-circle mx-auto mb-3 team-img"
                />
                <h5>Code 002</h5>
                <p className="text-muted">Founder & CEO</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3">
                <img
                  src="/profile.jpeg"
                  alt="Manager"
                  className="rounded-circle mx-auto mb-3 team-img"
                />
                <h5>Code 002</h5>
                <p className="text-muted">Operations Manager</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3">
                <img
                  src="/profile.jpeg"
                  alt="Farmer"
                  className="rounded-circle mx-auto mb-3 team-img"
                />
                <h5>Code 002</h5>
                <p className="text-muted">Lead Farmer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default About;
