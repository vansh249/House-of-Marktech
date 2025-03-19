import React from "react";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web applications tailored to your specific business needs",
      icon: "🖥️",
    },
    {
      id: 2,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: "☁️",
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
