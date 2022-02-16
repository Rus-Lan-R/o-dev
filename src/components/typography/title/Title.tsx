import React from "react";
import styled, { ThemeProvider } from "styled-components";
import themes from "./themes";

type Level = 5; // можно в theme добавить еще несколько вариантов с размером шрифта и тогда здесь нужно доавить соответсв тип
type Child = number | string | JSX.Element;

export interface ITitle {
  level: Level;
  color?: string;
  className?: string;
  children: Child | Child[];
}

interface IStyledTitle {
  level: Level;
  color: string;
}

const StyledTitle = styled.div<IStyledTitle>`
  font-size: ${({ theme }) => theme.fontSize};
  /* font-weight: 500; */
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ color }) => color};
  transition: color 0.2s;
`;

const Title: React.VFC<ITitle> = (props): JSX.Element => {
  const { level, color = "black", children, className } = props;
  const theme = themes[level];
  const tags: React.ElementType[] = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const tag = tags[level - 1];

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle className={className} as={tag} level={level} color={color}>
        {children}
      </StyledTitle>
    </ThemeProvider>
  );
};

export default Title;
