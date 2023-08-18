import styled from 'styled-components';

const itemBacground = ({ label }) => {
  switch (label) {
    case '.docx':
      return '#679bfa';
    case '.pdf':
      return 'rgb(213, 115, 231)';
    case '.mp3':
      return 'rgb(241, 111, 131)';
    case '.psd':
      return 'rgb(241, 212, 138)';
    default:
      return '#76dae9';
  }
};

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 4);
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${itemBacground};
`;

export const Persentage = styled.span`
  font-size: 24px;
`;
