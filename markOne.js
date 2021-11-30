function check(question,answer){
    if(question=="car" && answer=="bmw"){
      return 1;
    }
    else if(question=="actor" && answer=="Sushant"){
      return 1;
    }
    else if(question=="person" && answer=="dad"){
      return 1;
    }
    else if(question=="book" && answer=="wingsoffire"){
      return 1;
    }
    else if(question=="job" && answer=="sde"){
      return 1;
    }
    else{
      return 0;
    }
  }
  function questions(){
    var list=["car","actor","person","book","job"];
    var score=0;
    for(var i=0;i<5;++i){
      var name=readline.question("What is Dorababu's favourite "+list[i]);
      var res=check(list[i],name);
      if(res){
        console.log("correct answer");
      }
      else{
        console.log("wrong answer");
      }
      console.log("your score is",score+res);
      score+=res;
    }
    
    console.log("You know ",score*20,"% about Dorababu");
  }
  var readline=require('readline-sync');
  var name=readline.question("Please enter your name");
  console.log("Welcome to 'DO YOU KNOW DORABABU' game ",name);
  questions();
  