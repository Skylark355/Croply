import React from "react";
import "./AgroInputs.css";
import AgroInputsTop from "../../Components/AgroInputsTop/AgroInputsTop";
import { agro } from "../../Components/Constants";

const AgroInputs = () => {
  return (
    <div className="agro-inputs-all">
      <AgroInputsTop />

      <div className="agro-inputs">
        {agro.map((ag, id) => {
          return (
            <div key={id} className="agro-input">
              <img src={ag.image} alt="" />

              <div className="agro-input-left">
                <h3> {ag.title}</h3>
                <span>{ag.subText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgroInputs;
