import PropTypes from 'prop-types';
import styles from './data-stats.module.css';
import getRandomColor from '../utils/randomColor.js';
const DataStats = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <ul className={styles.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor(item) }}
          >
            <span className="">{item.label}</span>
            <span className="">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

DataStats.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default DataStats;
