module.exports = function solveEquation(equation) {
    var a = '', b = '', c = '', first, second, middle, middleSign, cSign, bSign, aSign, d, x1, x2;
    first = equation.indexOf(' * x^2 ');
    second = equation.indexOf(' * x ');
    for (var i = 0; i < first; i++){
        a += equation.charAt(i);
    }
    a = deleterOfSpaces(a);
    for (var i = a.length+7; i < second; i++){
        b += equation.charAt(i);
    }
    b = deleterOfSpaces(b);
    for (var i = a.length+12+b.length; i < equation.length; i++){
        c += equation.charAt(i);
    }
    //a = '1'; b = '-8'; c = '12';
    c = deleterOfSpaces(c);
    aSign = definerOfSign(a);
    bSign = definerOfSign(b);
    cSign = definerOfSign(c);
    middle = String(4*a);
    middle = deleterOfSign(middle);
    multiply(middle,deleterOfSign(c));
    b = deleterOfSign(b);
    a = deleterOfSign(a);
    c = deleterOfSign(c);
    middleSign = (+multiply(b,b)+ +multiply(String(4*a),String(c)));
    if (aSign == cSign){d = Math.pow(multiply(b,b)-multiply(String(4*a),String(c)),0.5);}
    else {d = Math.pow(middleSign,0.5);}
    a = Number(a);
    b = Number(b);
    if (bSign == true && aSign == true) {   x1 = (-b-d)/(2*a);    x2 = (-b+d)/(2*a);}
    if (bSign == false && aSign == true) {  x1 = (b-d)/(2*a);     x2 = (b+d)/(2*a);}
    if (bSign == true && aSign == false) {  x2 = (-b-d)/(-2*a);   x1 = (-b+d)/(-2*a);}
    if (bSign == false && aSign == false) { x2 = (b-d)/(-2*a);    x1 = (b+d)/(-2*a);}
    return [Math.round(x1), Math.round(x2)];
}//


    function deleterOfSpaces(spase) {
        var str = '';
        del:
        for (var i = 0; i < spase.length; i++){
            if (spase.charAt(i) == ' ') continue del;
            str += spase.charAt(i);
            }
            return str;
    }

    function definerOfSign(sigh) {
        if (sigh.charAt(0) == '-') return false;
        else return true;
    }

    function multiply(one, two) {

    //write the numbers to the array
    var massFirst = [], massSecond = [];
        for(var i=0; i<one.length; i++){ //4
            massFirst[i] = Number(one.charAt(one.length - i -1));
        }
        for(var k=0; k<two.length; k++){ //3
            massSecond[k] = Number(two.charAt(two.length-k-1));
        }

        //multiplying
        var massRez = [];
        for(var i=0; i<one.length; i++){  //4321
            for(var k=0; k<two.length; k++){  //321
                if (massRez[i+k] == undefined) massRez[i+k] = 0;
                massRez[i+k] += massFirst[i]*massSecond[k];
                if (massRez[i+k] > 9) {
                    if (massRez[i+k+1] != undefined) {
                        massRez[i+k+1] += Math.floor(massRez[i+k]/10);
                        massRez[i+k] = massRez[i+k]%10;}
                    else {
                        massRez[i+k+1] = Math.floor(massRez[i+k]/10);
                        massRez[i+k] = massRez[i+k]%10;}
                    }
                }
            }
            var result = '';
            massRez.reverse();
            for (var i = 0; i < massRez.length; i++) {
            result += massRez[i];
            }
        return result;
    }
        function deleterOfSign(num) {
        var sul = '';
            cont:
            for (var i = 0; i<num.length; i++){
                if (num.charAt(i) == '-' || num.charAt(i) == '+') {continue cont;}
            else sul += num.charAt(i);
        }
        return sul;}


        function minuser(one, two) {
        var m1 =[], m2 =[];
            for(var i=0; i<one.length; i++){ //4
                m1[i] = Number(one.charAt(one.length - i -1));
            }
            for(var k=0; k<two.length; k++){ //3
                m2[k] = Number(two.charAt(two.length-k-1));
            }
            if (m1>m2)
            return m2;
        }


    /*
                */