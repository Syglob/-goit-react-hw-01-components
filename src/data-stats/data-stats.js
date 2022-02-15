import PropTypes from 'prop-types';

// const DataStats = (title, stats) => (
//   <section className="statistics">
//     <h2 className="title">Upload stats</h2>
//     <ul className="stat-list">
//       <li className="item">
//         <span className="label">{data[0].label}</span>
//         <span className="percentage">{data[0].percentage}</span>
//       </li>
//       <li className="item">
//         <span className="label">{data[1].label}</span>
//         <span className="percentage">{data[1].percentage}</span>
//       </li>
//       <li className="item">
//         <span className="label">{data[2].label}</span>
//         <span className="percentage">{data[2].percentage}</span>
//       </li>
//       <li className="item">
//         <span className="label">{data[3].label}</span>
//         <span className="percentage">{data[3].percentage}</span>
//       </li>
//     </ul>
//   </section>
// );
const DataStats = ({ title, stats }) => {
  return (
    <section className="">
      <h2 className="">{title}</h2>
      <ul className="">
        {stats.map(item => (
          <li key={item.id} class="">
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
