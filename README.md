# Unresponsive Node.js Server

This repository demonstrates a common Node.js issue: an unresponsive server caused by a long-running operation that blocks the event loop.  The `server.js` file contains the problematic code. The solution is shown in `serverSolution.js`.

## Problem

The server uses a `while` loop to simulate a 5-second operation within the request handler.  This blocks the event loop, preventing the server from handling other requests and potentially leading to timeouts or crashes.  This issue is exacerbated under high loads.

## Solution

The solution involves using asynchronous operations to prevent blocking.  This can involve techniques like using asynchronous functions, promises, or worker threads to handle long-running tasks outside the main event loop.  The  `serverSolution.js` uses `setTimeout` to illustrate how to move long running operations out of the main event loop.

## How to Run

1. Clone the repository
2. Navigate to the directory.
3. Run `node server.js` (for the buggy version). Observe the unresponsiveness. 
4. Run `node serverSolution.js` (for the fixed version) Observe the improvement.
