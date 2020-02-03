var uloadsum=0;
var uloadtimesgradesum=0;
var multiple=1;
var gp;
var uloadarray=[];
var gradearray=[];
  $(document).ready(function() {
        $('#courseno').on('change', function(){
            $('#next').removeClass('hidden'); 
            $('#table').addClass('hidden');
            $('#table').empty();
            $('#table').append('<tr><th><b>Course</b></th><th><b>Unit Load</b></th><th><b>Grade</b></th></tr>')
        });
        $('#next').on('click', function(){
            $('#next').addClass('hidden');
            $('#print').removeClass('hidden');
            $('#table').removeClass('hidden');
            for(x=$("#courseno").val(); x>0; x--){
            $('#table').append("<tr><td class='pastecourse'><b id='a'><input type='text' class='course'></b></td><td class='row'><input type='number'min='1' max='6' class='unitload'></td><td><select name='grade' class='grade'><option value=''>--</option><option value='5'>a</option><option value='4'>b</option><option value='3'>c</option><option value='2'>d</option> <option value='1'>e</option><option value='0'>f</option></select></tr>")}
        })
        $('#print').on('click', function(){
            $(".unitload").each(function(){
                uloadarray.push($(this).val());
                uloadsum= uloadsum + parseInt($(this).val());
            })
            $(".grade").each(function(){
                gradearray.push($(this).val());
            })
            for (y=0;y<$('#courseno').val();y++){
                uloadtimesgradesum = uloadtimesgradesum + (parseInt(gradearray[y]*parseInt(uloadarray[y])));
            }
            for(r=$("#courseno").val();r>-1;r--){
                $('.pastecourse').eq(r).html($('.course').eq(r).val());
             }
         gp= parseFloat((uloadtimesgradesum/uloadsum).toFixed(5));
         //alert(gp);
         uloadarray=[];
         gradearray=[];
         uloadsum=0;
         uloadtimesgradesum=0;
         multiple=1;
         switch(true){
            case(gp>=4.5): $('#remark').html("your gp is "+gp+" <br> you have a first class GP, keep it up");
            break;
            case(gp>=3.5 && gp<4.5): $('#remark').html("your gp is "+gp+" <br>you have a second class upper, go for glory");
            break;
            case(gp>=3.0 && gp<3.5): $('#remark').html("your gp is "+gp+" <br>you have a second class lower");
            break;
            case(gp>=1.5 && gp<2.5): $('#remark').html("your gp is "+gp+" <br> you have a third class");
            break;
            case(gp<1.5): $('#remark').html("your gp is "+gp+" <br>Guy walliahi you no try");
            break;
            case(gp==5): $('#remark').html("your gp is "+gp+" <br>You are a genius, a joy to behold");
            break;
         }
        })  
    })
