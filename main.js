window.onload = build;
var myArray = ["Laurence", "Mike", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
var message = document.getElementById('message');

function build() {
    var html = "<h1>My Friends Table</h1><table>";
    for (var x = 0; x < myArray.length; x++) {
        html += '<tr data-row="' + x + '"data-vote="0"><td>' + myArray[x] + '</td><td class="box" >' + (x + 1) + '</td><td>0</td></tr>';
    }
    html += '</table>';
    document.getElementById('output').innerHTML = html;
    var elbox = document.querySelectorAll('#output .box');
    var a;
    var v;
    for (var x = 0; x < elbox.length; x++) {
        elbox[x].onclick = function () {
            //a = this.parentElement.getAttribute('data-row');
            a = this.closest('[data-row]').getAttribute('data-row');
            // console.log(myArray[a]);
            message.innerHTML = myArray[a] + " is on row #" + a;
            v = this.closest('[data-vote]').getAttribute('data-vote');
            v++
            this.parentElement.lastElementChild.innerText = v;
            this.parentElement.setAttribute("data-vote", v);
            console.log(v);
        }
    }
}