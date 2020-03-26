
var OneName=prompt("Player one: Enter your Name ,you will be Blue");
var Twoname=prompt("Player two: Enter your Name ,you will be Red");
var t1=OneName+": it is your turn, please pick a column to drop your blue chip.";
var t2=Twoname+": it is your turn, please pick a column to drop your red chip.";


function checkColor(one,two,three,four)
{
  p1=$('.grid-item').eq(one).css('backgroundColor');
  p2=$('.grid-item').eq(two).css('backgroundColor');
  p3=$('.grid-item').eq(three).css('backgroundColor');
  p4=$('.grid-item').eq(four).css('backgroundColor');
  if(p1===p2 && p1===p3 && p1===p4 && p1!=='rgb(187, 187, 187)' && p1!==undefined)
  {
    return true;
  }
  else return false;
}



function hwin()
{
  for(var i=0;i<6;i++)
  {
    for(var j=0;j<4;j++)
    {
      if(checkColor(7*i+j,7*i+j+1,7*i+j+2,7*i+j+3)){return true;}
      else continue;
    }
  }
}
function vwin()
{
  for(var i=0;i<3;i++)
  {
    for(var j=0;j<7;j++)
    {
      if(checkColor(7*i+j,7*(i+1)+j,7*(i+2)+j,7*(i+3)+j)){return true;}
      else continue;
    }
  }
}

function dwin()
{
  for(var i=0;i<6;i++)
  {
    for(var j=0;j<7;j++)
    {
      if(checkColor(7*i+j,7*(i+1)+j+1,7*(i+2)+j+2,7*(i+3)+j+3)){return true;}
      else if (checkColor(7*i+j,7*(i-1)+j+1,7*(i-2)+j+2,7*(i-3)+j+3)) {
          return true;
      }
      else continue;
    }
  }
}

$('p').text(OneName+": it is your turn, please pick a column to drop your blue chip.");
$('.grid-item').on('click',function () {
    var i=$('.grid-item').index($(this));
    i=(i)%7;
    for(var j=5;j>=0;j--)
    {
      var color=$('.grid-item').eq(i+7*j).css('backgroundColor');
      if(color==='rgb(187, 187, 187)')
      {
        if($('p').text()==t1)
        {
          $('.grid-item').eq(i+7*j).css('backgroundColor','#0099ff');

          if(hwin() || vwin() || dwin())
          {
            $('p').html("<h2>"+OneName+" has won the game.To play again restart.</h2>");
            break;
          }
          else{
          $('p').text(Twoname+": it is your turn, please pick a column to drop your red chip.");
          break;
         }
        }
        else if ($('p').text()==t2)
        {
         $('.grid-item').eq(i+7*j).css('backgroundColor','#ff3300');
         var co=$('.grid-item').eq(i+7*j).css('backgroundColor');
         if(hwin() || vwin() || dwin())
         {
           $('p').html("<h2>"+Twoname+" has won the game.To play again restart.</h2>");
           break;
         }
         else{
         $('p').text(OneName+": it is your turn, please pick a column to drop your blue chip.");
         break;
         }
        }
      }
    }
  })
