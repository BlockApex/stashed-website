import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import React, { FC, SyntheticEvent, useMemo } from "react";
import { Cross, Minus } from "../../assets";
import {
  AccordionSummaryStyled,
  AccordionStyled,
  FaqsWrapper,
  Heading,
  HeroTitle,
  LogoTitle,
  AccordionDetailsStyled,
} from "../styled";

const EndAdornment: FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  return (
    <img
      src={isExpanded ? Minus : Cross}
      alt="rightArrow"
      className="cursor"
      width={50}
      height={50}
    />
  );
};

const Faqs = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const accordionContent = useMemo(
    () => [
      {
        question: "What is Stashed?",
        answer:
          "Stashed is the all-in-one crypto app where you can store your tokens & digital assets, buy, sell & trade crypto, browse & buy NFTs, & explore endless apps with the click of a button. ",
      },
      {
        question: "Who is Stashed for?",
        answer: "",
      },
      {
        question: "Does Stashed have access to my crypto?",
        answer: "",
      },
      {
        question: "What if I forget my login details?",
        answer: "",
      },
      {
        question: "What is $STSH?",
        answer: "",
      },
    ],
    []
  );

  const handleChange =
    (key: number) => (event: SyntheticEvent, newExpanded: boolean) =>
      setExpanded(newExpanded ? key : false);

  return (
    <FaqsWrapper>
      <Heading>FAQ</Heading>
      {accordionContent.map((content, key) => {
        return (
          <AccordionStyled
            disableGutters={true}
            expanded={expanded === key}
            onChange={handleChange(key)}
            elevation={0}
            key={key}
          >
            <AccordionSummaryStyled
              expandIcon={<EndAdornment isExpanded={expanded === key} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="#0D0D0D" fontSize={17} fontWeight={400}>
                {content.question}
              </Typography>
            </AccordionSummaryStyled>
            <AccordionDetailsStyled>
              <Typography sx={{ opacity: 1, color: "#000" }}>
                {content.answer}
              </Typography>
            </AccordionDetailsStyled>
          </AccordionStyled>
        );
      })}
    </FaqsWrapper>
  );
};

export default Faqs;
