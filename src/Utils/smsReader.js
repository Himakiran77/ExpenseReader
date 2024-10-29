import SmsAndroid from 'react-native-get-sms-android';

export function readExpenses(callback) {
  const filter = {
    box: 'inbox', 
    maxCount: 1000, 
  };

  SmsAndroid.list(
    JSON.stringify(filter),
    (fail) => {
      console.log('Failed to fetch SMS:', fail);
      callback([]);
    },
    (count, smsList) => {
      const messages = JSON.parse(smsList);
      const transactions = messages
        .map((message) => extractTransactionDetails(message.body))
        .filter((transaction) => transaction !== null); 
      callback(transactions);
    }
  );
}

function extractTransactionDetails(message) {

  const amountRegex = /(?:Rs\.?|Rs:)?\s?([\d,]+\.\d{2})/;
  const dateRegex = /(\d{2}-\d{2}-\d{4})\s+\d{2}:\d{2}:\d{2}/; 
  const sourceRegex = /(?:by\s+)(.+?)(?:\s+ref no)/; 
  const typeRegex = /(?:A\/c\s+\*\d+\s+(Credited|Debited))/; 
  const bankNameRegex = /-([^-]+)$/; 

  const amountMatch = message.match(amountRegex);
  const dateMatch = message.match(dateRegex);
  const sourceMatch = message.match(sourceRegex);
  const typeMatch = message.match(typeRegex);
  const bankNameMatch = message.match(bankNameRegex); 


  if (amountMatch && dateMatch && sourceMatch && typeMatch) {
    const bankName = bankNameMatch ? bankNameMatch[1].trim() : 'Unknown Bank'; 

    return {
      source: sourceMatch[1].trim(),
      date: dateMatch[1],
      type: typeMatch[1].toLowerCase(), 
      description: `${typeMatch[1]} in ${bankName}`,
      amount: amountMatch[1],
    };
  }
  return null; 
}
