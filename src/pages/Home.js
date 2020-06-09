import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        ></Banner>
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Hero>
      //implmenting services component
      <Services></Services>
      <FeaturedRooms></FeaturedRooms>
    </>
  );
}
