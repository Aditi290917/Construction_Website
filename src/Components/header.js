// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSection = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);
//   const [navFontSize, setNavFontSize] = useState("1rem"); // Default font size

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     const handleResize = () => {
//       if (window.innerWidth > 1024) {
//         setNavFontSize("1.25rem"); // Larger font size for laptops
//       } else {
//         setNavFontSize("1rem"); // Default font size for smaller screens
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     // Initial setup
//     handleResize();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const images = [
//     "HeroImage1.jpg",
//     "HeroImage2.jpg",
//     "HeroImage3.jpg",
//     "HeroImage4.jpg",
//     "HeroImage5.jpg",
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     cssEase: "ease-in-out",
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       {/* Navbar */}
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           width: "100%",
//           zIndex: 1000,
//           backgroundColor: isScrolled ? "white" : "rgba(0, 0, 0, 0.1)",
//           transition: "background-color 0.3s ease-in-out",
//           boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "20px 20px",
//             color: isScrolled ? "black" : "white",
//             boxSizing: "border-box",
//           }}
//         >
//           {/* Logo and Brand Name */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             <img
//               src="Logo.png"
//               alt="StrucProof Logo"
//               style={{
//                 height: "60px",
//                 width: "0px",
//                 objectFit: "contain",
//               }}
//             />
//             <div
//               style={{
//                 fontSize: "1.5rem",
//                 fontWeight: "bold",
//               }}
//             >
//               StrucProof
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <ul
//             style={{
//               display: "flex",
//               listStyle: "none",
//               gap: "40px",
//               margin: 0,
//               padding: 0,
//               display: window.innerWidth > 768 ? "flex" : "none",
//               fontSize: navFontSize, // Dynamic font size
//             }}
//           >
//             <li>
//               <a
//                 href="#home"
//                 style={{
//                   color: isScrolled ? "black" : "white",
//                   textDecoration: "none",
//                 }}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 style={{
//                   color: isScrolled ? "black" : "white",
//                   textDecoration: "none",
//                 }}
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 style={{
//                   color: isScrolled ? "black" : "white",
//                   textDecoration: "none",
//                 }}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 style={{
//                   color: isScrolled ? "black" : "white",
//                   textDecoration: "none",
//                 }}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>

//           {/* Hamburger Icon for Mobile */}
//           <div
//             onClick={toggleDrawer}
//             style={{
//               display: window.innerWidth <= 768 ? "block" : "none",
//               fontSize: "1.5rem",
//               cursor: "pointer",
//             }}
//           >
//             ☰
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       {isDrawerOpen && (
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             width: "250px",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.9)",
//             color: "white",
//             display: "flex",
//             flexDirection: "column",
//             padding: "20px",
//             zIndex: 2000,
//           }}
//         >
//           <div
//             style={{
//               marginBottom: "20px",
//               fontSize: "1.5rem",
//               fontWeight: "bold",
//               cursor: "pointer",
//               textAlign: "right",
//             }}
//             onClick={toggleDrawer}
//           >
//             ✕
//           </div>
//           <a
//             href="#home"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               marginBottom: "20px",
//             }}
//           >
//             Home
//           </a>
//           <a
//             href="#services"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               marginBottom: "20px",
//             }}
//           >
//             Services
//           </a>
//           <a
//             href="#about"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               marginBottom: "20px",
//             }}
//           >
//             About
//           </a>
//           <a
//             href="#contact"
//             style={{
//               color: "white",
//               textDecoration: "none",
//             }}
//           >
//             Contact
//           </a>
//         </div>
//       )}

//       {/* Hero Section with Slider */}
//       <Slider {...sliderSettings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <div
//               style={{
//                 position: "relative",
//                 height: "90vh",
//                 background: `url(${image}) no-repeat center center/cover`,
//                 display: "flex",
//                 alignItems: "flex-end",
//                 justifyContent: "flex-start",
//                 padding: "0 30px 50px",
//                 color: "white",
//                 textAlign: "left",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   backgroundColor: "rgba(0, 0, 0, 0.6)",
//                 }}
//               ></div>
//               <div style={{ position: "relative", zIndex: 1 }}>
//                 <h1 style={{ fontSize: "3rem" }}>StrucProof</h1>
//                 <p style={{ fontSize: "2rem" }}>
//                   Building Waterproofing & Consultant
//                 </p>
//                 <p style={{ fontSize: "1.2rem" }}>
//                   Protect Your Tomorrow, Today! <br />
//                   Say Goodbye to Leak-Related Worries and <br />
//                   Expenses with Our Cost-Effective, Long-Lasting Waterproofing
//                   Solutions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [navFontSize, setNavFontSize] = useState("1rem"); // Default font size

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setNavFontSize("1.25rem"); // Larger font size for laptops
      } else {
        setNavFontSize("1rem"); // Default font size for smaller screens
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    "HeroImage1.jpg",
    "HeroImage2.jpg",
    "HeroImage3.jpg",
    "HeroImage4.jpg",
    "HeroImage5.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: isScrolled ? "white" : "rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 20px",
            color: isScrolled ? "black" : "white",
            boxSizing: "border-box",
          }}
        >
          {/* Logo and Brand Name */}
          {/* Logo and Brand Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="Logo.png"
              alt="StrucProof Logo"
              style={{
                height: "60px",
                width: "60px",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              StrucProof
            </div>
          </div>

          {/* Desktop Menu */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "40px",
              margin: 0,
              padding: 0,
              display: window.innerWidth > 768 ? "flex" : "none",
              fontSize: navFontSize, // Dynamic font size
            }}
          >
            <li>
              <a
                href="#home"
                style={{
                  color: isScrolled ? "black" : "white",
                  textDecoration: "none",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                style={{
                  color: isScrolled ? "black" : "white",
                  textDecoration: "none",
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{
                  color: isScrolled ? "black" : "white",
                  textDecoration: "none",
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{
                  color: isScrolled ? "black" : "white",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div
            onClick={toggleDrawer}
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "250px",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              textAlign: "right",
            }}
            onClick={toggleDrawer}
          >
            ✕
          </div>
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            Home
          </a>
          <a
            href="#services"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            Services
          </a>
          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      )}

      {/* Hero Section */}
      {/* Hero Section */}
<div style={{ position: "relative", height: "90vh" }}>
  {/* Background Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
      zIndex: 1,
    }}
  ></div>

  {/* Fixed Content */}
  <div
    style={{
      position: "absolute",
      top: "70%",
      left: "5%",
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "white",
      textAlign: "left",
    }}
  >
    <h1 style={{ fontSize: "3rem", lineHeight: "1" }}>STRUCPROOF</h1>
<p style={{ fontSize: "2rem", lineHeight: "2" }}>
  {/* Building Waterproofing & Consultant */}
  BUILDING WATERPROFFING & CONSULTANT
</p>
<p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
  Protect Your Tomorrow, Today! <br />
  Say Goodbye to Leak-Related Worries and <br />
  Expenses with Our Cost-Effective, Long-Lasting Waterproofing
  Solutions.
</p>

  </div>

  {/* Slider */}
  <Slider {...sliderSettings}>
    {images.map((image, index) => (
      <div key={index}>
        <div
          style={{
            height: "90vh",
            background: `url(${image}) no-repeat center center/cover`,
          }}
        ></div>
      </div>
    ))}
  </Slider>
</div>
</div>
  );
};

export default HeroSection;
