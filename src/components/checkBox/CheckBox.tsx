import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "@/components/typography/paragraph/Paragraph";

const checkWhite =
  "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12'%3E%3Cpath d='M5.74 9.3L14.57.49l1.06 1.06-9.89 9.89-5.39-5.4 1.06-1.05L5.74 9.3z' fill='%23fff'/%3E%3C/svg%3E";
const checkGray =
  "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12'%3E%3Cpath d='M5.74 9.3L14.57.49l1.06 1.06-9.89 9.89-5.39-5.4 1.06-1.05L5.74 9.3z' fill='%23AAA'/%3E%3C/svg%3E";

type Child = number | string | JSX.Element;

export interface ICheckbox {
  value?: boolean;
  isDisabled?: boolean;
  error?: string;
  children?: Child | Child[];
  onChange?: (value: boolean) => void;
}

const StyledCheckbox = styled.label`
  display: inline-block;
  position: relative;
`;

interface IStyledLabel {
  isError: boolean;
}

const StyledLabel = styled.span<IStyledLabel>`
  display: flex;

  cursor: pointer;

  &::before {
    content: "";

    flex-shrink: 0;
    width: 24px;
    height: 24px;

    border: 1px solid #979797;
    border-radius: 5px;

    background-color: white;
    background-position: center;
    background-size: 16px;
    background-repeat: no-repeat;
  }

  &:hover {
    transition: 0.2s;
    &::before {
      border-color: #6b6969;
    }
  }
`;

interface IStyledInput {
  isError: boolean;
}

const StyledInput = styled.input<IStyledInput>`
  position: absolute;
  width: 25px;
  height: 25px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:disabled {
    + ${StyledLabel} {
      cursor: not-allowed;

      &::before {
        border-color: var(--color-gray-200);

        background-color: var(--color-gray-100);
      }
    }
  }

  &:checked {
    + ${StyledLabel} {
      &::before {
        border-color: #979797;
        background-color: #c4c4c4;
        background-image: url("${checkWhite}") !important;
      }

      &:hover {
        transition: 0.2s;
        &::before {
          border-color: #6b6969;
          background-color: #6b6969;
        }
      }
    }

    &:disabled {
      + ${StyledLabel} {
        &::before {
          border-color: var(--color-gray-200);

          background-color: var(--color-gray-100);
          background-image: url("${checkGray}");
        }
      }
    }
  }
`;

const StyledText = styled.span`
  margin-left: 16px;
`;

const StyledError = styled.div`
  margin-top: 8px;
  position: absolute;
  top: 100%;
`;

const Checkbox: React.VFC<ICheckbox> = (props): JSX.Element => {
  const {
    value = false,
    isDisabled = false,
    error,
    children,
    onChange,
  } = props;

  const [isChecked, setIsChecked] = useState(value);
  useEffect(() => setIsChecked(value), [value]);

  const isError = Boolean(error);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
    setIsChecked(checked);
    if (onChange) onChange(checked);
  };

  const color = isDisabled ? "gray-300" : "gray-400";

  return (
    <>
      <StyledCheckbox>
        <StyledInput
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          isError={isError}
          onChange={handleChange}
        />
        <StyledLabel isError={isError}>
          {children && <StyledText>{children}</StyledText>}
        </StyledLabel>
      </StyledCheckbox>

      {error && (
        <StyledError>
          <Paragraph tag="span" size={16} color="#ff9e1b">
            {error}
          </Paragraph>
        </StyledError>
      )}
    </>
  );
};

export default Checkbox;
