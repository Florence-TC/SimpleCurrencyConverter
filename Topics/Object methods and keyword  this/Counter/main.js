// write your object here
let counter = {
    current: 0,
    inc() {
        this.current += 1;
        return this.current
    }
};