/*function hyper(){
    var hpvar = document.getElementById("hyper").innerText;
    hpvar = hpvar.replace(/div{(.*)}/g,"<div>$1</div>");
    hpvar = hpvar.replace(/div\[(.*)\]{(.*)}/g,"<div $1>$2</div>");
    hpvar = hpvar.replace(/p\[(.*)\]{(.*)}/g,"<p $1>$2</p>");
    hpvar = hpvar.replace(/p{(.*)}/g,"<p>$1</p>");
    hpvar = hpvar.replace(/h1{(.*)}/g,"<h1>$1</h1>");
    hpvar = hpvar.replace(/h1\[(.*)\]{(.*)}/g,"<h1 $1>$2</h1>");
    hpvar = hpvar.replace(/h2{(.*?)}/g,"<h2>$1</h2>");
    hpvar = hpvar.replace(/h2\[(.*)\]{(.*?)}/g,"<h2 $1>$2</h2>");
    hpvar = hpvar.replace(/h3{(.*?)}/g,"<h3>$1</h3>");
    hpvar = hpvar.replace(/h3\[(.*)\]{(.*?)}/g,"<h3 $1>$2</h3>");
    hpvar = hpvar.replace(/h4{(.*?)}/g,"<h4>$1</h4>");
    hpvar = hpvar.replace(/h4\[(.*)\]{(.*?)}/g,"<h4 $1>$2</h4>");
    hpvar = hpvar.replace(/h5{(.*?)}/g,"<h5>$1</h5>");
    hpvar = hpvar.replace(/h5\[(.*)\]{(.*?)}/g,"<h5 $1>$2</h5>");
    hpvar = hpvar.replace(/h6{(.*?)}/g,"<h6>$1</h6>");
    hpvar = hpvar.replace(/h6\[(.*)\]{(.*?)}/g,"<h6 $1>$2</h6>");
    hpvar = hpvar.replace(/_for{(.*?)}/g,"<h4>$1</h4>");
    console.log(hpvar);
    document.getElementById("hyper").innerHTML = hpvar;
}
*/
function extractVars(myRe, str){
    var missingVars = [];
    while ((results = myRe.exec(str)) !== null) {
        missingVars.push(results[1]);
    }
    return missingVars;
}

function inof(){
    return 'a';
}
window.onload = function(){
    var hypercode = document.body.innerHTML;
    var hrva = extractVars(/\{\%(.*?)\%\}/g, hypercode);

    hypercode = hypercode.replace(/`(.*)`/g,'<span class="h-text">$1</span>');

    for(var hi in hrva){
        //hrva[hi] = hrva[hi].trim();
        if(hrva[hi].match("font=") ){
            hypercode =  hypercode.replace("{%"+hrva[hi]+"%}",'<span style="font-size:'+hrva[hi].replace(/font\=/g,"")+';">');
            console.log(hypercode);
        }
        else if(hrva[hi].match("bk-color=")){
            hypercode = hypercode.replace("{%"+hrva[hi]+"%}",'<span style="background-color:'+hrva[hi].replace("bk-color=","")+';">');
        } 
        else if(hrva[hi].trim() == "exit"){
            hypercode = hypercode.replace("{%"+hrva[hi]+"%}",'</span>');
        }
        else if(hrva[hi].trim() == "center"){
            hypercode = hypercode.replace("{%"+hrva[hi]+"%}",'<div style="text-align: center; float:center;">');
        }
        else if(hrva[hi].match("color=")){
            hypercode = hypercode.replace("{%"+hrva[hi]+"%}",'<span style="color:'+hrva[hi].replace("color=","")+';">');
        }
        else if(hrva[hi].trim()=="/div"){
            hypercode = hypercode.replace("{%"+hrva[hi]+"%}",'</div>');
        }
 

    }
    console.log(hypercode);
    document.body.innerHTML = hypercode;
}

//-----------
