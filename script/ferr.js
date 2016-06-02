    require(['../common/script/test']);
    // var kes =0;
    var submit = document.getElementById('submit');
    var inner = document.getElementsByTagName('textarea');
    var deleter = document.getElementById('delete');
    var tas = document.getElementById('content');
    var list = {
        id :  ['1','2','3'],
        inner : ['asd','AD','haha']
    }
    window.onload = function(){    
        addTest_id(list);
        }

        function render(list,dom,joininner){
            var html = [];
            for (var i = 0,len = list.id.length; i < len; i++) {
                html.push(list.id[i]);
                html.push(list.inner[i]);
            };
            dom.innerHTML = html.join(joininner);
        }
             

        //serch 
         function sherchTest(serchaim,aimid){
             var result = {
                 id : [],
                 inner : []
             };
             for (var i = 0,len = serchaim.id.length ; i < len ; i++) {
                if (serchaim.id[i].indexOf(aimid) != -1) {
                    result.id.push(serchaim.id[i]);
                    result.inner.push(serchaim.inner[i]);
                }
             }
             // render(result,dom,joininner);
             addTest_id(result);
         }

         // delete
         function deleteTest(deletelist,deleteaim){
             for (var i = 0 ,len = deletelist.length; i < len; i++) {
                 if( deletelist[i].indexOf(deleteaim) != -1){
                     deletelist.splice(i,1);
                    testinner.innerHTML = deletelist;
        }
             }
         }

         //add text        function addTest_id(addaim){
             var getid = [];
             var getinner = [];
            var inn = document.getElementById('inn');
            inn.innerHTML = "";
            var tasin = document.querySelectorAll('.contt');
            var lenthis = tasin.length;
                for (var i = 0 , len = addaim.id.length; i < len; i++) {
                    getid.push(addaim.id[i]);
                    getinner.push(addaim.inner[i]);
                    inn.innerHTML += "<div class='contt'>"  + "<p>" + getid[i] + "</p>" + "<br>" +"<p>" + getinner[i] + "</p>" + "<input class='deleters' type='submit'>" + "</div>";
                };

            var deleters = inn.getElementsByTagName('input');
                for (var i = 0; i < deleters.length; i++) {
                    deleters[i].onclick = function(){
                    var id = document.getElementById('index').value;
                    var conn = this.parentNode.parentNode;
                    conn.removeChild(this.parentNode);
                }
            }
            
         }
 

         function addlist(addlistAim){
            var id = document.getElementById('index');
            var inner = document.getElementById('serch');
            addlistAim.id.push(id.value);
            addlistAim.inner.push(inner.value);
            id.value ="";
            inner.value ="";
         }

        serchmit.onclick = function(){
            addlist(list);
            addTest_id(list);
        }



        document.getElementById("select").onclick = function(){
            var aid = document.getElementById('serchid').value;
            sherchTest(list,aid);
        }

        //delete
        function remove(index){
            var tasin = document.querySelectorAll('.contt');
            tasin[index - 1].parentNode.removeChild(tasin[index - 1]);
        }


        //change inner
        function change(index,inner){
            var tasin = document.querySelectorAll('.contt');    
            tasin[index -1].innerHTML = "<p>" + index + "</p>" + "<br/>" + "<p>" + inner  +"</p>" + "<input class='deleters' type='submit'>";            
        }
