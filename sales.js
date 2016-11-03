var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  if (isNaN(newItem))
  //IF newItem is not a number
  // THEN show an alert: "Enter price as a number"
  {
    window.alert ("Enter price as a number")
  }

  else
  //OTHERWISE, *else block*
  {
    newItem = Number(newItem);
    // update newItem to its value cast as a number
    runningTotal += newItem;
    // update runningTotal to be its value plus newItem
    var dollars = asCurrency(runningTotal);
    // create a variable called dollars
    // call asCurrency() by with the value of runningTotal and assign the return value to dollars
    document.getElementById("subtotal").innerHTML=dollars;
    // update the innerHTML of the span with the id "subtotal" to be dollars

    newItem= document.getElementById("price").value="";
    // update the value of the input with the id "price" to be an empty string
    setCookie("preTax", runningTotal, 3);
    // update a cookie called "preTax" with the value of runningTotal
      console.log(getCookie("preTax"));
  }

}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);

}

function calculateReceipt()
//First, create a new function in sales.js called calculateReceipt() but leave it empty for now.
{
  var receiptSubtotal = getCookie("preTax");
  receiptSubtotal = Number(receiptSubtotal);
/*Now, within your new function, get the preTax cookie and assign it to a variable
called receiptSubtotal. Make sure to cast it to a number*/
  var receiptTax = Number(receiptSubtotal * 0.075);
  //receiptTax = receiptTax.toFixed(2);
/*Create another variable called receiptTax. Assign it the value of receiptSubtotal
multiplied by 0.075 (in other words, calculate 7.5% of preTax).*/
  var receiptTotal = Number(receiptSubtotal + receiptTax);
  //receiptTotal = receiptTotal.toFixed(2);
  /*Create a third variable called receiptTotal and assign it to the sum of the subtotal plus
  the taxes (which you just calculated)*/
  document.getElementById("sub").innerHTML = asCurrency(receiptSubtotal);
  document.getElementById("tax").innerHTML = asCurrency(receiptTax);
  document.getElementById("tot").innerHTML = asCurrency(receiptTotal);
/*Once you have calculated those values, have your function update the h2 tags
 with the respective id: sub, tax, and tot*/

}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
