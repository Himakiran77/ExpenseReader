import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const ExpenseList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.expenseItem}>
          <View style={styles.tableRow}>
            <Text style={styles.boldText}>Amount:</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.boldText}>Description:</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.boldText}>Date:</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.boldText}>Source:</Text>
            <Text style={styles.source}>{item.source}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    color: 'green',
    flex: 1, 
    marginLeft: '2%'
  },
  description: {
    color: '#C70039', 
    flex: 1, 
    textAlign: 'right',
    // marginLeft: '2%'
  },
  date: {
    color: 'blue', 
    flex: 1, 
    marginLeft: '2%'
  },
  source: {
    color: 'green', 
    flex: 1, 
    textAlign: 'right', 
  },
});

export default ExpenseList;



// import React from 'react';
// import { FlatList, Text, View, StyleSheet } from 'react-native';

// const ExpenseList = ({ expenses }) => {
//   return (
//     <FlatList
//       data={expenses}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.expenseItem}>
//           <Text style={styles.amount}>Amount: {item.amount}</Text>
//           <Text style={styles.description}>Description: {item.description}</Text>
//           <Text style={styles.date}>Date: {item.date}</Text>
//           <Text style={styles.Source}>Source : {item.source}</Text>
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   expenseItem: {
//     bottom: '5%',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   amount: { color: '#555', fontWeight: 'bold' },
//   description: { color: '#555' },
//   date: { color: '#888' },
//   Source: {color: 'green'}
// });

// export default ExpenseList;
