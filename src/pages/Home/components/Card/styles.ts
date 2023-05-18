import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors['violet-500']};
  color: ${({ theme }) => theme.colors['base-white']};
  transition: 0.3s;

  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px ${({ theme }) => theme.colors['brand-purple-dark']};
    background-color: ${({ theme }) => theme.colors['violet-700']};
  }

  &:hover {
    transform: scale(1.01);
  }
`
