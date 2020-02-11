const Park= function(name,ticketPrice){
  this.name=name;
  this.ticketPrice=ticketPrice;
  this.collection=[];
}

Park.prototype.addDino=function(dino){
  this.collection.push(dino);
}

Park.prototype.removeDino=function(){
  this.collection.pop();
}

// method below not working- will query

Park.prototype.mostPopular=function(){
  let slash={guestsAttractedPerDay:0}
  for (let dino of this.collection){
    if (dino.guestsAttractedPerDay >slash.guestsAttractedPerDay){
      slash=dino
    };
  }; return slash
}

// Park.prototype.mostPopular=function(){s
//   const array=[]
//   for (dino of this.collection){
//     array.unshift(dino.guestsAttractedPerDay)
//   };
//   const newArray=array.sort(function(a, b){return a - b});
//   for(dino of this.collection){
//     if(dino.guestsAttractedPerDay === newArray[-1]){
//       return dino.species
//     };
//   };
// }


Park.prototype.find=function(species){
  let dinoArray=[]
  for (dino of this.collection){
    if(dino.species === species){
      dinoArray.push(dino)
    };
  };
  return dinoArray
}

Park.prototype.visitors=function(){
  let guests=0
  for (dino of this.collection){
    guests +=dino.guestsAttractedPerDay;
  };
  return guests;
}

Park.prototype.yearlyVisitors=function(){
  let day=this.visitors();
  let year=day*365;
  return year;
}

Park.prototype.yearlyIncome=function(){
  let guests=this.yearlyVisitors()
  let income=guests*300
  return income
}

Park.prototype.removeSpecies=function(species){
  for(let dino of this.collection){
    if (dino.species === species){
      let remove=this.collection.indexOf(dino);
      this.collection.splice(remove,1);
    };
  }
}

Park.prototype.diet=function(){
  let dinoDiet={'carnivore':0,'herbivore':0,'omnivore':0}
  for(dino of this.collection){
    if(dino.diet==="carnivore"){
      dinoDiet.carnivore +=1;
    }else if(dino.diet==='herbivore'){
      dinoDiet.herbivore+=1;
    }else{
      dinoDiet.omnivore+=1;
    }
  }return dinoDiet;
}


module.exports=Park
