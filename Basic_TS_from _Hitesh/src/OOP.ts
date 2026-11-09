class chai {
  name: string;
  flavour: string;
  constructor(name: string, flavour: string) {
    this.name = name;
    this.flavour = flavour;
    return this;
  }
}

let doodhPathi = new chai("doodh-pathi", "sugar");

class Shop {
  name: string;
  private legalDocs: string = "this shop is approved ";
  constructor(shopName: string) {
    this.name = shopName;
    // this.legalDocs= "your shop is rejected due to violating public sell policies"
    this.legalDocs= this.legalDocs
  }

  public getLegalDocs(): string {
    return this.legalDocs;
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
console.log(shoesShop.getLegalDocs())