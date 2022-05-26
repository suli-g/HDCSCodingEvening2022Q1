function isDisarium(input) {
    // convert the input into an array of digits
    const digits = input.toString().split('').map(d => parseInt(d)),
        totalDigits = digits.length;
    let sum = 0;
    for (let i = 0; i < totalDigits; i++) {
        sum += digits[i] ** (i + 1)
    }
    return sum == input;
}

module.exports = function findDisarium(min, max) {
    // Make sure the input is correct
    if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0) {
        return "Please enter valid page numbers";
    } else if (min > max) {
        // Swap the numbers if they are in the wrong order.
        ([min, max] = [max, min])
    }
    const result = []
    for (let i = min; i < max; i++) {
        if (isDisarium(i)) {
            result.push(i)
        }
    }
    return result.join(" | ")
}