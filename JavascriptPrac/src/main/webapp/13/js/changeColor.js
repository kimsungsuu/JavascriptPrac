/**
지금은 텍스트를 클릭하면 빨간색으로 변하도록 설정했는데, 일정 시간이 지날 때마다 자동으로 색깔이 변하는 기능을 만들려면 어떻게 해야할까?

 */

var heading = document.querySelector('#heading');

heading.onclick = function(){
	heading.style.color = "red";
}

