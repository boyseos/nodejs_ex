const compo = {
	domCreate(json){
		const dom = document.createElement(json.tag)
		dom.setAttribute('style','border-style: solid; height: 50px')
		Object.keys(json).map(i=>{
			switch(i){
				case 'tag' : break
				case 'text': dom.innerHtml = json.text; break
				case 'ctn': dom.addEventListener('click',function(){
					dom.innerHtml = `${json.text} ${dom.getAttribute('ctn')+json.ctn}개   ${json.cost}`
				});break
				default : dom.setAttribute(i,json[i]); break
			}
		})
		return dom
	}
}