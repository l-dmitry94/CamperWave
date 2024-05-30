const transformString = (input) => {
    const result = input
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());

    return result;
};

export default transformString;
