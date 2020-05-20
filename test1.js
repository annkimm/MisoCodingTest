function sum (num1, num2) {

    const FirstNumStr = num1.toLocaleString('fullwide', {useGrouping:false});
    const lastNumStr = num2.toLocaleString('fullwide', {useGrouping:false});
    const FirstNumStrLength = FirstNumStr.length;
    const lastNumStrLength = lastNumStr.length;

    let numLeft = 0, numRight = 0, rem = 0, divid = 0, resultNumStr = "", resultConvert = "";
    let leng = FirstNumStrLength >= lastNumStrLength ? FirstNumStrLength : lastNumStrLength;

   for(let i =0; i < leng;i++){

        numLeft = (i >= FirstNumStrLength) ? 0 : parseInt(FirstNumStr[FirstNumStrLength - i - 1]); 
        numRight = (i >= lastNumStrLength) ? 0 : parseInt(lastNumStr[lastNumStrLength - i - 1]);
        rem = (numLeft + numRight + divid) % 10;
        divid = Math.floor((numLeft + numRight + divid) / 10);

        resultNumStr += String(rem);
     
    }

    resultConvert = resultNumStr.split("").reverse().join("");
    resultNumStr = divid > 0 ? divid + resultConvert : resultConvert;

    return resultNumStr;
}