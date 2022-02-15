
const TransactionHistory = (props) => {
    const { transactions } = props;
    return (
        <div className="transaction-history">
        <h2>Transaction History</h2>
        <table>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                        <th>Currency</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
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

