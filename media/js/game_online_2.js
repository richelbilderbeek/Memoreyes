function changeturn() {
  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            doo = 0;
            console.log(this.responseText);
            return true;
    }
  };
  xhttp.open("GET", "/changeturn/" + doo, true);
  xhttp.send();
}
let turn = 1;
let ajaxinterval = setInterval(function() {
    set_score();
    changeturn();
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            turn = response.turn;
            if (turn === 1){
                let element = document.getElementById('p1');
                element.style.backgroundColor = "rebeccapurple";
                element.style.color = "#ffffff";
                let element2 = document.getElementById('p2');
                element2.style.backgroundColor = "rgba(0,0,0,0)";
                element2.style.color = "rebeccapurple"
            }else if (turn === 2){
                let element = document.getElementById('p2');
                element.style.backgroundColor = "rebeccapurple";
                element.style.color = "#ffffff";
                let element2 = document.getElementById('p1');
                element2.style.backgroundColor = "rgba(0,0,0,0)";
                element2.style.color = "rebeccapurple";
            }


            if (response.opencard1 !== null || response.opencard1 !== 25){
                memoryFlipTile(response.opencard1, memory_array[response.opencard1]);
            }
            if (response.opencard2 !== null || response.opencard2 !== 25){
                memoryFlipTile(response.opencard2, memory_array[response.opencard2]);
            }
    }
  };
  xhttp.open("GET", "/getgame", true);
  xhttp.send();
}, 1000);


function reset() {
  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            return true;
    }
  };
  xhttp.open("GET", "/set/resetcards", true);
  xhttp.send();
}

function resetscore() {
  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
    }
  };
  xhttp.open("GET", "/set/resetscore", true);
  xhttp.send();
}
