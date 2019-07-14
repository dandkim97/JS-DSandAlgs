// Cash Register Function that returns an object{status, change}
// Status has three results: "INSUFFICIENT_FUNDS" when the Register does not have enough money to make the exact transaction
//                           "CLOSED" when the Register has no money left put has successfully made the transaction
//                           "OPEN" when the Register has money leftover and has successfully made the transaction
// Change will return:  [] for "INSUFFICIENT_FUNDS"
//                      [...] low to hi array when "CLOSED", hi to low array when "OPEN"
//
// Example cash-in-drawer array:                       function(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
// [["PENNY", 1.01],                                                             ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
// ["NICKEL", 2.05],                                                             ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
// ["DIME", 3.1],                                                                ["ONE HUNDRED", 100]])
// ["QUARTER", 4.25],
// ["ONE", 90],                                        Should return: {status: "OPEN", change: [["QUARTER", 0.5]]}
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

function checkCashRegister(price, cash, cid) {
  var change;
  change = (cash - price).toFixed(2); 
  console.log(change)

  var moneyName = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  var moneyValue = [100, 20, 10, 5, 1, .25, .1, .05, .01];

  var resultArr = [];
  var resultmsg = ''; 
  var cashLeft = 0;

  for(let i = cid.length-1; i >= 0; i--){
    // We get the current money value to work with, 100, 20, 10, etc.
    var money = moneyValue[moneyName.indexOf(cid[i][0])]; 
    // This checks if there is still change
    if(change >= money){
      let cidLost = 0
      // This subtracts the money from change and current cid
      while((change-money) >= 0 && (cid[i][1]-money) >= 0){
        cidLost = (cidLost+money).toFixed(2)*1;
        cid[i][1] = (cid[i][1]-money).toFixed(2);
        change = (change-money).toFixed(2); 
      }
      // if money is taken from register
      if(cidLost > 0 ){
        resultArr.unshift([cid[i][0], cidLost]);
      }   
      // if no money is taken from register check if there is
      // no smaller money available
      if(money === .01 && change > 0){
        resultmsg = "INSUFFICIENT_FUNDS"; 
      }
    }

    if(cid[i][1] === 0){
      resultArr.unshift([cid[i][0], 0]);
    }

    // Add current cid[i][1] to cashLeft to see if have any money left after transaction
    cashLeft += cid[i][1];
  }
  // Check if status should be CLOSED or OPEN
  if(resultmsg !== "INSUFFICIENT_FUNDS"){
    if(cashLeft < 0.01){
      resultmsg = "CLOSED";
    }else{
      resultmsg = "OPEN";
      resultArr.reverse();
    }
  }else{
    resultArr = [];
  }
  
  var result = {"status": resultmsg, "change": resultArr}

  return result;  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
