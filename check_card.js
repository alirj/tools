function check_card(card){
    if(card.length == 16){
        let li = [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]
        txt_li = card.split("")
        let sum = 0;
        for(let i=0; i<li.length; i++){
            let c = li[i] * parseInt(txt_li[i]);
            if(c > 9)
                c -= 9;
            sum += c;
        }
        if(sum % 10 == 0)
            return true;
    }
    return false;
}
