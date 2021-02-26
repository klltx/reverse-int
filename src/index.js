module.exports = function reverse (n) {
    let res = 0;
    if(n < 0) n = -n;
    let str = n.toString();
    for(let i = 0; i < str.length; i++){
        res += Number(str[i]) * Math.pow(10, i);
    }
    console.log(res);
    return res;
}
