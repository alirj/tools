function check_iban(s){
    s = "IR" + s;
    const rearranged = s.substring(4,s.length) + s.substring(0,4);
    const numeric   = Array.from(rearranged).map(c =>(isNaN(parseInt(c)) ? (c.charCodeAt(0)-55).toString() : c)).join('');
    const remainder = Array.from(numeric).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % 97,0);

    return  remainder === 1;
}
