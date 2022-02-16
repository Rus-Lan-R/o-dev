import React from "react";
import styled from "styled-components";
import Paragraph from "../typography/paragraph/Paragraph";

export interface ITabs {
  tabs: ITab[];
}

export interface ITab {
  id: number;
  name: string;
}

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTab = styled.div`
  border: 1px solid #000000;
  opacity: 0.2;
  border-radius: 5px;
  padding: 3px 13px;
  height: 20px;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Tabs: React.VFC<ITabs> = (props) => {
  const { tabs } = props;
  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <StyledTab key={tab.id}>
          <Paragraph size={10} color="rgba(0, 0, 0, 0.6)">
            {tab.name}
          </Paragraph>
        </StyledTab>
      ))}
    </StyledTabs>
  );
};
