The solution involves robust error handling and verification of network and security rules before writing data.  Here's an improved version:

```javascript
function checkNetwork() {
  return new Promise((resolve, reject) => {
    if (navigator.onLine) resolve(true); else reject('Network offline');
  });
}

db.collection('myCollection').doc('myDoc').set({field1: 'value1', field2: 'value2'})
  .then(() => {
    console.log('Data written successfully!');
    //Add a check here to verify data was actually written using get()
    db.collection('myCollection').doc('myDoc').get()
      .then(doc => {
          if (!doc.exists) {
            throw new Error('Data was not written!');
          }
      })
      .catch(err => console.error('Error verifying write:', err))
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
```

This improved code includes:

*   A `checkNetwork()` function to verify network connectivity before attempting the write.
*   More detailed error handling within the `.catch()` block.
*   Verification that the data actually made it to the database using a `.get()` call after the `set()` operation.

Remember to check your Firestore security rules to ensure they allow the write operation.