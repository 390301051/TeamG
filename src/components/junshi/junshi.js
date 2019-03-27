window.onload=function(){
	//  中部左侧新闻切换卡
	var items=document.querySelectorAll(".middle-left .itemclass a");
	var itemshow=document.querySelectorAll(".middle-left .itemshow");
	for(let i=0;i<items.length;i++){
		items[i].onmouseenter=function(){
			for(let i=0;i<items.length;i++){
				items[i].className="";
				itemshow[i].classList.remove("show");
				itemshow[i].classList.add("hidden");
			}
			this.className="active";
			itemshow[i].classList.remove("hidden");
			itemshow[i].classList.add("show");
		}
	}
}
export default window.onload