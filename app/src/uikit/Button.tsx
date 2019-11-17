import styled from 'styled-components'

interface ButtonProps {
  readonly size?: string;
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  border: 0.16em solid #05A8A1;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  color: #05A8A1;
  background: #FFF;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
  padding: ${props => props.size === 'small' ? '0.3em 0.5em' : '1em 2em'};
  font-size: ${props => props.size === 'small' ? '12px' : '14px'};

  &:hover{
    color: #FFF;
    background: #05A8A1;
  }

`

export default Button