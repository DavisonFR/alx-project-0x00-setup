import React from "react";
import Card from "../components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to Our Listings</h1>
      <Card />
      <Card />
      <Card /> {/* Duplicate to test reusability */}
    </div>
  );
};

export default Landing;
