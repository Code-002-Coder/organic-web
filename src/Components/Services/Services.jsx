import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";

const Services = () => {
  return (
    <>
    <Navbar />
    <div className="min-vh-100 my-5 bg-light ">
      {/* Services Content */}
      <main className="container my-5 ">
        {/* Title */}
        <div className="text-center my-5 mb-5">
          <h1 className="fw-bold">Our Services</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            At OrganicShop, we go beyond just selling organic products. We
            provide services that help you live a healthier lifestyle and make
            sustainable choices every day.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <img
                src="https://img.icons8.com/color/96/vegetarian-food.png"
                alt="Fresh Organic Delivery"
                className="mx-auto mb-3"
              />
              <h5 className="fw-semibold mb-2">Fresh Organic Delivery</h5>
              <p className="text-muted">
                Get farm-fresh organic fruits and vegetables delivered to your
                doorstep weekly.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <img
                src="https://img.icons8.com/color/96/online-support.png"
                alt="Nutrition Consultation"
                className="mx-auto mb-3"
              />
              <h5 className="fw-semibold mb-2">Nutrition Consultation</h5>
              <p className="text-muted">
                Our experts provide personalized diet plans and guidance for
                healthier living.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <img
                src="https://img.icons8.com/color/96/farm.png"
                alt="Farm Tours"
                className="mx-auto mb-3"
              />
              <h5 className="fw-semibold mb-2">Farm Tours</h5>
              <p className="text-muted">
                Visit our farms to see organic farming practices in action and
                connect with nature.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <img
                src="https://img.icons8.com/color/96/training.png"
                alt="Workshops & Training"
                className="mx-auto mb-3"
              />
              <h5 className="fw-semibold mb-2">Workshops & Training</h5>
              <p className="text-muted">
                Learn sustainable living, organic farming, and healthy cooking
                through our workshops.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <img
                src="https://img.icons8.com/color/96/delivery.png"
                alt="Eco-friendly Packaging"
                className="mx-auto mb-3"
              />
              <h5 className="fw-semibold mb-2">Eco-friendly Packaging</h5>
              <p className="text-muted">
                All our products are packed using biodegradable and recyclable
                materials.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <img
                src="https://img.icons8.com/color/96/handshake.png"
                alt="Community Support"
                className="mx-auto mb-3"
              />
              <h5 className="fw-semibold mb-2">Community Support</h5>
              <p className="text-muted">
                We support local farmers and donate part of our profits to
                community welfare programs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div></>

  );
};

export default Services;






























// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../Navbar/Navbar";

// const Services = () => {
//   return (
//     <div className="min-vh-100 bg-light">
//         <Navbar />
//       {/* Navbar
//       <Navbar bg="white" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="/" className="fw-bold text-success">
//             OrganicShop
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/about">About</Nav.Link>
//               <Nav.Link href="/services" className="active">
//                 Services
//               </Nav.Link>
//               <Nav.Link href="/products">Products</Nav.Link>
//               <Nav.Link href="/contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar> */}

//       {/* Services Content */}
//       <main className="container py-5">
//         {/* Title */}
//         <div className="text-center mb-5">
//           <h1 className="fw-bold">Our Services</h1>
//           <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
//             At OrganicShop, we go beyond just selling organic products. We
//             provide services that help you live a healthier lifestyle and make
//             sustainable choices every day.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="row g-4">
//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm p-4 text-center">
//               <img
//                 src="https://img.icons8.com/color/96/vegetarian-food.png"
//                 alt="Fresh Organic Delivery"
//                 className="mx-auto mb-3"
//               />
//               <h5 className="fw-semibold mb-2">Fresh Organic Delivery</h5>
//               <p className="text-muted">
//                 Get farm-fresh organic fruits and vegetables delivered to your
//                 doorstep weekly.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm p-4 text-center">
//               <img
//                 src="https://img.icons8.com/color/96/online-support.png"
//                 alt="Nutrition Consultation"
//                 className="mx-auto mb-3"
//               />
//               <h5 className="fw-semibold mb-2">Nutrition Consultation</h5>
//               <p className="text-muted">
//                 Our experts provide personalized diet plans and guidance for
//                 healthier living.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm p-4 text-center">
//               <img
//                 src="https://img.icons8.com/color/96/farm.png"
//                 alt="Farm Tours"
//                 className="mx-auto mb-3"
//               />
//               <h5 className="fw-semibold mb-2">Farm Tours</h5>
//               <p className="text-muted">
//                 Visit our farms to see organic farming practices in action and
//                 connect with nature.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm p-4 text-center">
//               <img
//                 src="https://img.icons8.com/color/96/training.png"
//                 alt="Workshops & Training"
//                 className="mx-auto mb-3"
//               />
//               <h5 className="fw-semibold mb-2">Workshops & Training</h5>
//               <p className="text-muted">
//                 Learn sustainable living, organic farming, and healthy cooking
//                 through our workshops.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm p-4 text-center">
//               <img
//                 src="https://img.icons8.com/color/96/delivery.png"
//                 alt="Eco-friendly Packaging"
//                 className="mx-auto mb-3"
//               />
//               <h5 className="fw-semibold mb-2">Eco-friendly Packaging</h5>
//               <p className="text-muted">
//                 All our products are packed using biodegradable and recyclable
//                 materials.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm p-4 text-center">
//               <img
//                 src="https://img.icons8.com/color/96/handshake.png"
//                 alt="Community Support"
//                 className="mx-auto mb-3"
//               />
//               <h5 className="fw-semibold mb-2">Community Support</h5>
//               <p className="text-muted">
//                 We support local farmers and donate part of our profits to
//                 community welfare programs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Services;
