function noSpace(x){
    const arrayofString = x.split("");
    const nospaceArray = arrayofString.filter((element) =>{
        return element != " ";
    })
    const nospaceString = nospaceArray.join("");
    return nospaceString;
    
}
console.log(noSpace("bvdzf aEGDb     bsBSFB"));