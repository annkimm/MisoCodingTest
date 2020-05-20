function twoSum (str1,str2) {

    function krNum (str) {

        const numStrs = {
            "일":1,
            "이":2,
            "삼":3,
            "사":4,
            "오":5,
            "육":6,
            "칠":7,
            "팔":8,
            "구":9
        }
    
        const unitStrs = {
            "십": 10,
            "백": 100,
            "천": 1000,
            "만": 10000,
            "억": 100000000,
            "조": 1000000000000,
        }

        let temp = 0;
        let num = 0;
        let result = 0;
    
        for(let i = 0, len = str.length; i < len; i++){
    
            if(numStrs[str[i]] !== undefined){
    
                num = numStrs[str[i]]
    
            }else{
    
                if(unitStrs[str[i]] >= 10000){
    
                    temp = String(temp).includes(String(num)) ? temp : temp + num;
                    temp = (temp !== 0 ? temp *= unitStrs[str[i]]: num * unitStrs[str[i]]);
                    result += temp;
                    temp = 0;
    
                }else{
                    num = (unitStrs[str[i-1]] === undefined ? num * unitStrs[str[i]] : unitStrs[str[i]])
                    temp += num
                }
    
            }
    
        }
        
        return temp + result + num

    }

    return krNum(str1) + krNum(str2);

}
 