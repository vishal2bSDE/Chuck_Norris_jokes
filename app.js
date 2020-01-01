document.querySelector(".get-jokes").addEventListener("click",getJokes);

function getJokes(event)
{
    //console.log("jokes");
    //to just grab number from the input use > input[type="number"]
    const number=document.querySelector('input[type="number"]').value;
    const xhr=new XMLHttpRequest();
    xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`
    ,true);
    xhr.onload=function(){
        if(this.status===200)
        {
            const response=JSON.parse(this.responseText);
           // console.log(response);
            let output="";
            if(number>0 && response.type==="success")
            {
                response.value.forEach(function(joke)
                {
                    output+=`<li>${joke.joke}</li>`;
                });
            }else{
                output+="<li> Something went Wrong</li>";
            }document.querySelector(".jokes").innerHTML=output;
            document.querySelector('input[type="number"]').value="";
        }
    }
    xhr.send();
    //console.log(number);
    event.preventDefault();
}