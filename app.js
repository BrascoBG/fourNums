function count(a,b){
    a = Number(a);
    b = Number(b);
    let count = 0;

    if(a > 0 && a < 1000 && b > 0 && b < 1000){
        for(let i = a; i <= b; i++){
            for(let j = i + 1; j <= b; j++){
                for(let k = j + 1; k <= b; k++){
                    for(let l = k + 1; l <= b; l++){
                        console.log(i + " " + j + " " + k + " " + l);
                        count++;
                    }
                }
            }
        }
    }
    else{
        console.log("Enter number between 0 and 1000");
        return;
    }
    if(count == 0){
        console.log("No");
    }
}
count(3,7);