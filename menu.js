var section = document.querySelectorAll('.section');
       var sections = {};
       section.forEach(function(e){
           console.log(e.id,e.offsetTop)
           sections[e.id] = e.offsetTop;
       })
       window.onscroll = function(){
           var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
           console.log(scrollPos);
       
           for(var x in sections){
                if(sections[x]<=scrollPos){
                    document.querySelector('.active').setAttribute('class','');
                    document.querySelector('a[href*='+x+']').setAttribute('class','active')
                }
            }
        }



        
var count=1;
function addData() {
    console.log("Event fired")
    
    var title = document.getElementById("title").value;
    var blogText = document.getElementById("blogText").value;
    var expertName = document.getElementById("expertName").value;

    var divTag = document.getElementById("main");

    var empTag = document.createElement("p");
    var empTagContent = document.createTextNode(title+" , "+blogText+" , "+expertName)

    empTag.setAttribute("class","myClass"); // adding attribute
    empTag.setAttribute("id",count);

    var deleteNode = document.createElement("a")
    var deleteNodeValue = document.createTextNode("X")
    deleteNode.appendChild(deleteNodeValue);

    deleteNode.setAttribute("href","#");
    deleteNode.setAttribute("onClick","deleteTag("+count+")");
    
    empTag.appendChild(deleteNode);
    empTag.appendChild(empTagContent); //content added to p
    
    divTag.appendChild(empTag); // p added todiv

    count++;
    reset();
}

function reset() {
    document.getElementById("title").value=""
    document.getElementById("blogText").value=""
    document.getElementById("expertName").value=""
}

function deleteTag(idValue) {
    console.log("Event fired...")
    var obj = document.getElementById(idValue);
    obj.remove();
}