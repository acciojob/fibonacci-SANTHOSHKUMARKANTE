function fibonacci(num) {
// your code here
	if (num==2) {
		return 1;
	}
	else if(num==1){
		return 0;
	}
	return fibonacci(num-1)+fibonacci(num-1);
}

module.exports = fibonacci;
