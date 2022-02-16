import styles from './transactions.module.css';
//
const TransactionHistory = props => {
  const { transactions } = props;
  return (
    <div className={styles.transactionHistory}>
      <h2 className={styles.tittle}>Transaction History</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.trHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
