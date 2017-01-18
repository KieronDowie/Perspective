//Variables
const factor = 20;
const color = '#B5B5B5';

function setTextShadow(elem, color, x, y)
{
	x = Math.round(x);
	y = Math.round(y);
	var shadow = '';
	var highest = Math.abs(x)>Math.abs(y)?x:y;
	var lowest = Math.abs(x)>Math.abs(y)?y:x;
	var co = Math.abs(highest)/Math.abs(lowest);
	while (highest != 0)
	{
		if (Math.abs(x)>Math.abs(y))
		{
			shadow += highest+"px "+lowest+"px 0px "+color+', ';
		}
		else
		{
			shadow += lowest+"px "+highest+"px 0px "+color+', ';
		}
		highest += highest>0?-1:1;
		if ( ( Math.abs(lowest) - 1) * co >= Math.abs(highest) )
		{
			lowest += lowest>0?-1:1;
		}
	}
	shadow = shadow.substring(0,shadow.length-2); //Get rid of the trailing comma and space.
	$(elem).css({'text-shadow':shadow});
}
function getScreenMiddle()
{
	return {x:$(document).width()/2, y:$(document).height()/2};
}
function getMousePosition(e)
{
	return {x: e.pageX, y: e.pageY};
}
function updateSpace(e)
{
	var mouse = getMousePosition(e);
	var shadowDimension = calculateShadow(mouse,getScreenMiddle());
	setTextShadow('h1',color,shadowDimension.x,shadowDimension.y);
}
function calculateShadow(mouse,middle)
{
	var dx = middle.x-mouse.x;
	var dy = middle.y-mouse.y;
	return {x:dx/factor,y:dy/factor};
}
function changeWord()
{
	var word = prompt('Enter a new word:');
	$('h1').html(word);
}