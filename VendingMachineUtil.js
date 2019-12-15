function Looping(){
	//포장마차리필 {for, foreach, map, find, reduce, filter}
	this.forTest = function(arr){
		let result = []
		for(let i=0;i < arr.length; i++){
			result.push((arr[i]%2==0) ? arr[i]:null) 
		}
		return result
	}
	this.forEach = function(arr){
		let result = []
		arr.forEach(i=>{(i%2==0) ? result.push(i) : null})
		return result
	}
	this.mapTest = function(arr){
		arr.map(i=> i * 100)
		return arr
	}
	this.find = function(arr){
		return (arr.find(function(i){
			return i > 5
		}))
	}
	this.find2 = function(arr, id){
		let result = arr.find(function(i){return i.id == id})
		return ((result==undefined) ? '아이디가 없습니다.': result.name)
	}
	this.reduce = function(arr){
		return arr.reduce((i,j)=> (i > j) ? i :j)
	}
	this.filter = function(arr){
		//Looping.prototype.arr.filter(i=>(i%2==0))
		return arr.filter(i=>(i%2==0))
	}
	this.ofTest = function(arr){
		let temp = []
		for (const tem of arr){
			temp.push(tem.name)
		}
		return temp
	}
	this.fromTest = function(arr){
		return Array.from(arr,i => i+i)
	}
	this.argTest = function(){
		console.log(`argTest 안에서의  ${([...arguments])}`)
		return [...arguments]
	}
	this.joinTest = function(){
		return [...arguments].join(`      -      `)
	}
	this.sortTest = function(){
		return [[...arguments].reverse(),[...arguments].sort()]
	}
	this.todos = function () {
		let points = [...arguments]
		// 숫자 배열 오름차순 정렬
		// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
		points.sort(function (a, b) { return a - b; });
		// ES6 화살표 함수
		// points.sort((a, b) => a - b);
		console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]
		// 숫자 배열에서 최소값 취득
		console.log(points[0]); // 1
		// 숫자 배열 내림차순 정렬
		// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
		points.sort(function (a, b) { return b - a; });
		// ES6 화살표 함수
		// points.sort((a, b) => b - a);
		console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]
		// 숫자 배열에서 최대값 취득
		console.log(points[0]); // 100
	}
	this.todoss = function () {
		const todoss = [{ id: 4, content: 'JavaScript' },
			{ id: 1, content: 'HTML' },
			{ id: 2, content: 'CSS' }
		];

		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}

		// id를 기준으로 정렬
		todoss.sort(compare('id'));
		console.log(todoss);

		// content를 기준으로 정렬
		todoss.sort(compare('content'));
		console.log(todoss);
	}
}