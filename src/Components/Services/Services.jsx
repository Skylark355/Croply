import React from "react";
import { services } from "../Constants";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {

    const navigate = useNavigate()
  return (
    <div className="services-top">
      <h1 className='title'>Services</h1>
      <div className="services" onClick={()=> {navigate("/agro-inputs")}}>
        {services.map((service, id) => {
          return (
            <div key={id} className="service-cards">
              <img src={service.Image} alt="" />
              <h3>{service.title}</h3>
              <span>{service.subText}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
