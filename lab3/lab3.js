'use strict';

import {
    fib
  } from './fib.js';


export function getDecimal(num) {

    return +(num >= 0 ? num % 1 : 1 + (num % 1)).toFixed(2);
}


export function normalizeUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://"))
        return "https://" + url;

    return url.replace("http://", "https://");
}

export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

export function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + "…";

    return str;
}

export function camelize(str) {
    return str.split('-').map((word, index) => {
        if (index === 0)
            return word;

        return word ? word[0].toUpperCase() + word.slice(1) : '';
    }).join('');
}

export function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(fib(i));
    return arr;
}

export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

export function unique(arr) {
    return [...new Set(arr)];
}

//module.exports = { getDecimal, normalizeUrl, checkSpam, truncate, camelize, fibs, arrReverseSorted, unique };
