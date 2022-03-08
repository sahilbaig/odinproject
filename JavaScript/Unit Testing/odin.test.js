import {capitalize,reverseString,calculator,analyzeArray} from "./odin";


test("capitalize a string",()=>{
    expect(capitalize("string")).toBe("STRING");
}) 

test("reverse a passed string", ()=>{
    expect(reverseString("meow")).toBe("woem");
})

test("calculator ",()=>{
    expect(calculator(1,2,"+")).toBe(3);
    expect(calculator(1,2,"-")).toBe(-1);
    expect(calculator(1,2,"/")).toBe(1/2);
    expect(calculator(1,2,"*")).toBe(1*2);
    expect(calculator(1,2,"()")).toBe("Not a valid operation");
})

test("Analyze Array" , () =>{
    expect(analyzeArray([1,2])["min"]).toBe(1);
    expect(analyzeArray([1,2])["max"]).toBe(2);
    expect(analyzeArray([1,2])["length"]).toBe(2);
    expect(analyzeArray([2,2,2])["average"]).toBe(2);
})