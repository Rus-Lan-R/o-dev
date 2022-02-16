import React from "react";
import styled from "styled-components";
import CheckBox from "@/components/checkBox/CheckBox";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import Title from "@/components/typography/title/Title";
import { Tabs, ITab } from "@/components/card/Tabs";

export interface ICardProps {
  id: number;
  checkBoxTitle: string;
  description: string;
  isChecked?: boolean;
  tabs: ITab[];
  onCheckClick: (id: number, value: boolean) => void;
}

const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 30px 41px 30px 30px;
`;
const StyledDescription = styled.div`
  height: 172px;
  overflow: auto;
  margin-bottom: 36px;
`;

const WrappedCardBody = styled.div`
  margin-left: 41px;
`;

const CheckBoxWrapper = styled.div`
  margin-bottom: 10px;
`;
export const Card: React.VFC<ICardProps> = (props) => {
  const {
    id,
    tabs,
    checkBoxTitle,
    description,
    isChecked = false,
    onCheckClick,
  } = props;
  return (
    <StyledCard>
      <CheckBoxWrapper>
        <CheckBox
          value={isChecked}
          onChange={(value) => onCheckClick(id, value)}
        >
          <Title level={5}>{checkBoxTitle || ""}</Title>
        </CheckBox>
      </CheckBoxWrapper>
      <WrappedCardBody>
        <StyledDescription>
          <Paragraph size={16} weight={500}>
            {description || ""}
          </Paragraph>
        </StyledDescription>
        <Tabs tabs={tabs} />
      </WrappedCardBody>
    </StyledCard>
  );
};
