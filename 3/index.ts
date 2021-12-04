import { readInput } from "../readLines";

const input = readInput("3");

const getPower = () => {
    let gamma = "";
    let epsilon = "";
    
    for (let i = 0; i < input[0].length; i++) {
        let zeroes = 0;
        let ones = 0;
    
        for (const binary of input) {
            if (binary.charAt(i) === "0") {
                zeroes++;
            } else {
                ones++;
            }
        }
    
        if (zeroes > ones) {
            gamma += "0";
            epsilon += "1";
        } else {
            gamma += "1";
            epsilon += "0";
        }
    }
    
    const gammaNum = parseInt(gamma, 2);
    const epsilonNum = parseInt(epsilon, 2);
    
    return gammaNum * epsilonNum
};

const getLifeSupport = () => {
    let oxygen = [...input];
    let co2 = [...input];
    
    for (let i = 0; i < input[0].length; i++) {
        let zeroes = [];
        let ones = [];
        
        if (oxygen.length === 1) break; 
    
        for (const binary of oxygen) {
            if (binary.charAt(i) === "0") {
                zeroes.push(binary);
            } else {
                ones.push(binary);
            }
        }
    
        if (zeroes.length > ones.length) {
            oxygen = [...zeroes];
        } else {
            oxygen = [...ones];
        }
    }
    
    for (let i = 0; i < input[0].length; i++) {
        let zeroes = [];
        let ones = [];
        
        if (co2.length === 1) break;
    
        for (const binary of co2) {
            if (binary.charAt(i) === "0") {
                zeroes.push(binary);
            } else {
                ones.push(binary);
            }
        }
    
        if (zeroes.length > ones.length) {
            co2 = [...ones];
        } else {
            co2 = [...zeroes];
        }
    }
    
    const oxygenNum = parseInt(oxygen[0], 2);
    const co2Num = parseInt(co2[0], 2);

    return oxygenNum * co2Num;
}

export const p1 = () => getPower();
export const p2 = () => getLifeSupport();