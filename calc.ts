export function adds (num1:number,num2:number,sign:string) {
    let addResult = num1 + num2;
    console.log(`${num1}${sign}${num2} = ${addResult}\n`);
    return addResult;
    }

export function subs (num1:number,num2:number,sign:string) {
    let subResult = num1 - num2;
    console.log(`${num1}${sign}${num2} = ${subResult}\n`);
    return subResult;
    }
    
export function muls (num1:number,num2:number,sign:string) {
    let mulResult = num1 * num2;
    console.log(`${num1}${sign}${num2} = ${mulResult}\n`);
    return mulResult;
    }
        
export function divs (num1:number,num2:number,sign:string) {
    let divResult = num1 / num2;
    console.log(`${num1}${sign}${num2} = ${divResult}\n`);
    return divResult;
    }
    
export function rems (num1:number,num2:number,sign:string) {
    let remResult = num1 % num2;
    console.log(`${num1}${sign}${num2} = ${remResult}\n`);
    return remResult;
    }