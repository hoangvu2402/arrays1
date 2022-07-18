document.getElementById("nhap").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("nut").click();   
    }
    if (event.key == "Escape"){
        location.reload();
    }
});

var arrs = []

function exit() {
    location.reload()
}

function inputNum() {
    var temp = document.getElementById('nhap').value

    arrs.push(temp)
    document.getElementById('nhap').value = ''
}

function calc() {
   if(arrs[0] == undefined) {
    document.getElementById('so-chan').innerHTML ='vui long an enter hoac nhap 1 so'
    return 0
   }
    function snt(a) {
        if(a < 2) {
            return 0
        }
        else if( a < 4) {
            return a
        }
        else {
            for(var i = 2; i < a; i++) {
                if (a % i == 0) {
                    return 0
                }
            }

            return a
        }
    }
    
    document.getElementById('day').innerHTML = 'day so da nhap: ' + arrs

    var chan = []
    var le = []
    var soNt = []
    var tong = 0


    for(var i of arrs) {
        var t = parseInt(i)
        if(i == '') {
            document.getElementById('so-chan').innerHTML ='day vua nhap bi loi'
            return 0
            
        }
        tong += t

        var nt = snt(t)
        if(nt != 0) {
            soNt.push(t)
        }
        if (t % 2 == 0) {
            chan.push(i)

        }
        else {
            le.push(i)

        }
    }

    console.log(Math.max(arrs))

    document.getElementById('so-chan').innerHTML ='cac so chan: ' + chan
    document.getElementById('so-le').innerHTML = 'cac so le: ' + le
    document.getElementById('tong').innerHTML = 'tong cua day: ' + tong
    document.getElementById('max').innerHTML = 'so lon nhat cua day: ' + Math.max(...arrs)
    document.getElementById('snt').innerHTML = 'so nguyen to cua day: ' + soNt

    
}