// Recursively discover all spec files
var context = require.context('./test', true, /\.spec\.ts/);

// Load discovered spec files
context.keys().forEach(context);