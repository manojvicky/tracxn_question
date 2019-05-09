/*
Bomber's

foobar
fbar

abbac
c

abbaaac
c

abbba
aba

*/
function checkStr(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      if (arr[i] === arr[i + 1]) {
        obj.index = i;
        obj.status = true;
        break;
      }
    }
  }
  return obj;
}
function bombers(str) {
  let arr = [...str];

  let obj = checkStr(arr);
  while (obj.status) {
    arr = arr.filter(
      (char, indx) => indx !== obj.index && indx !== obj.index + 1
    );
    obj = checkStr(arr);
  }
  console.log("obj", obj, arr);

  return arr.join("");
}

// Ignore
document.write(bombers("foobar"));
document.write("<br />");
document.write(bombers("abbac"));
document.write("<br />");
document.write(bombers("abbaaac"));
document.write("<br />");
document.write(bombers("abbba"));
document.write("<br />");
