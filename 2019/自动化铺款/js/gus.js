
$.ajax({
        url: 'csv/V1.csv',
        dataType: 'text'
    }).done(successFunction);
    
    var book = []
   
    function successFunction(data) {

        var allRows = data.split(/\r?\n|\r/);
         console.log(book)
        var table = '<table>';
        for (var singleRow = 0; singleRow < oTi.innerHTML; singleRow++) {
            if (singleRow === 0) {
                table += '<thead>';
                table += '<tr>';
            } else {
                table += '<tr>';
            }

            var rowCells = allRows[singleRow].split(',');

            var m = {
                a: rowCells[0],
                b: rowCells[1],
                c: rowCells[2],
                d: rowCells[3],
                e: rowCells[4],
                f: rowCells[5],
                g: rowCells[6],
                h: rowCells[7],
                i: rowCells[8],
                j: rowCells[9],
                k: rowCells[10],
                l: rowCells[11],
                m: rowCells[12],
                n: rowCells[13],
                o: rowCells[14],
                p: rowCells[15],
                q: rowCells[16],
                r: rowCells[17],
                s: rowCells[18],
                t: rowCells[19],
                u: rowCells[20],
                v: rowCells[21],
                w: rowCells[22],
                x: rowCells[23],
                y: rowCells[24],
                z: rowCells[25],
                aa: rowCells[26],
                ab: rowCells[27],
                ac: rowCells[28],
                ad: rowCells[29],
                ae: rowCells[30],
                af: rowCells[31],
                ag: rowCells[32],
                ah: rowCells[33],
                ai: rowCells[34],
                aj: rowCells[35],
                ak: rowCells[36],
            }
            book.push(m)

            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow === 0) {
                    table += '<th>';
                    table += rowCells[rowCell];
                    table += '</th>';
                } else {
                    table += '<td>';
                    table += rowCells[rowCell];
                    table += '</td>';
                }
            }
            if (singleRow === 0) {
                table += '</tr>';
                table += '</thead>';
                table += '<tbody>';
            } else {
                table += '</tr>';
            }
        }



        table += '</tbody>';
        table += '</table>';
        $('body').append(table);
    }
  

    var b = book.length

      function d() {
        b = book.length - 1
        for (var i = 0; i < book.length; i++) {
            setTimeout(() => {
                if (b !== 0) {
                console.log(b)
                drawBook(book[b])
                b--
            }
        }, i *1000 )
        }
    }


 function drawBook(arr) {
        console.log(arr)
        var c = document.getElementById("myCanvas");
        var img = ''
        var ctx = c.getContext("2d");
        // cxt.drawImage('c.png',0,0)

        var img = new Image();
//        if (Math.random() < 0.5) {
//            img.src = "images/bz.jpg";
//        } else {
//            img.src = "images/bz.jpg";
//        }


        if (arr.i=="薄款" && arr.j=="修身" ) {
           img.src = "images/bx.jpg";
        } else if(arr.i=="薄款" && arr.j=="适中"){
                img.src = "images/bs.jpg";
            }else
                if(arr.i=="薄款" && arr.j=="宽松"){
                    img.src = "images/bk.jpg";
                }else
                    if(arr.i=="适中" && arr.j=="修身"){
                        img.src = "images/sx.jpg";
                    }else
                        if(arr.i=="适中" && arr.j=="适中"){
                            img.src = "images/ss.jpg";
                        }else
                            if(arr.i=="适中" && arr.j=="宽松"){
                                img.src = "images/sk.jpg";
                            }else
                                if(arr.i=="厚款" && arr.j=="修身"){
                                    img.src = "images/hx.jpg";
                                }else
                                    if(arr.i=="厚款" && arr.j=="适中"){
                                        img.src = "images/hs.jpg";
                                    }else
                                        if(arr.i=="厚款" && arr.j=="宽松"){
                                            img.src = "images/hk.jpg";
                                        }else {
                                            img.src = "images/bz.jpg";

                                        }




        img.onload = function() {
            ctx.drawImage(img, 0, 0, 790, 430);
            ctx.fillStyle = "#6b6b6b";
            ctx.textAlign = "center";
            ctx.font = "17px victoriai";
            ctx.fillText(arr.c, 105, 179);
            ctx.fillText(arr.d, 224, 179);
            ctx.fillText(arr.e, 337, 179);
            ctx.fillText(arr.f, 458, 179);
            ctx.fillText(arr.g, 571, 179);
            ctx.font = "bold 17px MFKeSongRegular";
            ctx.fillText(arr.h, 686, 179);
//2行
            ctx.font = "17px victoriai";
            ctx.fillText(arr.l, 105, 218);
            ctx.fillText(arr.m, 224, 218);
            ctx.fillText(arr.n, 337, 218);
            ctx.fillText(arr.o, 458, 218);
            ctx.fillText(arr.p, 571, 218);
            ctx.font = "bold 17px MFKeSongRegular";
            ctx.fillText(arr.q, 686, 218);
//3行

            ctx.font = "17px victoriai";
            ctx.fillText(arr.u, 105, 257);
            ctx.fillText(arr.v, 224, 257);
            ctx.fillText(arr.w, 337, 257);
            ctx.fillText(arr.x, 458, 257);
            ctx.fillText(arr.y, 571, 257);
            ctx.font = "bold 17px MFKeSongRegular";
            ctx.fillText(arr.z, 686, 257);
//4行

            ctx.font = "17px victoriai";
            ctx.fillText(arr.ad, 105, 296);
            ctx.fillText(arr.ae, 224, 296);
            ctx.fillText(arr.af, 337, 296);
            ctx.fillText(arr.ag, 458, 296);
            ctx.fillText(arr.ah, 571, 296);
            ctx.font = "bold 17px MFKeSongRegular";
            ctx.fillText(arr.ai, 686, 296);

            var i = c.toDataURL()
            download(i, arr.a, "jpg")
            // Canvas2Image.saveAsPNG(c)
        }
    }


