const service = {
	init() {
		VendingMachine.prototype.setChange = function (change) { _change = change }
		VendingMachine.prototype.getChange = function () { return _change }
		VendingMachine.prototype.setItemList = function (itemList) {_itemList = itemList}
		VendingMachine.prototype.getItemList = function () { return _itemList }
	},
	vendingMachine() {
		service.init()
		const vm = new VendingMachine()
		VendingMachine.prototype.insertCoin = function (coin){vm.setChange(coin+vm.getChange())
			return vm.getChange()}
		VendingMachine.prototype.itemSelect = function(name){return service.getItemList.find(function(i){
				return i == name})
		}
		VendingMachine.prototype.insertItem = function(item){service.getItemList.push(item)}
		VendingMachine.prototype.returnChange = function(){
			const temp = service.getChange()
			service.setChange(0)
			return temp
		}
	}
}
