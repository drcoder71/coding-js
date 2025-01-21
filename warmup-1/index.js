import { diff21 } from "./diff21.js";
import { makes10 } from "./makes10.js";
import { missingChar } from "./missingChar.js";
import { monkeyTrouble } from "./monkeyTrouble.js";
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
    missingChar: (str, n) => missingChar(str, n)
}