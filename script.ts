class Vehicle {
	constructor(public Brand, public Mileage, public Power, public Fuel, public ListPrice, public Age){
	}

}
let vehicle1 = new Vehicle("Opel", "10.000", "45kW", "Patrol")



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
	return(this.newPrice) 

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
	return(this.newPrice) 

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
	return(this.newPrice) 

}

}

let motor1 = new Motor("Yamaha", "25.000", "80kW", "Patrol", 25000, 3)
let motor2 = new Motor("Kawasaki", "2.000", "125kW", "Patrol", 50000, 1)
let car1 = new Car("BMW", "15.000", "90kW", "Electric", 35000, 2)
let car2 = new Car("Renault", "80.000", "45kW", "Diesel",20000, 6)
let truck1 = new Truck("MAN", "150.000", "300kW", "Patrol", 110000,4)
let truck2 = new Truck("Mercedes", "50.000", "300kW", "Patrol", 150000, 11)



motor1.calculatePrice(); 



