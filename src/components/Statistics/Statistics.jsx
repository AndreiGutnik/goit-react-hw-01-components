import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';
import { Section, StatList, Title } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatisticItem key={stat.id} stats={stat} />
        ))}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
