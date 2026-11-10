"use strict";
class chai {
    name;
    flavour;
    constructor(name, zaiqa) {
        this.name = name;
        this.flavour = zaiqa;
        return this;
    }
}
let doodhPathi = new chai("doodh-pathi", "sugar");
console.log(doodhPathi);
class Shop {
    name;
    //   private legalDocs: string = "this shop is approved ";
    #legalDocs = "this shop is approved ";
    constructor(shopName) {
        this.name = shopName;
        // this.legalDocs= "your shop is rejected due to violating public sell policies"
        this.#legalDocs = this.#legalDocs;
    }
    getLegalDocs() {
        return this.#legalDocs;
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
console.log("the name of the shop : ", shoesShop.name);
console.log("the branch of the shop : ", shoesShop.branch);
console.log("the legal-documents of the shop : ", shoesShop.getLegalDocs());
class Check {
    data = "I'm the secret data, do not share without the get and set functions ";
    getty() {
        return this.data;
    }
    setty(importedData) {
        this.data = importedData;
    }
}
let firstCheck = new Check();
console.log(firstCheck.getty());
firstCheck.setty("Let's change the secret");
console.log(firstCheck.getty());
let secondCheck = new Check();
console.log(secondCheck.getty());
let info = {
    name: " Momin Khan",
    fatherName: "Aziz  Rehman",
};
let info2 = {
    name: " Momin Khan",
    fatherName: "Aziz  Ullah",
};
console.log(info, info2);
