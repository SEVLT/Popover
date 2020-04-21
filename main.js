click.addEventListener('click', function (e) {
	popover.style.display = 'block';
	e.stopPropagation(); //阻止冒泡
});
popover.addEventListener('click', function (e) {
    e.stopPropagation();  //点击浮层区域不会使其隐藏
});
document.addEventListener('click', function () {
	popover.style.display = 'none';
});
