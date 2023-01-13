import styled from '@emotion/styled';

export const List = styled.ul`
  border: 3px solid brown;
  border-radius: 10px;
  padding: 5px;
`;

export const Item = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;

export const DeleteBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  :hover {
    background-color: #bda6a6;
    color: white;
  }
`;