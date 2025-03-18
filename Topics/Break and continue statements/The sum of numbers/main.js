function sum(numbers) {
    // write your code here
    let sum = 0;
    for (item of numbers) {
        if (item) {
            sum += item;
        } else {
            return sum;
            break;
        }
    }
}
