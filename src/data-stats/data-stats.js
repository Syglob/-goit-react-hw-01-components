import PropTypes from 'prop-types';
import styles from './data-stats.module.css';
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const DataStats = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList }>
        {stats.map(item => (
          <li key={item.id} className={styles.item } style={{backgroundColor: getRandomColor(item) }}>
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
