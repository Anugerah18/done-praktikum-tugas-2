function terimainput(){
    var a=document.forms['biodata']['nama'].value;
    var b=document.forms['biodata']['username'].value;
    var c=document.forms['biodata']['email'].value;
    var d=document.forms['biodata']['biografi'].value;

    var tabel = document.getElementById('input');
    var row = tabel.insertrow(1);
    var cell1 = row.insertrow(0);
    var cell2 = row.insertrow(1);
    var cell3 = row.insertrow(2);
    var cell4 = row.insertrow(3);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;

}