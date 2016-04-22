/*�滻icons��fa���*/
$(function(){
	useFaIcons();
})

function useFaIcons () {
		var icons=[
	["icon-save","fa-save"],
	["icon-cut","fa-cut"],
	["icon-add","fa-plus-circle"],
	["icon-edit","fa-edit"],
	["icon-remove","fa-minus-circle"],
	["icon-search","fa-search"],
	["icon-ok","fa-check"],	
	["icon-help","fa-question"],
	["tree-file","fa-file-text"],
	["icon-undo","fa-undo"],
	["icon-redo","fa-repeat"]

	]
	for (i = 0; i < icons.length; i++) {
		var ic = icons[i]
		$("."+ic[0]).removeClass(ic[0]).addClass("fa fa-blue "+ic[1])
	}

}
	
/**
����fa����������ͼ��
������i λ��
**/	
function freeIcon (i) {
	var icons = [
	"fa-search",
	"fa-heart ",
	"fa-star  ",
	"fa-user  ",
	"fa-film  ",
	"fa-times ",
	"fa-gear  ",
	"fa-cog   "
	];

	i = i? i : Math.round(Math.random()*10,0)
	i = i%8
	return icons[i];
}