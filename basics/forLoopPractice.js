let n=0

for(let i=1;i<=100;i++){
    if(i%2==0 && i%5==0){
        n++
        console.log(i)
        if(n==3){
            break
        }
    }
}