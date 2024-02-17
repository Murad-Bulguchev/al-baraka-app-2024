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
      <h1 className="primaryText">
        <span style={{ color: "#148F2B" }}>Товары</span>, доступные для покупки
        в рассрочку
      </h1>
      <div className={`innerWidth paddings ${css.container}`}>
        <figure>
          <img
            loading="lazy"
            src={img1}
            alt="купить телефоны и эллектронику в рассрочку"
          />
          <figcaption>
            Телефоны и <br /> электроника
          </figcaption>
        </figure>
        <figure>
          <img
            loading="lazy"
            src={img2}
            alt="купить мебель и товары для дома в рассрочку"
          />
          <figcaption>
            Мебель и товары <br /> для дома
          </figcaption>
        </figure>
        <figure>
          <img
            loading="lazy"
            src={img4}
            alt="купить нопольные покрытия в рассрочку"
          />
          <figcaption>
            Напольные <br /> покрытия{" "}
          </figcaption>
        </figure>
        <figure>
          <img loading="lazy" src={img3} alt="купить обои в рассрочку" />
          <figcaption>
            Обои <br /> и прочее
          </figcaption>
        </figure>

        <figure>
          <img
            loading="lazy"
            src={img6}
            alt="купить автозапчасти, шины и диски в рассрочку"
          />
          <figcaption>
            Автозапчасти <br />
            Шины и диски
          </figcaption>
        </figure>
        <figure>
          <img
            loading="lazy"
            src={img7}
            alt="купить строительные материалы в рассрочку"
          />
          <figcaption>
            Строительные <br /> материалы
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Available;
