export function adds(num1, num2, sign) {
    let addResult = num1 + num2;
    console.log(`${num1}${sign}${num2} = ${addResult}\n`);
    return addResult;
}
export function subs(num1, num2, sign) {
    let subResult = num1 - num2;
    console.log(`${num1}${sign}${num2} = ${subResult}\n`);
    return subResult;
}
export function muls(num1, num2, sign) {
    let mulResult = num1 * num2;
    console.log(`${num1}${sign}${num2} = ${mulResult}\n`);
    return mulResult;
}
export function divs(num1, num2, sign) {
    let divResult = num1 / num2;
    console.log(`${num1}${sign}${num2} = ${divResult}\n`);
    return divResult;
}
export function rems(num1, num2, sign) {
    let remResult = num1 % num2;
    console.log(`${num1}${sign}${num2} = ${remResult}\n`);
    return remResult;
}
