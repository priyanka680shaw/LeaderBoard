const player_list = document.querySelector("#player_list");

function addData(){
   for(let i=0; i<playerListArray.length; i++){
      const  player = playerListArray[i];
      const liEl = document.createElement("li");
      const nameContent = document.createElement("span");
      nameContent.innerText = player.name;
      const countryContent =  document.createElement("span");
      countryContent.innerText = player.country;
      const scoreContent = document.createElement("span");
      scoreContent.innerText = player.score;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete ";
      const increaseBtn = document.createElement("button");
      const deceBtn = document.createElement("button");
      increaseBtn.innerText = "+5";
      deceBtn.innerText = "-5";
      increaseBtn.setAttribute('onclick',`incScoreHandler(${i})`);
      deceBtn.setAttribute('onclick',  `decScoreHandler(${i})`);
      deleteBtn.setAttribute('onclick', `deleteHandler(${i})`);
      deleteBtn.id="del";
      liEl.append(nameContent,countryContent,scoreContent,increaseBtn,deceBtn,deleteBtn);
      player_list.append(liEl);
      const inp = document.querySelectorAll("input");
      inp.forEach(element => {
         if(element.type != "submit")
            element.value = "";  

      });
     
      console.log(document.querySelector("#sub").children)  ;
   }
}

function refresh(){
   
   playerListArray.sort((p1 , p2) => parseInt(p2.score) - parseInt(p1.score));
   player_list.innerHTML = ' ';
   addData();
 }

function incScoreHandler(index){
   const ans = playerListArray[index].score+=5;
   refresh();
  //playerListArray.push(ans)
  //console.log(ans);
}
function decScoreHandler(index){
  const ans = playerListArray[index].score-=5;
  refresh();
  //console.log(ans);
}



function deleteHandler(index){
   alert("Are you Sure");;
   playerListArray.splice(index,1);
   refresh();
}


const playerListArray = [];
function addPlayer(event){
   event.preventDefault();
   const player_list = document.querySelector("#player_list");
   const firstName = document.querySelector("#fname").value;
   const LastName = document.querySelector("#lname").value;
   const country = document.querySelector("#country").value;
   const score = document.querySelector("#score").value;
   const playerData ={
     name : firstName +" " +LastName,
     country : country,
     score : parseInt(score)
   }
   playerListArray.push(playerData);
   playerListArray.sort((p1 , p2) => parseInt(p2.score) - parseInt(p1.score));
   
   player_list.innerHTML = ' ';
   addData();
}
console.log(playerListArray);

