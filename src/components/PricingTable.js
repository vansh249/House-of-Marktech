import React from "react";

const PricingTable = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$29",
      period: "monthly",
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Support",
        "Email Integration",
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: "Professional",
      price: "$59",
      period: "monthly",
      features: [
        "15 Projects",
        "30GB Storage",
        "Priority Support",
        "Email Integration",
        "API Access",
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$99",
      period: "monthly",
      features: [
        "Unlimited Projects",
        "100GB Storage",
        "24/7 Dedicated Support",
        "Email Integration",
        "API Access",
        "Custom Solutions",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="pricing-section">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-container">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.isPopular ? "popular" : ""}`}
            key={plan.id}
          >
            {plan.isPopular && (
              <span className="popular-badge">Most Popular</span>
            )}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;