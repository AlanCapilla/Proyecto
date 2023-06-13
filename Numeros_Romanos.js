function convertToRoman() {
    let num = document.getElementById("numero").value;
    let str = "";
    str += num;
    let result = [];
    let unit = "";
    let ten = "";
    let hundred = "";
    let thousandth = "";

    if (str.length === 0){
        return console.log("Conjunto vacio: "+result);
    }else{
        switch(str[str.length - 1]){
            case "1":
                unit = "I"
                break;
            case "2":
                unit = "II"
                break;
            case "3":
                unit = "III"
                break;
            case "4":
                unit = "IV"
                break;
            case "5":
                unit = "V"
                break;                
            case "6":
                unit = "VI"
                break;
            case "7":
                unit = "VII"
                break;
            case "8":
                unit = "VIII"
                break;
            case "9":
                unit = "IX"
                break;                
        } 
        switch(str[str.length - 2]){
            case "1":
                ten = "X"
                break;
            case "2":
                ten = "XX"
                break;
            case "3":
                ten = "XXX"
                break;
            case "4":
                ten = "XL"
                break;
            case "5":
                ten = "L"
                break;                
            case "6":
                ten = "LX"
                break;
            case "7":
                ten = "LXX"
                break;
            case "8":
                ten = "LXXX"
                break;
            case "9":
                ten = "XC"
                break;     
        }
        switch(str[str.length - 3]){
            case "1":
                hundred = "C"
                break;
            case "2":
                hundred = "CC"
                break;
            case "3":
                hundred = "CCC"
                break;
            case "4":
                hundred = "CD"
                break;
            case "5":
                hundred = "D"
                break;                
            case "6":
                hundred = "DC"
                break;
            case "7":
                hundred = "DCC"
                break;
            case "8":
                hundred = "DCCC"
                break;
            case "9":
                hundred = "CM"
                break;     
        }
        switch(str[str[str.length - 4]]){
            case "1":
                thousandth = "M"
                break;
            case "2":
                thousandth = "MM"
                break;
            case "3":
                thousandth = "MMM"
                break;
        }
        
        result.push(thousandth, hundred, ten, unit);
        document.write(result.join(""));
    }    
}
