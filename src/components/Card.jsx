/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "./Card.css";
import React from "react";
import PropTypes from "prop-types";
import CartaBackside from "../assets/cardback.png";

export default function Card({
  carta, chequeoCartas, flip, flipreset, desactivarclick,
}) {
  Card.propTypes = {
    carta: PropTypes.object.isRequired,
    chequeoCartas: PropTypes.func.isRequired,
    flip: PropTypes.bool.isRequired,
    flipreset: PropTypes.bool.isRequired,
    desactivarclick: PropTypes.bool.isRequired,

  };

  const seleccionCarta = () => {
    if (!desactivarclick) {
      chequeoCartas(carta);
    }
  };

  return (
    <div className="carta">
      <div className={flip ? "flip" : ""}>
        <img className="frontside" src={carta.src} alt="Front Card" />
        <div className={flipreset ? "flipreset" : ""}>
          <img className="backside" src={CartaBackside} onClick={seleccionCarta} alt="Back Card" />
        </div>
      </div>
    </div>
  );
}
