import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import css from "./FAQ.module.scss";

export default function AccordionExpandIcon() {
  return (
    <div className={`innerWidth ${css.faq}`}>
      <h1 className="primaryText">Ответы на вопросы</h1>
      <div className={`paddings ${css.faqContainer}`}>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Нужно ли официально работать?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Нет, официальное трудоустройство не требуется. Вы можете работать не официально, получать пенсию или пособие.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>В чем отличие от кредита?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Мы не выдаем деньги под проценты (кредит), а оформляем рассрочку на конкретный товар. В договорах нашей компании отсутствуют такие элементы как штрафы, страховки, пени, сборы, платы за погашение, а так же мы обязуемся никогда не перепродавать ваши долги коллекторским службам. Ясные и прозрачные условия заключения договоров - наше принципиальное отличие
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Обязателен ли поручитель?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Нет, не обязательно. Вам доступны тарифы как с поручителем, так и без.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Что необходимо для оформления?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Все зависит от выбранного тарифа. В большинстве случаев достаточно иметь только паспорт.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
