import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, StyleSheet, Alert } from 'react-native';
import { requestSMSPermission } from './src/Utils/permissions';
import { readExpenses } from './src/Utils/smsReader';
import ExpenseList from './src/Components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      const permissionGranted = await requestSMSPermission();
      if (permissionGranted) {
        fetchExpenses();
      } else {
        Alert.alert("Permission denied", "SMS access is required to read expenses.");
      }
    })();
  }, []);

  const fetchExpenses = () => {
    readExpenses((data) => setExpenses(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Expense Summary</Text>
      <ExpenseList expenses={expenses} />
      <Button title="Refresh Expenses" onPress={fetchExpenses} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 , color: 'black'},
});

export default App;
