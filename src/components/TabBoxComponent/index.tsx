import React, { FC } from "react";
import { TabBoxComponentProps as PROPS } from "../../interfaces";
import { SingleTabText, TabBox } from "../styled";

const TabBoxComponent: FC<PROPS> = ({ tabs }) => {
  return (
    <TabBox>
      {tabs.map((tab, key) => {
        return (
          <SingleTabText key={key} color="red">
            {tab}
          </SingleTabText>
        );
      })}
    </TabBox>
  );
};

export default TabBoxComponent;
