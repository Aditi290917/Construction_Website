import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Nerolac", logo: "nerolac.png" },
 
  { name: "Dr. Fixit", logo: "drfixit.png" },
  { name: "Fosroc", logo: "fosroc.png" },
  { name: "Sunanda", logo: "sunanda.png" },
  { name: "Roff", logo: "roff.png" },
  { name: "Neoproof", logo: "neoproof.png" },
];

const CompanyProducts = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          
          marginBottom: "20px",
          textTransform: "uppercase",

        }}
      >
        Company Products We Use
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{
              width: "150px",
              height: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={company.logo}
              alt={company.name}
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProducts;