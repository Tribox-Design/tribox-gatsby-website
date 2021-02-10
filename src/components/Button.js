import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#ff3333' : '#F7F7F7')};
  white-space: nowrap;
  ${'' /* padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')}; */}
  padding: ${({ big }) => (big ? '16px 36px 16px 36px' : '10px 32px')};
  color: ${({ primary }) => (primary ? '#F7F7F7' : '#ff3333')};
  font-size: ${({ big }) => (big ? '18px' : '16px')};
  outline: none;
  border: none;

  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
  
    ${'' /* background:
    linear-gradient(100deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(100deg, rgba(0,0,0,0.2) 0%, transparent 100%),
    )}; */}

    ${'' /* background: ${({ primary }) => (primary ? '#F7F7F7' : '#FC000D')}; */}
    color: ${({ primary }) => (primary ? '#ff3333' : '#ff616f')};
    ${'' /* transform: translateY(-1px); */}
  }

  @media screen and (max-width: 768px) {
    padding: ${({ big }) => (big ? '16px 32px 16px 32px' : '10px 32px')};
    font-size: ${({ big }) => (big ? '16px' : '14px')};
  }

  @media screen and (max-width: 480px) {
    padding: 10px 32px;
  }
`