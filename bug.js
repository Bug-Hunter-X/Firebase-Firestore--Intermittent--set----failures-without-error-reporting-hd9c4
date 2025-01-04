In a Firebase project, I encountered an issue where data wasn't being written to the Firestore database despite seemingly correct code. The `set()` method wasn't throwing any errors, but the data wasn't appearing in the database.  The issue was intermittent, occurring only sometimes, making debugging difficult. The relevant code snippet is below:

```javascript
db.collection('myCollection').doc('myDoc').set({field1: 'value1', field2: 'value2'})
.then(() => {
  console.log('Data written successfully!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
```