import React from "react";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import UserSearch from "./components/UserSearch";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Layout>
      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServiceCards />
      </section>

      <section id="pricing">
        <PricingTable />
      </section>

      <section id="users">
        <UserSearch />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </Layout>
  );
};

export default App;
