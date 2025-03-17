// import React from "react";
// import {
//   FaWater,
//   FaBath,
//   FaBuilding,
//   FaPaintRoller,
//   FaShieldAlt,
//   FaTools,
// } from "react-icons/fa"; // Import icons

// const ServiceCard = ({ title, Icon, iconColor, style }) => {
//   return (
//     <div
//       style={{
//         width: "140px",
//         height: "120px",
//         borderRadius: "15px",
//         position: "absolute",
//         background: `linear-gradient(
//           90deg,
//           rgba(255, 182, 193, 0.8),
//           rgba(173, 216, 230, 0.8),
//           rgba(144, 238, 144, 0.8),
//           rgba(255, 239, 213, 0.8),
//           rgba(221, 160, 221, 0.8)
//         )`,
//         backgroundSize: "300% 300%",
//         animation: "borderMove 3s linear infinite",
//         padding: "3px", // Padding for the inner card
//         ...style,
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#fff",
//           borderRadius: "12px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           fontWeight: "bold",
//           fontSize: "14px",
//         }}
//       >
//         {/* Icon */}
//         <Icon size={30} style={{ marginBottom: "8px", color: iconColor }} />
//         {title}
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "650px",
//         height: "650px",
//         margin: "50px auto",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* Outer Circle */}
//       <div
//         style={{
//           position: "absolute",
//           width: "580px",
//           height: "580px",
//           border: "3px solid rgba(0, 123, 255, 0.2)", // Faint solid circle
//           borderRadius: "50%",
//           zIndex: 0, // Ensure it stays behind the service cards
//         }}
//       ></div>

//       {/* Heading */}
//       <h2
//         style={{
//           position: "absolute",
//           top: "-70px",
//           fontSize: "28px",
//           fontWeight: "bold",
//           textAlign: "center",
//           color: "#333",
//         }}
//       >
//         Our Services
//       </h2>

//       {/* Central Logo */}
//       <div
//         style={{
//           width: "150px",
//           height: "150px",
//           backgroundColor: "#fff",
//           border: "3px solid rgba(0, 123, 255, 0.5)",
//           borderRadius: "20%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           fontWeight: "bold",
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//           zIndex: 1, // Ensure it stays above the outer circle
//         }}
//       >
//         <div>
//           <img
//             src="Logo.png"
//             alt="Logo"
//             style={{
//               width: "60px",
//               height: "60px",
//               marginBottom: "10px",
//             }}
//           />
//           <p style={{ margin: "0", fontSize: "18px", color: "rgba(0, 123, 255, 0.8)" }}>
//             StrucProof
//           </p>
//         </div>
//       </div>

//       {/* Service Cards */}
//       <ServiceCard
//         title="Roof Waterproofing"
//         Icon={FaWater}
//         iconColor="#1E90FF" // Blue for water theme
//         style={{
//           top: "10%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//       <ServiceCard
//         title="W.C. & Bathroom Waterproofing"
//         Icon={FaBath}
//         iconColor="#FF69B4" // Pink for bathroom theme
//         style={{
//           top: "30%",
//           right: "10%",
//           transform: "translate(50%, -50%)",
//         }}
//       />
//       <ServiceCard
//         title="Basement Waterproofing"
//         Icon={FaBuilding}
//         iconColor="#8B4513" // Brown for building foundation
//         style={{
//           bottom: "30%",
//           right: "10%",
//           transform: "translate(50%, 50%)",
//         }}
//       />
//       <ServiceCard
//         title="Wall Waterproofing"
//         Icon={FaPaintRoller}
//         iconColor="#20B2AA" // Light sea green for painting
//         style={{
//           bottom: "10%",
//           left: "50%",
//           transform: "translate(-50%, 50%)",
//         }}
//       />
//       <ServiceCard
//         title="Foundation Waterproofing"
//         Icon={FaShieldAlt}
//         iconColor="#FFD700" // Gold for protection
//         style={{
//           bottom: "30%",
//           left: "10%",
//           transform: "translate(-50%, 50%)",
//         }}
//       />
//       <ServiceCard
//         title="Leak Detection and Repair"
//         Icon={FaTools}
//         iconColor="#DC143C" // Crimson for repair tools
//         style={{
//           top: "30%",
//           left: "10%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//     </div>
//   );
// };

// /* CSS for Moving Border Animation */
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes borderMove {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;
// document.head.appendChild(style);

// export default Services;

// import React from "react";
// import {
//   FaWater,
//   FaBath,
//   FaBuilding,
//   FaPaintRoller,
//   FaShieldAlt,
//   FaTools,
// } from "react-icons/fa"; // Import icons

// const ServiceCard = ({ title, Icon, iconColor }) => {
//   return (
//     <div
//       style={{
//         width: "180px",
//         height: "150px",
//         borderRadius: "15px",
//         background: `linear-gradient(
//           90deg,
//           rgba(255, 182, 193, 0.8),
//           rgba(173, 216, 230, 0.8),
//           rgba(144, 238, 144, 0.8),
//           rgba(255, 239, 213, 0.8),
//           rgba(221, 160, 221, 0.8)
//         )`,
//         backgroundSize: "300% 300%",
//         animation: "borderMove 3s linear infinite",
//         padding: "3px", // Padding for the inner card
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#fff",
//           borderRadius: "12px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           fontWeight: "bold",
//           fontSize: "18px",
//         }}
//       >
//         {/* Icon */}
//         <Icon size={35} style={{ marginBottom: "8px", color: iconColor }} />
//         {title}
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "850px",
//         margin: "50px auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
//       }}
//     >
//       {/* Heading */}
//       <h2
//         style={{
//           width: "100%",
//           textAlign: "center",
//           fontSize: "28px",
//           fontWeight: "bold",
//           color: "#333",
//         }}
//       >
//         Our Services
//       </h2>

//       {/* Central Logo */}
//       <div
//         style={{
//           width: "150px",
//           height: "150px",
//           backgroundColor: "#fff",
//           border: "3px solid rgba(0, 123, 255, 0.5)",
//           borderRadius: "20%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           fontWeight: "bold",
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <div>
//           <img
//             src="Logo.png"
//             alt="Logo"
//             style={{
//               width: "60px",
//               height: "60px",
//               marginBottom: "10px",
//             }}
//           />
//           <p style={{ margin: "0", fontSize: "18px", color: "rgba(0, 123, 255, 0.8)" }}>
//             StrucProof
//           </p>
//         </div>
//       </div>

//       {/* Service Cards */}
//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "20px",
//         justifyContent: "center",
//       }}>
//         <ServiceCard
//           title="Roof Waterproofing"
//           Icon={FaWater}
//           iconColor="#1E90FF" // Blue for water theme
//         />
//         <ServiceCard
//           title="W.C. & Bathroom Waterproofing"
//           Icon={FaBath}
//           iconColor="#FF69B4" // Pink for bathroom theme
//         />
//         <ServiceCard
//           title="Basement Waterproofing"
//           Icon={FaBuilding}
//           iconColor="#8B4513" // Brown for building foundation
//         />
//         <ServiceCard
//           title="Wall Waterproofing"
//           Icon={FaPaintRoller}
//           iconColor="#20B2AA" // Light sea green for painting
//         />
//         <ServiceCard
//           title="Foundation Waterproofing"
//           Icon={FaShieldAlt}
//           iconColor="#FFD700" // Gold for protection
//         />
//         <ServiceCard
//           title="Leak Detection and Repair"
//           Icon={FaTools}
//           iconColor="#DC143C" // Crimson for repair tools
//         />
//       </div>
//     </div>
//   );
// };

// /* CSS for Moving Border Animation */
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes borderMove {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }

//   @media (max-width: 768px) {
//     div[style*="wrap"] {
//       flex-direction: column;
//       align-items: center;
//     }
//   }
// `;
// document.head.appendChild(style);

// export default Services;
import React from "react";
import { motion } from "framer-motion";
import {
  FaWater,
  FaBath,
  FaBuilding,
  FaPaintRoller,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const ServiceCard = ({ title, Icon, iconColor, index }) => {
  return (
<motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
      style={{
        width: "180px",
        height: "150px",
        borderRadius: "15px",
        background: `linear-gradient(
          90deg,
          rgba(255, 182, 193, 0.8),
          rgba(173, 216, 230, 0.8),
          rgba(144, 238, 144, 0.8),
          rgba(255, 239, 213, 0.8),
          rgba(221, 160, 221, 0.8)
        )`,
        backgroundSize: "300% 300%",
        animation: "gradientMove 3s linear infinite",
        padding: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <Icon size={35} style={{ marginBottom: "8px", color: iconColor }} />
        {title}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const serviceData = [
    { title: "Roof Waterproofing", Icon: FaWater, color: "#1E90FF" },
    { title: "W.C. & Bathroom Waterproofing", Icon: FaBath, color: "#FF69B4" },
    { title: "Basement Waterproofing", Icon: FaBuilding, color: "#8B4513" },
    { title: "Wall Waterproofing", Icon: FaPaintRoller, color: "#20B2AA" },
    { title: "Foundation Waterproofing", Icon: FaShieldAlt, color: "#FFD700" },
    { title: "Leak Detection and Repair", Icon: FaTools, color: "#DC143C" },
  ];

  return (

    <div
    style={{
      width: "100%",
        maxWidth: "1200px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",

    }}>
    <div
      id="services"
      style={{
        width: "100%",
        maxWidth: "850px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Our Services
      </motion.h2>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#fff",
          border: "3px solid rgba(0, 123, 255, 0.5)",
          borderRadius: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div>
          <img
            src="Logo.png"
            alt="Logo"
            style={{
              width: "60px",
              height: "60px",
              marginBottom: "10px",
            }}
          />
          <p style={{ margin: "0", fontSize: "18px", color: "rgba(0, 123, 255, 0.8)" }}>
            StrucProof
          </p>
        </div>
      </motion.div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            Icon={service.Icon}
            iconColor={service.color}
            index={index}
          />
        ))}
      </div>

      {/* New Layout Section */}
     

    </div>

   


    </div>

    
    
  );
};

export default Services;
