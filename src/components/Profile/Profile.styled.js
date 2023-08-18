import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 316px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 18px;
  box-shadow: 3px 3px 10px black;
`;

export const Desctiption = styled.div`
  text-align: center;
  padding: 24px 8px 0 8px;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 50%;
  border: 1px solid #b4afaf;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.16;
  letter-spacing: -0.96px;
  margin-top: 36px;
`;

export const Text = styled.p`
  line-height: 1.28;
  letter-spacing: -0.56px;
  color: #b4afaf;
  margin-top: 12px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 42px;
  border-top: 1px solid #b4afaf;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100px;
  font-size: 14px;
  color: #b4afaf;
  padding-top: 12px;
  padding-bottom: 36px;

  &:not(:last-child) {
    border-right: 1px solid #b4afaf;
  }
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  margin-top: 5px;
`;
