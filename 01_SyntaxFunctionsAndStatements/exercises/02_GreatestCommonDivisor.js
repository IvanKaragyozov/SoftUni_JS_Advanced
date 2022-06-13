function GCD(a, b){

    // using recursion
    /*if(b) {
        return GCD(b, a % b);
    } else {
      console.log(a);
    }*/

    while(a !== b){
        a > b ? a -= b : b-= a;
    }
    console.log(a);
}

GCD(15, 5);
GCD(2154, 458);