import PropTypes from 'prop-types';
import { Persentage, StatItem } from './StatisticItem.styled';

export function StatisticItem({ stats: { label, percentage } }) {
  return (
    <StatItem label={label}>
      <span>{label}</span>
      <Persentage>{percentage}%</Persentage>
    </StatItem>
  );
}

StatisticItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
