import { Typography } from "@mui/material";
import React, { FC, SyntheticEvent, useMemo } from "react";
import { Cross, Minus, StashedSymbol } from "../../assets";
import {
  AccordionSummaryStyled,
  AccordionStyled,
  FaqsWrapper,
  Heading,
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
        answer:
          "No, Stashed never has access to your funds. Stashed uses non-custodial technology, which means that you have full control over your crypto.",
      },
      {
        question: "What if I forget my login details?",
        answer:
          "Don’t worry! Stashed sets up a unique recovery method when you sign up, which means that you can recover with just two of your recovery shares; your gmail, backup password, & phone number.",
      },
      {
        question: "What is $STSH?",
        answer:
          "$STSH is the token for Stashed, which can be used to pay for gas on any chain, gives you discounts on purchases + gives you cashback whenever you pay for transactions in $STSH! Coming soon!",
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
              <img src={StashedSymbol} alt="stashedSymbol" />
              <Typography
                sx={{ opacity: 1, color: "#000" }}
                ml={2}
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ xs: 0, sm: 2 }}
              >
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
