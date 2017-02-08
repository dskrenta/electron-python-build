'use strict';
import yahooFinance from 'yahoo-finance';

function getHistoricalData (symbol, startDate, endDate) {
  return yahooFinance.historical({
    symbol: symbol,
    from: startDate,
    to: endDate
  });
}

getHistoricalData('aapl', '2016-1-1', '2016-12-31')
  .then((result) => {
    // console.log(JSON.stringify(result, null, '\t'));
    console.log(JSON.stringify(result));
  })
  .catch((err) => {
    console.log(err);
  });
