function curriedAdd(total) {
    let sum = 0;
    const helper = (num)=>{
        if (num !== undefined){
            sum+=num;
            return helper;
        }else{
            return sum;
        }
    }
    if (total !== undefined){
        sum = total;
        return helper;
    }
    else{
        return sum;
    }
}


module.exports = { curriedAdd };
