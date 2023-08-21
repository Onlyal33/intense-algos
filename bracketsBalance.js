const data = '(1{[123]})()';

const pairs = {
  ')': '(',
  '}': '{',
  ']': '[',
};

const isBracketsBalanced = (str) => {
  const stack = [];
  const arr = str.split('');

  while (arr.length > 0) {
    const sym = arr.shift();

    if (sym === '(' || sym === '{' || sym === '[') {
      stack.push(sym);
    }
    if (sym === ')' || sym === '}' || sym === ']') {
      const popped = stack.pop();
      if (pairs[sym] !== popped) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isBracketsBalanced(data));
