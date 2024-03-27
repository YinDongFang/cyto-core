const formatDate = require('./formatDate')
const toLowerCase = require('./toLowerCase')
const truncateString = require('./truncateString')
const generateUUID = require('./generateUUID')
const isEven = require('./isEven')

module.exports = (arr) => {
    return Math.max(...arr);
  }