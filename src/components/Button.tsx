import React, { useState } from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "theme";

interface Props {
  background?: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FunctionComponent<Props> = ({
  background,
  className,
  disabled = false,
  onClick,
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <StyledButton
      background={background}
      className={className}
      disabled={disabled}
      onClick={() => {
        onClick();
        setCount(count + 1);
      }}
    >
      {children} <CountText>{count}</CountText>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ background?: string }>`
  --base-color: ${({ background }) =>
    background ? background : colors.primary_dark};
  --accent-color: ${({ background }) =>
    background ? lighten(0.1, background) : colors.primary_accent};

  align-items: center;
  background: var(--base-color);
  border: 1px solid var(--accent-color);
  border-radius: 0.5rem;
  color: var(--primary-light);
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  text-align: center;
  transition: background 0.2s ease;
  transform-origin: center;
  width: 200px;

  &[disabled] {
    border-color: ${colors.primary_grey};
    color: ${colors.primary_grey};
    cursor: not-allowed;
  }

  &:not([disabled]) {
    &:hover,
    :focus {
      background: var(--accent-color);
    }

    &:focus {
      outline: 1px solid var(--accent-color);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

const CountText = styled.p`
  display: inline;
  margin-left: 0.5rem;
`;

export default Button;
