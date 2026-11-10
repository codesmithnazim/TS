class chai {
  name: string;
  flavour: string;
  constructor(name: string, zaiqa: string) {
    this.name = name;
    this.flavour = zaiqa;
    return this;
  }
}

let doodhPathi = new chai("doodh-pathi", "sugar");

console.log(doodhPathi);

class Shop {
  name: string;
  //   private legalDocs: string = "this shop is approved ";
  #legalDocs: string = "this shop is approved ";
  constructor(shopName: string) {
    this.name = shopName;
    // this.legalDocs= "your shop is rejected due to violating public sell policies"
    this.#legalDocs = this.#legalDocs;
  }

  getLegalDocs(): string {
    return this.#legalDocs;
  }
}

class Branch extends Shop {
  branch: number;
  constructor(name: string, branch: number) {
    super(name);
    this.branch = branch;
    return this;
  }
}

let shoesShop = new Branch("ali-khan shoes house", 2);
console.log(shoesShop.getLegalDocs());
console.log("the name of the shop : ", shoesShop.name);
console.log("the branch of the shop : ", shoesShop.branch);
console.log("the legal-documents of the shop : ", shoesShop.getLegalDocs());

class Check {
  private data: number | string =
    "I'm the secret data, do not share without the get and set functions ";
  getty() {
    return this.data;
  }

  setty(importedData: number | string) {
    this.data = importedData;
  }
}

let firstCheck = new Check();

console.log(firstCheck.getty());
firstCheck.setty("Let's change the secret");
console.log(firstCheck.getty());
let secondCheck = new Check();
console.log(secondCheck.getty());

