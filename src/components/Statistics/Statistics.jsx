import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';
import css from './statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <StatisticItem stats={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
