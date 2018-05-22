class Vehicle {
	constructor(public Brand, public Mileage, public Power, public Fuel, public ListPrice, public Age){
	}

}



class Motor extends Vehicle {

	constructor(Brand, Mileage, Power, Fuel, ListPrice, Age, type){
		super(Brand, Mileage, Power, Fuel, ListPrice, Age);
		this.type = "Motor";
	}

calculatePrice(){
	let newPrice;


		if (this.Age<1) {
			newPrice = (95/100)* this.ListPrice
		} else if (this.Age>=1 && this.Age<5){
			newPrice = (86/100)*this.ListPrice
		} else if (this.Age>=5 && this.Age<8){
			newPrice =(75/100)*this.ListPrice
		} else if (this.Age>=8 && this.Age<10){
			newPrice =(63/100)*this.ListPrice
		} else if (this.Age>=10){
			newPrice =(58/100)*this.ListPrice
		}
		


		console.log(newPrice)
	return(newPrice) 

}

}




class Truck extends Vehicle {

	constructor(Brand, Mileage, Power, Fuel, ListPrice, Age, type){
		super(Brand, Mileage, Power, Fuel, ListPrice, Age);
		this.type ="Truck";
	}
calculatePrice(){
	let newPrice;


		if (this.Age<1) {
			newPrice = (95/100)* this.ListPrice
		} else if (this.Age>=1 && this.Age<5){
			newPrice = (84/100)*this.ListPrice
		} else if (this.Age>=5 && this.Age<8){
			newPrice =(70/100)*this.ListPrice
		} else if (this.Age>=8 && this.Age<10){
			newPrice =(68/100)*this.ListPrice
		} else if (this.Age>=10){
			newPrice =(45/100)*this.ListPrice
		}
		


		console.log(newPrice)
	return(newPrice) 

}

}





class Car extends Vehicle {

	constructor(Brand, Mileage, Power, Fuel, ListPrice, Age, type){
		super(Brand, Mileage, Power, Fuel, ListPrice, Age);
		this.type ="Car";
	}
	calculatePrice(){
	let newPrice;


		if (this.Age<1) {
			newPrice = (91/100)* this.ListPrice
		} else if (this.Age>=1 && this.Age<5){
			newPrice = (80/100)*this.ListPrice
		} else if (this.Age>=5 && this.Age<8){
			newPrice =(65/100)*this.ListPrice
		} else if (this.Age>=8 && this.Age<10){
			newPrice =(53/100)*this.ListPrice
		} else if (this.Age>=10){
			newPrice =(35/100)*this.ListPrice
		}
		


		console.log(newPrice)
	return(newPrice) 

}

}

let motor1 = new Motor("Yamaha", "25.000", "80kW", "Patrol", 25000, 3)
let motor2 = new Motor("Kawasaki", "2.000", "125kW", "Patrol", 50000, 1)
let car1 = new Car("BMW", "15.000", "90kW", "Electric", 35000, 2)
let car2 = new Car("Renault", "80.000", "45kW", "Diesel",20000, 6)
let truck1 = new Truck("MAN", "150.000", "300kW", "Patrol", 110000,4)
let truck2 = new Truck("Mercedes", "50.000", "300kW", "Patrol", 150000, 11)

let vehicle_data= []
	vehicle_data.push(motor1, motor2, car1, car2, truck1, truck2);



motor1.calculatePrice(); 

function createDOM (){
	for (i=0;i<vehicle_data.length;i++){
 	dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-4");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById("row1");
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



createDOM();


tags = document.getElementsByTagName("button");

for (let i=0; i<tags.length; i++){
	tags[i].addEventListener("click", function(){
	var result = vehicle_data[i].calculatePrice()
	$(`.card:eq(${i})`).append(`<p>${result}</p>`);
	},{once:true});
}


function createTabs (){
	for (i=0;i<vehicle_data.length;i++){
		if(vehicle_data[i].type == "Motor"){
			dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-4");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById("row2");
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
}




