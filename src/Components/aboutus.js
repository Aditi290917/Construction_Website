import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#0066cc",
          textTransform: "uppercase",
        }}
      >
        About Us
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px" }}>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Welcome to <strong>StrucProof</strong>, your trusted partner in
          building waterproofing solutions. We specialize in providing top-notch
          services to protect your structures from water damage. Our team of
          experts uses cutting-edge technology to ensure your buildings remain
          safe, secure, and dry.
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          At <strong>StrucProof</strong>, our mission is to deliver exceptional
          waterproofing solutions that exceed our clients' expectations. We
          value quality, reliability, and customer satisfaction, and strive to
          be the go-to waterproofing experts in the industry.
        </p>
      </div>

      {/* Image */}
      
    </section>
  );
};

export default AboutUs;
