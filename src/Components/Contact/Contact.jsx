import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar />
    <div className="min-vh-100 bg-light my-5 py-4 ">
      <main className="container py-5">
        <div className="text-center mb-5 ">
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Have questions about our organic products? We'd love to hear from
            you.
          </p>
        </div>

          {/* Contact Form */}
``        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">Send us a Message</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              <div className="card p-3 shadow-sm">
                <div className="d-flex">
                  <MapPin size={24} className="text-primary me-3" />
                  <div>
                    <h5>Our Location</h5>
                    <p className="text-muted mb-0">
                      123 Organic Farm Road
                      <br />
                      Green Valley, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-3 shadow-sm">
                <div className="d-flex">
                  <Phone size={24} className="text-primary me-3" />
                  <div>
                    <h5>Phone</h5>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="card p-3 shadow-sm">
                <div className="d-flex">
                  <Mail size={24} className="text-primary me-3" />
                  <div>
                    <h5>Email</h5>
                    <p className="text-muted mb-0">info@organicshop.com</p>
                  </div>
                </div>
              </div>

              <div className="card p-3 shadow-sm">
                <div className="d-flex">
                  <Clock size={24} className="text-primary me-3" />
                  <div>
                    <h5>Store Hours</h5>
                    <p className="text-muted mb-1">
                      Monday - Friday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-muted mb-1">
                      Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted mb-0">
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Contact;

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import Navbar from "../Navbar/Navbar";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent! We'll get back to you within 24 hours.");
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-vh-100 bg-light">
//       <Navbar />

//       <main className="container py-5">
//         <div className="text-center mb-5">
//           <h1 className="fw-bold mb-3">Contact Us</h1>
//           <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
//             Have questions about our organic products? We'd love to hear from you.
//           </p>
//         </div>

//         <div className="row g-4">
//           {/* Contact Form */}
//           <div className="col-lg-6">
//             <div className="card shadow-sm">
//               <div className="card-header">
//                 <h5 className="mb-0">Send us a Message</h5>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={handleSubmit} className="row g-3">
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Your Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Your Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <textarea
//                       className="form-control"
//                       rows="4"
//                       placeholder="Your Message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <button type="submit" className="btn btn-primary w-100">
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="col-lg-6">
//             <div className="d-flex flex-column gap-3">
//               <div className="card p-3 shadow-sm">
//                 <div className="d-flex">
//                   <MapPin size={24} className="text-primary me-3" />
//                   <div>
//                     <h5>Our Location</h5>
//                     <p className="text-muted mb-0">
//                       123 Organic Farm Road<br />
//                       Green Valley, CA 90210<br />
//                       United States
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="card p-3 shadow-sm">
//                 <div className="d-flex">
//                   <Phone size={24} className="text-primary me-3" />
//                   <div>
//                     <h5>Phone</h5>
//                     <p className="text-muted mb-0">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="card p-3 shadow-sm">
//                 <div className="d-flex">
//                   <Mail size={24} className="text-primary me-3" />
//                   <div>
//                     <h5>Email</h5>
//                     <p className="text-muted mb-0">info@organicshop.com</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="card p-3 shadow-sm">
//                 <div className="d-flex">
//                   <Clock size={24} className="text-primary me-3" />
//                   <div>
//                     <h5>Store Hours</h5>
//                     <p className="text-muted mb-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
//                     <p className="text-muted mb-1">Saturday: 9:00 AM - 6:00 PM</p>
//                     <p className="text-muted mb-0">Sunday: 10:00 AM - 5:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Contact;

// <form onSubmit={handleSubmit} className="row g-3">
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Your Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Your Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <textarea
//                       className="form-control"
//                       rows="4"
//                       placeholder="Your Message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <button type="submit" className="btn btn-primary w-100">
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
