"use strict";
class chai {
    name;
    flavour;
    constructor(name, flavour) {
        this.name = name;
        this.flavour = flavour;
        return this;
    }
}
let doodhPathi = new chai("doodh-pathi", "sugar");
class Shop {
    name;
    legalDocs = "this shop is approved ";
    constructor(shopName) {
        this.name = shopName;
        // this.legalDocs= "your shop is rejected due to violating public sell policies"
        this.legalDocs = this.legalDocs;
    }
    getLegalDocs() {
        return this.legalDocs;
    }
}
class Branch extends Shop {
    branch;
    constructor(name, branch) {
        super(name);
        this.branch = branch;
        return this;
    }
}
let shoesShop = new Branch("ali-khan shoes house", 2);
console.log(shoesShop.getLegalDocs());
