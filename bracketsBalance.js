const data = '(1{[123]})()(';

const pairs = {
  ')': '(',
  '}': '{',
  ']': '[',
};

const isBracketsBalanced = (str) => {
  const stack = [];

  for (const sym of str) {
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
