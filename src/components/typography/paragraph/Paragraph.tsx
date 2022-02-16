import React from "react";
import styled, { ThemeProvider } from "styled-components";
import themes from "./themes";

type Child = number | string | JSX.Element;

export interface IParagraph {
  tag?: React.ElementType;
  size?: 10 | 16; // аналогичкно как в  тайтле можно в theme добавить еще несколько вариантов с размером шрифта и тогда здесь нужно доавить соответсв тип
  weight?: 400 | 500;
  color?: string;
  children: Child | Child[];
  className?: string;
}

interface IStyledParagraph {
  weight: 400 | 500;
  color: string;
}

const StyledParagraph = styled.div<IStyledParagraph>`
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ theme }) => theme.lineHeight};
  color: {({ color }) => color};
  transition: color 0.2s;
`;

const Paragraph: React.VFC<IParagraph> = (props): JSX.Element => {
  const {
    tag = "p",
    size = 14,
    weight = 400,
    color = "black",
    children,
    className = "",
  } = props;

  const theme = themes[size];

  return (
    <ThemeProvider theme={theme}>
      <StyledParagraph
        as={tag}
        weight={weight}
        color={color}
        className={className}
      >
        {children}
      </StyledParagraph>
    </ThemeProvider>
  );
};

export default Paragraph;
