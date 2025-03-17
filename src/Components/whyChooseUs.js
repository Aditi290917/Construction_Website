import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FaUsers, FaTools, FaTag, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Experienced & Skilled Team",
      description:
        "Our team is highly experienced and skilled in providing top-notch solutions.",
      icon: <FaUsers />,
      backgroundColor: "#007bff",
    },
    {
      title: "Quality Materials & Workmanship",
      description:
        "We use the best materials and deliver unmatched craftsmanship for every project.",
      icon: <FaTools />,
      backgroundColor: "#28a745",
    },
    {
      title: "Competitive Pricing",
      description:
        "We provide cost-effective solutions without compromising on quality.",
      icon: <FaTag />,
      backgroundColor: "#ffc107",
    },
    {
      title: "Excellent Customer Service",
      description:
        "We prioritize our customers and ensure excellent support every step of the way.",
      icon: <FaHeadset />,
      backgroundColor: "#17a2b8",
    },
  ];

  return (
    <div
      className="why-choose-us-section"
      style={{
        padding: "4rem 1rem",
        background: "linear-gradient(135deg, #e0f7fa, #f9f9f9)",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            color: "#333",
            letterSpacing: "0.5px",
          }}
        >
          Why Choose Us
        </h2>
        <Row className="justify-content-center">
          {cards.map((item, index) => (
            <Col
              lg="3"
              md="6"
              sm="12"
              key={index}
              className="d-flex justify-content-center mb-4"
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  minHeight: "320px", // Fixed card height
                  padding: "25px",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: item.backgroundColor,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.8rem",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
                <h3
                  style={{
                    fontWeight: "600",
                    marginBottom: "15px",
                    color: "#333",
                    fontSize: "1.3rem", // Reduced title size
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
