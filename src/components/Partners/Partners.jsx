import React from "react";
import { partners, sliderSettings } from "../../utils/data";
import css from "./Partners.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Partners = () => {
  return (
    <div style={{ background: "white" }}>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        section
        className={`paddings ${css.wrapper}`}
      >
        <a className="anchor" id="partner"></a>

        <motion.div
          variants={footerVariants}
          className={`yPaddings innerWidth ${css.container}`}
        >
          <div className={`flexCenter ${css.heading}`}>
            <h1 className="primaryText">Наши партнеры</h1>
          </div>

          <div className={`yPaddings ${css.comments}`}>
            <Slider {...sliderSettings} className={css.slider}>
              {partners.map((partner, i) => {
                return (
                  <div key={i} className={`flexCenter ${css.comment}`}>
                    <div className={css.imgWrapper}>
                      <img
                        loading="lazy"
                        src={partner.img}
                        alt="партнеры al-baraka"
                      />
                    </div>
                    <div className={css.info}>
                      <p className={css.partnerTitle}>{partner.title}</p>
                      <hr />
                      <div className={css.description}>
                        <p>{partner.data.industry}</p>
                        {partner.data.inst ? (
                          <a
                            href={`https://instagram.com/${partner.data.inst}`}
                          >
                            @{partner.data.inst}
                          </a>
                        ) : (
                          ""
                        )}
                        <a href={`tel:${partner.data.tel}`}>
                          {partner.data.tel}
                        </a>
                        <p>{partner.data.time}</p>
                        <p>{partner.data.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Partners;
