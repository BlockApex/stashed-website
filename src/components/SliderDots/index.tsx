import React, { FC } from "react";

import { SliderDot, SliderDotWrapper } from "../styled";

const SliderDots: FC<{
  SectionReference: {
    ref: React.MutableRefObject<null>;
    activeColor: string;
  }[];

  currentIndex: number;
}> = ({ SectionReference, currentIndex }) => {
  const onClick = (elementRef: any) => {
    window.scrollTo({
      // @ts-ignore
      top: elementRef?.current?.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <SliderDotWrapper>
      {SectionReference.map((element, index) => {
        return (
          <SliderDot
            onClick={() => onClick(element.ref)}
            className="dots"
            style={{
              background: currentIndex === index ? element.activeColor : "",
            }}
          />
        );
      })}
    </SliderDotWrapper>
  );
};

export default SliderDots;
