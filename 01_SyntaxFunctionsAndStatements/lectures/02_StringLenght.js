function strLen(a, b, c){
    let len1 = a.length;
    let len2 = b.length;
    let len3 = c.length;

    let total = len1 + len2 + len3;
    let avg = Math.floor(total / 3);

    console.log(total);
    console.log(avg);
}

strLen('chocolate', 'ice cream', 'cake');
strLen('pasta', '5', '22.3');