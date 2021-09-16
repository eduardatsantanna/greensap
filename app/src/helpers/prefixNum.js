export const prefixNum = (width, value, sufix) => {
     
    
    
    if(!value) return 0;

    var number = parseInt(value).toLocaleString("EN-us");
    
    if(width < 720 && value > 999 && value < 1000000){
        number = value / 1000;
        return parseFloat(number.toFixed(0))+`K`;
    } else if(width < 720 && value > 999999) {
        number = value / 1000000;
        return parseFloat(number.toFixed(0))+`M`;
    } 
    return number;
}
