import {createInterface } from 'readline/promises';

export const readNumberInput = async (message) => {
    const text = message ? message : 'Enter Input: ';
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    try{
        const input = await r1.question(text);
        r1.close()
        const number = Number(input);
        return Number(input);
    } catch(error){
        return new Error('Input is not a Number!');
    }
}

export const readString = async (message) => {
    const text = message ? message : 'Enter Input: ';
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    const input = await r1.question(text);
    r1.close()
    return input;
}
