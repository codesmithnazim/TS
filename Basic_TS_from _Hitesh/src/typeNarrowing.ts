
function chaiRelated() {
  type chaiOrder = {
    type: string;
    sugar: number;
  };

  function isChaiOrder(obj: any): obj is chaiOrder {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof obj.type === "string" &&
      typeof obj.sugar === "number"
    );
  }

  let firstChai = {
    type: "masala",
    sugar: 1,
  };

  if (isChaiOrder(firstChai)) {
    console.log(
      "Mr.Nazim Ud Din wanting ",
      firstChai.type,
      " tea with ",
      firstChai.sugar,
      " tea spoons of sugar",
    );
  }

  type masalaChai = {name : "masala chai", spiceLevel: number }
  type gingerChai = {name : "ginger chai", amount: number}
  type elaichiChai = {name : "Elaichi chai", aroma: string}

let newMasalaChai : masalaChai = {name :"masala chai" ,spiceLevel: 12}
console.log("the new chai info = ", newMasalaChai)


type order = masalaChai | gingerChai | elaichiChai

function makeChai(chai: order) {
    switch(chai.name){
        case "ginger chai": 
        {
            console.log("we started the production of ", chai.name )
            break;
        }
        case "Elaichi chai": 
        return "we will serve elaichi chai very soon"
        break;
        default:
            return " by default we'll always server masala chai"
    }
    
}
console.log( makeChai( {name : "masala chai", spiceLevel : 12}))

function usageOfInOperator (chai:masalaChai | gingerChai) {
  if('spiceLevel' in chai)
  {
   return console.log("you have ordered masala chai")
  }
  else if ("aroma" in chai){
    return console.log("the tea is elaichi")
  }
  
}

usageOfInOperator({name : "ginger chai", amount : 12})

}

chaiRelated();