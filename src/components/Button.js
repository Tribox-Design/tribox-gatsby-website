import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#FC000D' : '#F7F7F7')};
  white-space: nowrap;
  ${'' /* padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')}; */}
  padding: ${({ big }) => (big ? '18px 40px 12px 40px' : '10px 32px')};
  color: ${({ primary }) => (primary ? '#F7F7F7' : '#FC000D')};
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;

  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? '#F7F7F7' : '#FC000D')};
    color: ${({ primary }) => (primary ? '#FC000D' : '#F7F7F7')};
    transform: translateY(-2px);
  }
`