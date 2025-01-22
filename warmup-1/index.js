import { backAround } from "./backAround.js";
import { delDel } from "./delDel.js";
import { diff21 } from "./diff21.js";
import { front22 } from "./front22.js";
import { front3 } from "./front3.js";
import { frontBack } from "./frontBack.js";
import { hasTeen } from "./hasTeen.js";
import { loneTeen } from "./loneTeen.js";
import { makes10 } from "./makes10.js";
import { missingChar } from "./missingChar.js";
import { monkeyTrouble } from "./monkeyTrouble.js";
import { or35 } from "./or35.js";
import { posNeg } from "./posNeg.js";
import { sleepIn } from "./sleepIn.js";
import { sumDouble } from "./subDouble.js";

export const Warmup1 = {
    sleepIn: (weekday, vocation) => sleepIn(weekday, vocation),
    monkeyTrouble: (aSmile, bSmile) => monkeyTrouble(aSmile, bSmile),
    sumDouble: (a, b) => sumDouble(a, b),
    diff21: (n) => diff21(n),
    parrotTrouble: (talking, hour) => parrotTrouble(talking, hour),
    makes10: (a, b) => makes10(a, b),
    nearHundred: (n) => nearHundred(n),
    posNeg: (a, b, negative) => posNeg(a, b, negative),
    notString: (str) => notString(str),
    missingChar: (str, n) => missingChar(str, n),
    frontBack: (str) => frontBack(str),
    front3: (str) => front3(str),
    backAround: (str) => backAround(str),
    or35: (number) => or35(number),
    front22: (str) => front22(str),
    startHi: (str) => startHi(str),
    icyHot: (temp1, temp2) => icyHot(temp1, temp2),
    in1020: (num1, num2) => in1020(num1, num2),
    hasTeen: (a, b, c) => hasTeen(a, b, c),
    loneTeen: (a, b) => loneTeen(a, b),
    delDel: (str) => delDel(str)
}

console.log(Warmup1.delDel('hdelello'));
