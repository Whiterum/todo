define(function(require){
    var $ = require('jquery');
    var Mustache = require('mustache');

    var list = [];
    list.push({
        id: 'asd',
        inner: '大家早上好',
        sex:'男',
        age:'18',
        index:1,
        isDelete:false,
        statu:'单身',
        education:'高中',
        weight:'70',
        isShow:false                
    });
    list.push({
        id: 'sss',
        inner: 'think',
        sex:'女',
        age:'22',
        index:2,
        isDelete:false,
        statu:'已婚',
        education:'博士',
        weight:'90',
        isShow:false
    })
        
    $(function(){
        render(list);
        var cindex = 3;
        //var slideShow = false;
        function render(list){
            var html = {
                'ide':[]        
            }
            for(i = 0, len = list.length; i<len; i++){
                if(!list[i].isDelete){
                    html.ide.push(list[i]);
                }
            }
            var cModify = $('#modify').html();
            $('#inn tbody').html(Mustache.render(cModify,html));                  
            scroll();
        }
       
        //显示详情
        function showSlide(aimList){
            var sModify = $('#modifySlide').html();
                $('.slide').html(Mustache.render(sModify,aimList));
        }
        //添加内容
        $('#serchmit').click(function(){
            var obj = {} 
            obj.id = $('#index').val();
            obj.inner = $('#serch').val();
            obj.sex = $('#sex').val();
            obj.age = $('#age').val();
            obj.statu = $('#statu').val();
            obj.education = $('#education').val();
            obj.weight = $('#weight').val();
            obj.index = cindex;
            obj.isDelete = false;
            list.push(obj);   
            render(list); 
            cindex++;
            $('#index').val("");
            $('#serch').val(""); 
            $('#sex').val("");
            $('#age').val("");
            $('#statu').val(""); 
            $('#education').val(""); 
            $('#weight').val(""); 
        });
    
        //删除按钮    
        $('#inn').on('click','[name = deleters]',function(e){
            var cindex = $(e.target).attr('index');
            for(var i=0,len=list.length; i<len; i++){
                if(list[i].index == cindex){
                    list[i].isDelete = true;
                }
            }
            render(list)
        })
       
        //详情展示
        $('#inn').on('click','[name=detials]',function(e){
            var cindex = $(e.target).attr('index');
            var chtml = {
                'ide':[],
            };
            var cobj = {};
            for(var i=0, len=list.length; i<len; i++){
                if(list[i].index == cindex){
                    $('.cover').fadeIn();
                    $('.slide').slideDown();
                    chtml.ide.push(list[i]);
                    showSlide(chtml);
                }
            }
        })
        
        //详情隐藏
        $('#inn').on('click','[name=back]',function(){
            $('.slide').slideUp();
            $('.cover').fadeOut();
        })

        //修改按钮绑定事件
        $('#change').click(function(){       
            var cid = $('#changeid').val();
            console.log(cid);
            var result = {};
            for(var i = 0, len = list.length; i<len; i++){
                if(list[i].id.indexOf(cid) != -1){
                    result.id = $('#changeid').val();
                    result.inner = $('#changeinner').val();
                    result.sex = $('#changesex').val();
                    result.age = $('#changeage').val();
                    result.idDelete = false;
                    result.index = list[i].index;
                    list.splice(i,1,result);
                    render(list);      
                }
            }
        })
        
        //查询按钮绑定事件
        $('#select').click(function(){
            serch();
        })
        
        //查询
        function serch(){
            var serchid  = $('#serchid').val();
            if(serchid == ""){
                render(list);
            } else{
                var result = [];
                for(var i = 0, len = list.length; i<len; i++){
                    if(list[i].id.indexOf(serchid) != -1){
                        result.push(list[i])                    
                    }
                }
                render(result);
            }
        }
        
        //判断页面滚动、
        function scroll(){
            var oftHeight = $('#inn').height();
            if(oftHeight > 300){
                var see = oftHeight - 300;
                $('.show').scrollTop(see);
            }
        }
    });
    as();
    function as(){    
      $.ajax({

          type: 'GET',
          url: 'http://192.168.0.108:8080/why/selects' ,
          //data: data,
          dataType: 'jsonp' ,
          success: function(data){
              console.log(data);
              //alert(123);
          } 
          //dataType: dataType
      });
    }
    //$.get('http://192.168.0.108:8080/why/selects',function(){
    //                console.log(12);
    //                });       

    //};
    //

})  
