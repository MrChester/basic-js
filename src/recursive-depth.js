module.exports = class DepthCalculator {
calculateDepth = arr => {
    let depthCounter = 0;
    while (arr.length) {
        depthCounter++;
        arr = arr.reduce((acc, item) => {
            if (Array.isArray(item)) {
                acc.push(...item);
            }
            return acc;
        }, []);
    }

    return depthCounter;
}
};
