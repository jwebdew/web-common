$(function(){
       //푸터추가               
    //load => 서버에 있는 데이터를 가져옴 

        $('#header').load('common/header.html', function(){
            $('button').click(function(){
                $('.nav').toggle()
            });
        })


           $('#footer').load('common/footer.html')

})
    
   
 