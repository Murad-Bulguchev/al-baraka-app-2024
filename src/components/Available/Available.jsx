import React from "react";
import css from "./Available.module.scss";
import img1 from "../../assets/img/materials/1.jpeg";
import img2 from "../../assets/img/materials/2.jpeg";
import img3 from "../../assets/img/materials/3.jpeg";
import img4 from "../../assets/img/materials/4.jpeg";
import img6 from "../../assets/img/materials/6.jpg";
import img7 from "../../assets/img/materials/1.png";
const Available = () => {
  return (
    <div className={css.available}>
      <h1 className="primaryText"><span style={{color: '#148F2B'}}>Товары</span>, доступные для покупки в рассрочку</h1>
      <div className={`innerWidth paddings ${css.container}`}>
        
        <figure>
          <img loading="lazy" src={img1} alt="" />
          <figcaption>
            Телефоны и <br /> электроника
          </figcaption>
        </figure>
        <figure>
          <img loading="lazy" src={img2} alt="" />
          <figcaption>
            Мебель и товары <br /> для дома
          </figcaption>
        </figure>
        <figure>
          <img loading="lazy" src={img4} alt="" />
          <figcaption>
            Напольные <br /> покрытия{" "}
          </figcaption>
        </figure>
        <figure>
          <img loading="lazy" src={img3} alt="" />
          <figcaption>Обои <br /> и прочее</figcaption>
        </figure>

        <figure>
          <img loading="lazy" src={img6} alt="" />
          <figcaption>
            Автозапчасти <br />
            Шины и диски
          </figcaption>
        </figure>
        <figure>
          <img loading="lazy" src={img7} alt="" />
          <figcaption>Строительные <br /> материалы</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Available;
