const sum=(a,b)=>{
    return (a+b);
}


const shoe=[
    {id:1,name:"Air Jordan h1"},
    {id:2,name:"Air Jordan h2"},
    {id:3,name:"Air Jordan h3"},
    {id:4,name:"Air Jordan h4"}
]


function getShoe(pos){
    return shoe[pos];
}


const checkInput=(input)=>{
    if(typeof input!=='number'){
        throw new Error('please input a number');}
}

const asyncFunction=(callback)=>{
    setTimeout(()=>{
        callback("data is fetched");
    },1000);
}

const fetchPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('peanut butter')
        }, 1000);
    });
}

module.exports={sum,getShoe,checkInput,asyncFunction,fetchPromise};