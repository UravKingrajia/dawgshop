document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var dawgifiedText = inputText + " = The Best";
    document.getElementById('output').innerHTML = dawgifiedText;
    
};

