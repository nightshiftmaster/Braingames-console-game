const generateNumber = (start = 1, end = 50) => (Math.round(Math.random() * end) + start);

export default generateNumber;
