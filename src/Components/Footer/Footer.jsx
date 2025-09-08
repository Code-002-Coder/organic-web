import { footer } from "../../dB/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  
  
    return (
      
    // Footer 
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container border-0">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">🌿 The Farm Fresh</h4>
            <p>Your trusted source for pure, natural, and organic products.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#home" className="text-light text-decoration-none">About</a></li>
              <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#help" className="text-light text-decoration-none">Services</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#honey" className="text-light text-decoration-none">Vegetables</a></li>
              <li><a href="#sugar" className="text-light text-decoration-none">Fruits</a></li>
              <li><a href="#turmeric" className="text-light text-decoration-none">Others</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <p>📍 123 Organic Street, Green Valley, CA</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ contect@thefarmfresh.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary mt-4 pt-3 text-center">
          <p className="mb-0">&copy; 2025 The Farm Fresh. &copy;  All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
  };
    
    export { Footer };