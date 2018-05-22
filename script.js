var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(Brand, Mileage, Power, Fuel, ListPrice, Age) {
        this.Brand = Brand;
        this.Mileage = Mileage;
        this.Power = Power;
        this.Fuel = Fuel;
        this.ListPrice = ListPrice;
        this.Age = Age;
    }
    return Vehicle;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(Brand, Mileage, Power, Fuel, ListPrice, Age, type) {
        var _this = _super.call(this, Brand, Mileage, Power, Fuel, ListPrice, Age) || this;
        _this.type = "Motor";
        return _this;
    }
    Motor.prototype.calculatePrice = function () {
        var newPrice;
        if (this.Age < 1) {
            newPrice = (95 / 100) * this.ListPrice;
        }
        else if (this.Age >= 1 && this.Age < 5) {
            newPrice = (86 / 100) * this.ListPrice;
        }
        else if (this.Age >= 5 && this.Age < 8) {
            newPrice = (75 / 100) * this.ListPrice;
        }
        else if (this.Age >= 8 && this.Age < 10) {
            newPrice = (63 / 100) * this.ListPrice;
        }
        else if (this.Age >= 10) {
            newPrice = (58 / 100) * this.ListPrice;
        }
        console.log(newPrice);
        return (newPrice);
    };
    return Motor;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(Brand, Mileage, Power, Fuel, ListPrice, Age, type) {
        var _this = _super.call(this, Brand, Mileage, Power, Fuel, ListPrice, Age) || this;
        _this.type = "Truck";
        return _this;
    }
    Truck.prototype.calculatePrice = function () {
        var newPrice;
        if (this.Age < 1) {
            newPrice = (95 / 100) * this.ListPrice;
        }
        else if (this.Age >= 1 && this.Age < 5) {
            newPrice = (84 / 100) * this.ListPrice;
        }
        else if (this.Age >= 5 && this.Age < 8) {
            newPrice = (70 / 100) * this.ListPrice;
        }
        else if (this.Age >= 8 && this.Age < 10) {
            newPrice = (68 / 100) * this.ListPrice;
        }
        else if (this.Age >= 10) {
            newPrice = (45 / 100) * this.ListPrice;
        }
        console.log(newPrice);
        return (newPrice);
    };
    return Truck;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(Brand, Mileage, Power, Fuel, ListPrice, Age, type) {
        var _this = _super.call(this, Brand, Mileage, Power, Fuel, ListPrice, Age) || this;
        _this.type = "Car";
        return _this;
    }
    Car.prototype.calculatePrice = function () {
        var newPrice;
        if (this.Age < 1) {
            newPrice = (91 / 100) * this.ListPrice;
        }
        else if (this.Age >= 1 && this.Age < 5) {
            newPrice = (80 / 100) * this.ListPrice;
        }
        else if (this.Age >= 5 && this.Age < 8) {
            newPrice = (65 / 100) * this.ListPrice;
        }
        else if (this.Age >= 8 && this.Age < 10) {
            newPrice = (53 / 100) * this.ListPrice;
        }
        else if (this.Age >= 10) {
            newPrice = (35 / 100) * this.ListPrice;
        }
        console.log(newPrice);
        return (newPrice);
    };
    return Car;
}(Vehicle));
var motor1 = new Motor("Yamaha", "25.000", "80kW", "Patrol", 25000, 3);
var motor2 = new Motor("Kawasaki", "2.000", "125kW", "Patrol", 50000, 1);
var car1 = new Car("BMW", "15.000", "90kW", "Electric", 35000, 2);
var car2 = new Car("Renault", "80.000", "45kW", "Diesel", 20000, 6);
var truck1 = new Truck("MAN", "150.000", "300kW", "Patrol", 110000, 4);
var truck2 = new Truck("Mercedes", "50.000", "300kW", "Patrol", 150000, 11);
var vehicle_data = [];
vehicle_data.push(motor1, motor2, car1, car2, truck1, truck2);
function createDOM() {
    for (i = 0; i < vehicle_data.length; i++) {
        dummy = document.createElement("div");
        dummy.classList.add("card");
        dummy.classList.add("col-lg-4");
        dummy.classList.add("col-md-6");
        dummy.classList.add("col-sm-12");
        var row = document.getElementById("row4");
        row.appendChild(dummy);
        var headline = document.createElement("h4");
        var headline_text = document.createTextNode(vehicle_data[i].Brand);
        headline.appendChild(headline_text);
        dummy.appendChild(headline);
        var power = document.createElement("p");
        var power_text = document.createTextNode(vehicle_data[i].Power);
        power.appendChild(power_text);
        dummy.appendChild(power);
        var mileage = document.createElement("p");
        var mileage_text = document.createTextNode(vehicle_data[i].Mileage);
        mileage.appendChild(mileage_text);
        dummy.appendChild(mileage);
        var fuel = document.createElement("p");
        var fuel_text = document.createTextNode(vehicle_data[i].Fuel);
        fuel.appendChild(fuel_text);
        dummy.appendChild(fuel);
        var button = document.createElement("button");
        var button_text = document.createTextNode("Calculate the Price");
        button.appendChild(button_text);
        dummy.appendChild(button);
    }
}
// createDOM();
tags = document.getElementsByTagName("button");
var _loop_1 = function (i) {
    tags[i].addEventListener("click", function () {
        var result = vehicle_data[i].calculatePrice();
        $(".card:eq(" + i + ")").append("<p>" + result + "</p>");
    }, { once: true });
};
for (var i = 0; i < tags.length; i++) {
    _loop_1(i);
}
function createTabs(arr, x) {
    for (i = 0; i < arr.length; i++) {
        dummy = document.createElement("div");
        dummy.classList.add("card");
        dummy.classList.add("col-lg-4");
        dummy.classList.add("col-md-6");
        dummy.classList.add("col-sm-12");
        var row = document.getElementById("row" + x);
        row.appendChild(dummy);
        var headline = document.createElement("h4");
        var headline_text = document.createTextNode(arr[i].Brand);
        headline.appendChild(headline_text);
        dummy.appendChild(headline);
        var power = document.createElement("p");
        var power_text = document.createTextNode(arr[i].Power);
        power.appendChild(power_text);
        dummy.appendChild(power);
        var mileage = document.createElement("p");
        var mileage_text = document.createTextNode(arr[i].Mileage);
        mileage.appendChild(mileage_text);
        dummy.appendChild(mileage);
        var fuel = document.createElement("p");
        var fuel_text = document.createTextNode(arr[i].Fuel);
        fuel.appendChild(fuel_text);
        dummy.appendChild(fuel);
        var button = document.createElement("button");
        var button_text = document.createTextNode("Calculate the Price");
        button.appendChild(button_text);
        dummy.appendChild(button);
    }
}
var motor_data = vehicle_data.filter(function (x) { return x.type == "Motor"; });
var car_data = vehicle_data.filter(function (x) { return x.type == "Car"; });
var truck_data = vehicle_data.filter(function (x) { return x.type == "Truck"; });
createTabs(motor_data, 0);
createTabs(car_data, 1);
createTabs(truck_data, 2);
