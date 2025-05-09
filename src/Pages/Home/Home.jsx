import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Blogs from "../../Components/Blogs/Blogs";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div>
      <Navbar onOpenModal={openModal} />
      <Hero />
      <About />
      <Blogs />
      <Footer />

      {showModal && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Home;
