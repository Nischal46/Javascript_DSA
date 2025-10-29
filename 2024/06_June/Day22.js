// Getter and Setter in js

class USerManagement {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    //getter and setter is to override the constructor value
    get password() {
        return this._password;
    }

    set password(value) {
        if (value.length < 4) throw new Error("Your password character is too short. It must be more than 4 characters")
        else this._password = value.replace(/./g, '*')
    }
}

try {
    const obj = new USerManagement('nischal', 'nisal@gmail.com', 'abced')
    console.log(obj);
} catch (error) {
    console.log('OOps Error occured. ', error.message);
}

//getter and setter in constructor fn or factory function

function ProductManagement(itemName, itemBrand){
    this._itemName = itemName;
    this.itemBrand = itemBrand;

    Object.defineProperty(this, 'itemName', {
        get: function(){
            return this._itemName
        },
        set: function(value){
            this._itemName = `${value}0987`
        },
        enumerable: true
    })
}

const productObject = new ProductManagement('laptop', 'dell');
productObject.itemName = 'pc'
console.log(productObject);
console.log(productObject.itemName);