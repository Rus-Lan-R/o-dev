import React, { useState } from "react";

import "./assets/css/styles.css";
import styled from "styled-components";
import { Card, ICardProps } from "@/components/card/Card";

const StyledContainer = styled.div`
  padding: 16px 64px;
`;

const StyledCardGrid = styled.div`
  display: grid;
  width: 400px;
  gap: 32px;
`;
const template: Omit<ICardProps, "onCheckClick">[] = [
  {
    id: 1,
    checkBoxTitle: "Become the Dungeon Master",
    description:
      "Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die!",
    tabs: [{ name: "iOS", id: 222 }],
  },
  {
    id: 2,
    checkBoxTitle: "Become the Dungeon Master",
    description:
      "Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die! Do the primary task or die!",
    tabs: [
      { name: "iOS", id: 222 },
      { name: "Android", id: 223 },
    ],
    isChecked: true,
  },
  {
    id: 3,
    checkBoxTitle: "Test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    tabs: [
      { name: "iOS", id: 222 },
      { name: "Android", id: 223 },
    ],
  },
];

const App: React.VFC = () => {
  const handleCheckClick = (id: number, value: boolean) => {
    console.log("click", id, value);
  };

  return (
    <StyledContainer>
      <StyledCardGrid>
        {template.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            tabs={item.tabs}
            checkBoxTitle={item.checkBoxTitle}
            description={item.description}
            isChecked={item.isChecked}
            onCheckClick={handleCheckClick}
          />
        ))}
      </StyledCardGrid>
    </StyledContainer>
  );
};

export default App;
