type teaRecipee = {
  water: number;
  milk: number;
};

// class MasalaChai implements teaRecipee {
//     water = 100
//     milk = 50
// }

type cupSize = { size: "large" | "small" };

class Chai implements cupSize {
  size: "large" | "small" = "small";
}

interface response {
  ok: true | "wow";
}

class MyResponse implements response {
  ok: true | "wow" = true;
}

type baseChai = {
  type: string;
  sugar: "sugared" | "sugar free";
};

type extra = {
  flavour: string;
};

function orderChai(Chai: baseChai & extra) {
  console.log("we are serving you with ", Chai.type);
}

let MasalaChai: baseChai & extra = {
  type: "masala",
  sugar: "sugared",
  flavour: "masala",
};

orderChai(MasalaChai);

//  ===========--- OR ---=========

orderChai({
  type: "masala",
  sugar: "sugared",
  flavour: "masala",
});
