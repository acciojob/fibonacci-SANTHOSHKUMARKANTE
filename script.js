function fibonacci(num) {
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
	}
	num -= 2;
	var num1 =0;
	var num2 = 1;
	var sum;
	var i=0;
	for(int i =0; i < num; i++){
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
    // } else if (num === 2) {
    //     return 1;
    // } else {
    //     return fibonacci(num - 1) + fibonacci(num - 2);
    // }
}

module.exports = fibonacci;
