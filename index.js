
$(window).on("load",function()
{  const input=$("#form-content");
    
    $(".form").on('submit',function(e)
{   
    console.log(input);
    e.preventDefault();
    var task=input.val();
    input.val('');
    
    if(!task)
    {   console.log("please insert the task!");
        return;
    }
    else
    {
    console.log(task);
     var t1=document.createElement('div');
     $(t1).addClass("Task-container");
     $(".Task").append(t1);
     var t2=document.createElement("div");
     $(t2).addClass("content");
     $(t1).append(t2);
     var t3=document.createElement('input')
     $(t3).attr('value',task);
     $(t3).attr('id','content');
     $(t3).attr('readonly',true)
     $(t2).append(t3);
     var t4=document.createElement('div')
     $(t4).addClass('action');
     $(t1).append(t4);
     var button1=document.createElement('button');
     $(t4).append(button1);
     $(button1).text('Edit');
     $(button1).attr('id','edit-button');
     var button2=document.createElement('button');
     $(t4).append(button2);
     $(button2).text('Delete');
     $(button2).attr('id','delete-button');
     $(button2).click(function()
     {
        $(t1).remove();
     }
    )
    $(button1).click(function(){
        if($(button1).text()==="Edit")
        {   console.log("Ah")
            $(button1).text('Save');
            
            $(t3).attr('readonly',false);
            $(t3).css('color',"#3BACB6");

        }
        else if($(button1).text()==="Save")
        {   console.log("Ah")
            $(button1).text('Edit');
            
            $(t3).attr('readonly',true)
            $(t3).css('color',"#ffffff");
        }

    })
    
    
     
    }
    
})
})

