import React from "react";
import css from "./WhoList.module.scss";
import img1 from "../../assets/img/phone/6.webp";
import img2 from "../../assets/img/phone/7.png";
import img3 from "../../assets/img/phone/8.png";
import Modal from "../Modal/Modal";

const WhoList = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="paddings" style={{ background: "white" }}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.left}>
          <h1>
            Кому подходит <br /> наша рассрочка?
          </h1>
          <ul>
            <li>
              Вы живете на территории <br /> Республики Ингушетия
            </li>
            <li>Вы достигли возраста в 21 год</li>
            <li>
              Вы имеете постоянный доход: <br /> официальный, неофициальный,{" "}
              <br /> пособие или пенсия
            </li>
          </ul>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className={css.mainCallBtn}
          >
            Оформить рассрочку
          </button>
        </div>
        <div className={css.right}>
          <img
            loading="lazy"
            className={css.img1}
            width={700}
            src={img1}
            alt="macbook"
          />
          <img
            loading="lazy"
            className={css.img2}
            width={160}
            src={img2}
            alt="wheel"
          />
          <img
            loading="lazy"
            className={css.img3}
            src={img3}
            alt="apple_whatch"
          />
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Оставьте заявку, мы свяжемся с вами для получения рассрочки"
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default WhoList;
