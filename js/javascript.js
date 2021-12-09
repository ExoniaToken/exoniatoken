function openright()
{
    document.body.style.overflowY = "hidden";
    document.getElementById('menu').style.marginTop = '0px';
}

function closeright()
{
    document.body.style.overflowY = "auto";
    document.getElementById('menu').style.marginTop = '-200vh';
}

function copy(){
    navigator.clipboard.writeText('0x43121459b77288d44c4a48761ab8a0571198da75');
    alert("Copy Successful!");
    }