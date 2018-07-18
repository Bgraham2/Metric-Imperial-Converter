/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = 0;
    
    try {
      result = eval(input.split(/[a-zA-Z]/)[0]);
    }
    catch(e) {
      return "invalid number"; 
    }
    if(result == undefined) {
      return 1;
    } else {
      return result;
    }
  };
  
  this.getUnit = function(input) {
    
    if(/mi|km|lbs|kg|gal|l/.test(input.toLowerCase())) {
      return input.toLowerCase().match(/mi|km|lbs|kg|gal|l/)[0];
    } else {
      return "invalid units";
    }
    
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit) {
      case 'mi':
        result = "km";
        break;
      case 'km':
        result = "mi";
        break;
      case 'gal':
        result = "l";
        break;
      case 'l':
        result = "gal";
        break;
      case 'lbs':
        result = "kg";
        break;
      case 'kg':
        result = "lbs";
        break;
      default:
        result = "invalid units";
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit) {
      case 'mi':
        result = "miles";
        break;
      case 'km':
        result = "kilometers";
        break;
      case 'gal':
        result = "gallons";
        break;
      case 'l':
        result = "liters";
        break;
      case 'lbs':
        result = "pounds";
        break;
      case 'kg':
        result = "kilograms"; 
        break;
      default:
        result = "invalid units";
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result = 0;
    
    switch(initUnit) {
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;  
        break;
      default:
        result = initNum * 1;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(initUnit == "invalid units" && initNum =="invalid number") {
      return "invalid number and unit";
    }
    else if(initUnit == "invalid units") {
      return "invalid unit";
    } else if(initNum =="invalid number") {
      return "invalid number";
    } else {
      return {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit)};
    }
    
  };
  
}

module.exports = ConvertHandler;
