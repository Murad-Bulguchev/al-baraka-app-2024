import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Main.module.scss";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa6";
import Modal from "../Modal/Modal";

const Main = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="title-text"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Рассрочка без банка на <br /> товары по нормам Ислама <br />{" "}
            <span style={{ color: "#148F2B" }}> с одобрением за 15 минут</span>
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Мы работаем ежедневно с 9:00 до 21:00
            <br />
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            width={230}
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt="рассрочка без банка на товары по нормам Ислама"
            loading="lazy"
          />
        </motion.div>

        <motion.button
          onClick={() => {
            setIsOpen(true);
          }}
          variants={fadeIn("up", "tween", 0.4, 1)}
          className={css.mainCallBtn}
        >
          Получить список партнеров
        </motion.button>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">8</div>
            <div className="secondaryText">
              <div>
                ЛЕТ НАМ ДОВЕРЯЮТ БОЛЕЕ <br /> 40 000 ДОВОЛЬНЫХ КЛИЕНТОВ
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <FaRegFilePdf style={{ marginBottom: "20px" }} size={70} />
            <span>
              ОСТАВЬТЕ ЗАЯВКУ И ПОЛУЧИТЕ СРАЗУ PDF-ФАЙЛ <br />
              СО СПИСКОМ ВСЕХ НАШИХ ПАРТНЕРОВ
            </span>
          </motion.div>
        </div>
      </motion.div>
      {isOpen && (
        <Modal
          title="Оставьте заявку для получения PDF-файла со списком партнеров"
          setIsOpen={setIsOpen}
        />
      )}
    </section>
  );
};

export default Main;
