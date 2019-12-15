const service = {
	init() {
		const vm = new VendingMachine()
		VendingMachine.prototype.setChange = function (change) {_change = change}
		VendingMachine.prototype.getChange = function () {return _change}
		VendingMachine.prototype.setItemList = function (itemList) {_itemList = itemList}
		VendingMachine.prototype.getItemList = function () {return _itemList}
		VendingMachine.prototype.insertItem = function (item){
			vm.getItemList.push(item)
		}
		VendingMachine.prototype.insertCoin = function(coin){
			vm.setChange(Number(coin)+Number(vm.getChange()))
			return vm.getChange()
		}
		VendingMachine.prototype.itemSelect = function(name){
			return vm.getItemList.find(i=>{return i == name})
		}
		VendingMachine.prototype.returnChange = function(){
			const temp = vm.getChange()
			vm.setChange(0)
			return temp
		}
	}
	/* insertItem(item){
		const vm = new VendingMachine()
		vm.getItemList.push(item)
	},
	insertCoin(coin){
		this.init()
		const vm = new VendingMachine()
		//vm.setChange(coin+((vm.getChange()=='defined') ? 0 : vm.getChange()))
		vm.setChange(coin)
		return vm.getChange()
	},
	itemSelect(name){
		const vm = new VendingMachine()
		return vm.getItemList.find(i=>{return i == name})
	},
	returnChange(){
		const vm = new VendingMachine()
		const temp = vm.getChange()
		vm.setChange(0)
		return temp
	} */
}
