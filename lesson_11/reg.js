// 192.168.0.1
function isValidIP(ip) {
    const reg = /^(0|[1-9]\d{0,2})\.(0|[1-9]\d{0,2})\.(0|[1-9]\d{0,2})\.(0|[1-9]\d{0,2})$/;
    const test = reg.test(ip);
    const matches = ip.match(reg);
    console.log(matches);
    return test && matches[1] < 255 && matches[2] < 255 && matches[3] < 255 && matches[4] < 255;
    return test;
}

console.log(isValidIP('192.168.0.256'));

function replaceTest(str) {
    const reg = /(\d) (\d+)/g;
    return str.replace(reg, '$2, First element: $1');
}

console.log(replaceTest('1 2345678'));

// +375 (xx) xxxxxxx
function isPhone(str) {
    const reg = /\+375\s\((?:29|44|33)\)\s[1-9]\d{6}/;
    return reg.test(str);
}

console.log(isPhone('+375 (445) 2234573'));


function braces(str) {
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];

    const opens = [];

    for (let i = 0; i<=str.length; i++) {
        if (open.indexOf(str[i]) !== -1) {
            opens.push(open.indexOf(str[i]));
        }

        if (close.indexOf(str[i]) !== -1) {
            let closeOne = close.indexOf(str[i]);

            if (opens[opens.length -1] !== closeOne || opens.length === 0) {
                return false;
            }

            opens.pop();
        }
    }
    return opens.length === 0;
}
console.time('cycle');
console.log(braces('{{sefsef}[sefsef]({awdawdawd})'));
console.timeEnd('cycle');

const bracesR = s => {
    s = s.replace(/[^\(\)\[\]\{\}]/g, '');
    while(/\(\)|\{\}|\[\]/.test(s)) {
        s = s.replace(/\(\)|\{\}|\[\]/g, '');
    }
    return s.length < 1;
};
console.time('reg');
console.log(bracesR('{{sefsef}[sefsef]({awdawdawd})'));
console.timeEnd('reg')
