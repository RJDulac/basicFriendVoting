window.onload = build;
var myArray = ["Laurence", "Mike", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
var message = document.getElementById('message');

function build() {
    var html = "<h1>My Friends Table</h1><table>";
    for (var x = 0; x < myArray.length; x++) {
        html += '<tr data-row="' + x + '" data-vote="0"><td class="box" >' + (x + 1) + '</td><td>' + myArray[x] + '</td><td>0</td></tr>';
    }
    html += '</table>';
    document.getElementById('output').innerHTML = html;
    voteCount();
}

function voteCount() {
    var elbox = document.querySelectorAll('#output .box');
    var a;
    var v;
    for (var x = 0; x < elbox.length; x++) {
        elbox[x].onclick = function () {
            //a = this.parentElement.getAttribute('data-row');
            a = this.closest('[data-row]').getAttribute('data-row');
            message.innerHTML = myArray[a] + " is on row #" + a;
            v = this.closest('[data-vote]').getAttribute('data-vote');
            v++;
            console.log(this.parentElement.lastElementChild);
            this.parentElement.lastElementChild.innerText = v;
            this.parentElement.setAttribute("data-vote", v);
        }
    }
}
var addNew = document.getElementById('addNew');

addNew.onclick = function () {
    var addFriend = document.getElementById('addFriend').value;
    var tr = document.createElement('tr');
    tr.setAttribute('data-row', myArray.length + 1);
    tr.setAttribute('data-vote', 0)
    tr.innerHTML = '<td class="box">' + (myArray.length + 1) + '</td><td>' + addFriend + '</td><td>0</td>'
    // var td = document.createElement('td');

    // tr.appendChild(td);
    // td.appendChild(document.createTextNode(myArray.length +1));

    // td = document.createElement('td');
    // tr.appendChild(td);
    // td.appendChild(document.createTextNode(addFriend));

    // td = document.createElement('td');
    // tr.appendChild(td);
    // td.appendChild(document.createTextNode('0'));

    var container = document.querySelector("#output table tbody");
    console.dir(container)
    console.dir(tr);
    container.appendChild(tr);
    myArray.push(addFriend);
    voteCount();
};