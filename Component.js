const compo = {
	createDom(json){
		const dom = document.createElement(json.tag)
		dom.setAttribute('style','border-style: solid; height: 50px')
		Object.keys(json).map(i=>{
			switch(i){
				case 'tag' : break
				case 'ctn' : dom.addEventListener('click',function(){
					dom.setAttribute('ctn',Number(dom.getAttribute('ctn'))+1)
					dom.innerHTML = `${json.text}     ${dom.getAttribute('ctn')} 개`
				});break
				case 'text' : dom.innerHTML = json.text
				case 'br' : break
				default : dom.setAttribute(i,json[i]); break
			}
		})
		console.log(dom)
		return dom
	}
}