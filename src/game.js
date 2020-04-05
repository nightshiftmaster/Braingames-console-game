// ifEven game :
export const ifEven = (numb) => {
  const result = (numb % 2 === 0 ? 'yes' : 'no');
  return result;
};
let number = 0;
export const ifEvengame = () => {
  ifEven();
  number = (Math.floor(Math.random() * 11));
  console.log('Question: ', number.toString());
};
export const numb = () => number;

// calculator game:
let alert = '';
let result = 0;

export const brainCalc = () => {
  const a = (Math.floor(Math.random() * 11));
  const b = (Math.floor(Math.random() * 11));
  const addition = (`${a} + ${b}`);
  const multiplication = (`${a} * ${b}`);
  const subtraction = (`${a} - ${b}`);
  const value = [];
  const action = [addition, multiplication, subtraction];
  value.push(action[Math.floor(Math.random() * 3)]);
  const question = value.toString();
  alert = question;
  console.log('Question: ', alert);
  if (alert.includes('+')) {
    result = (a + b);
  } else if (alert.includes('-')) {
    result = (a - b);
  } else if (alert.includes('*')) {
    result = (a * b);
  }
  return result;
};
export const rightAnswer = () => result.toString();

// max divisor game:
let devisor = 0;
export const numbers = () => {
  const a = (Math.floor(Math.random() * 20));
  const b = (Math.floor(Math.random() * 20));
  console.log('Question:', a.toString(), b.toString());
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0 && b % i === 0) {
      devisor = Math.max(i);
    }
  }
  return devisor;
};
export const maxDivisor = () => devisor.toString();
