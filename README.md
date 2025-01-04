# Firebase Firestore Intermittent Write Failure

This repository demonstrates a bug encountered in a Firebase Firestore project where data writes using the `set()` method would intermittently fail without any error being reported.  The issue was difficult to debug due to its intermittent nature.  The solution involves careful checking of the Firestore rules and network connectivity.

## Bug

The original code (see `bug.js`) uses the `set()` method to write data to a Firestore document.  While the `then` block executes, indicating apparent success, the data is not always written to the database. No error is thrown.

## Solution

The solution (see `bugSolution.js`) focuses on robust error handling and verification:

1.  **Improved Error Handling:** More comprehensive error handling catches a wider range of potential issues.
2.  **Network Verification:** Ensures network connectivity before attempting writes.
3.  **Rule Verification:** Carefully review Firestore security rules to ensure that the write operation is permitted.

This improved approach makes the data writing process more reliable.