import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';
//color
const colorStyles = css`
  ${({theme, color}) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;
const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.4rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1.25rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({size}) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;
const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  ${sizeStyles}

  ${colorStyles}

  ${fullWidthStyle}
& + & {
    margin-left: 1rem;
  }
`;
const Button = ({children, color, size, fullWidth, ...rest}) => {
  return (
    <StyledButton color={color} size={size} fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};
export default Button;
