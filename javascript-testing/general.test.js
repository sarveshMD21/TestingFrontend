const {sum,getShoe,checkInput,asyncFunction,fetchPromise}=require('./general');


// toBe is a matcher in jest usefull to compare numbers and bool values

test("Testing sum for both parameters positive",()=>{
    expect(sum(5,10)).toBe(15);
})

test("Testing sum for one parameters positive another negative",()=>{
   expect(sum(5,-2)).toBe(3);
})

test("Testing sum for both parameters negative",()=>{
   expect(sum(-5,-10)).toBe(-15);
})

// Matcher toEqual in jest used to match objects and arrays with one another
test("Testing for shoe object",()=>{
    expect(getShoe(1)).toEqual({id:2,name:"Air Jordan h2"});
});


// toBeFalsy Matcher used inorder to test for false,0,undefined or null values
test('Testing flasy values',()=>{
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect(-0).toBeFalsy();
    expect(0n).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
})

// opposite of falsy
test('Testing truthy values',()=>{
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect("heelo").toBeTruthy();
})

// toThrow this matcher is used when you expect your  function to throw errors
test('Testing for throw values',()=>{
    expect(()=>{checkInput("hello")}).toThrow("please input a number");
})

//testing asynchronous code
test('Testing asynchronous code',done=>{
    function callback(value){
        try{
            expect(value).toBe("data is fetched");
            done();
        }catch(e){
            done(e);
        }
    }
    asyncFunction(callback);
})


// testing promise function
test('Testing promise based function',()=>{
    return expect(fetchPromise()).resolves.toBe('peanut butter');
})