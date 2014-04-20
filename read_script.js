var re = /\s+/;
var word_pointer = 0;
var split
function change_word() {
    document.getElementById('word').innerHTML=words[word_pointer];
    word_pointer++;
	document.getElementsByTagName('progress')[0].setAttribute('max', words.length);
	document.getElementsByTagName('progress')[0].setAttribute('value', word_pointer);

	if (word_pointer == words.length + 1){
	    clearInterval(timer);
		document.getElementById('word').innerHTML="Вы дочитали!";
	}
}
function start(){
    var select = document.getElementById('select_speed');
    var value = select.value;
    words = document.getElementById('text').value.split(re);
	timer = setInterval(change_word, value);
}
function pause(){
    timer_stop = clearInterval(timer);
}