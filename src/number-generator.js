const number = (start, end) => (Math.floor(Math.random() * end) + start);

const numberGenerator = () => number(1, 50);

export default numberGenerator;
