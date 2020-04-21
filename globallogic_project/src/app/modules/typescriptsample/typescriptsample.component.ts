import { Component } from '@angular/core';
import { template, element } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Component({
    selector: 'typescript-sample',
    templateUrl: 'typescriptsample.component.html'

})

export default class TypeScriptSample {
    private datatypes = `Boolean Number String Array Enum Any Void Null Undefined`

    private listDataType: string[] = this.datatypes.split(' ');
    private someFactore: number = 20;

    constructor() {
        //this.destructure();
        //this.letandConst();
        //this.spreadOperator();
        //this.arrowFunction();
        //this.typeScriptArray();
        this.mapExample();

        // let variable1 = 'third';
        // let someText = `first ${variable1} second fourth`;
        // console.log(someText);


    }

    private destructure(): void {
        let daysObj = {
            dtype1: 'Boolean',
            dtype2: 'Number'
        }
        //let days = ['Boolean', 'Number', 'String', 'Array'];
        let { dtype1, dtype2  } = daysObj;
        console.log(dtype1, dtype2);
    }

    private letandConst(): void {
        let hasValue: boolean = true;
        const language: string = 'TypeScript';
        if (hasValue) {
            //let language = 'Java';
            //var version = '3.0.1';
            console.log(language);
        }        
        console.log(language)
    }

    private spreadOperator(): void {
        let arrayOne = [1, 2, 3];
        let arrayTwo = [4, 5, 6];
        //Create array by merging two arrays
        let mergedArray = [...arrayOne, ...arrayOne];
        //console.log('spreadOperator', mergedArray);
        this.restexample(mergedArray)
    }

    private restexample(...ar1): void {
        console.log('rest', ar1)
    }

    private arrowFunction(): void {
    //     //console.log('TypeScriptSample',this)
    //     let add = function (a, b) : number {
    //         return a + b;
    //     }
    //     //let result = add(3, 4);

    //     let addWithArrow = (add) => add();
    //     let arrowFnresult = addWithArrow(add);
    //     console.log(arrowFnresult);
        // return;
        //-----------------------------------------------------------------
        let vm = this;
        
        const person = {
            name: 'Sam',
            skill: 'TypeScript',
            getSkill: function () {
                //console.log('person', this.datatypes, vm.datatypes);
                console.log(this.name, vm.someFactore);

            },
            getName: () => {
                console.log('person', this.someFactore,);

            }
        }
        person.getSkill();

        //person.getName();
        //Arrow usefull with obervables and reduces the sytax, inline functions
        //---------------------------------------------------------------
        //let someFactore : number = 20;
        const smartPhones = [
            { name: 'iphone', price: 649 },
            { name: 'Galaxy S6', price: 576 },
            { name: 'Galaxy Note 5', price: 489 }
        ];
        var prices = smartPhones.map(function (smartPhone) {
            return smartPhone.price * vm.someFactore;
        });
        console.log(prices);

        const pricesArrow = smartPhones.map(smartPhone => smartPhone.price * this.someFactore);
        console.log(pricesArrow);

    }

    private typeScriptArray(): void {
        //unshift : Add the element from the top
        let city: string[] = ['Noida', 'Gurugram', 'Nagpur', 'Pune'];

        city.unshift('Mumbai');
        console.log("unshift", city)

        //shift : Remove the element in the top
        city.shift();
        console.log('shift', city)

        //Push : Add the element in the end
        city.push('Hyd');
        console.log('Push', city);

        //Pop : Remove the element from the end
        city.pop()
        console.log('Pop', city);

        //Map
        let metroCity = city.map((element) => {
            if (element == 'Pune') {
                return `${element} Metro`;
            } 
            //return element;

        })
        console.log('map', metroCity);

        //Filter
        let nonMetroCity = city.filter((element) => {
            return (element != 'Pune');
        })
        console.log('filter', nonMetroCity)

        //Reduce : Apply on all the element
        let populationInMillion = [175, 50, 25];
        let totalPopulation = populationInMillion.reduce((total, element) => {
            console.log(total,element)
            return (total - element);
        })
        console.log('Reduce', totalPopulation)

        //ReduceRight         
        let totalPopulation_ = populationInMillion.reduceRight((total, element) => {
            return (total - element);
        })
        console.log('Reduce Right', totalPopulation_)

        //splice: insert new elements as array. potions, number of elements to remove, and array
        let otherCity = ['xyz', 'abc', 'abc'];
        city.splice(1, 0, ...otherCity);
        console.log(city);

        //Slice :
        let sliceExample = city.slice(1, 3);
        console.log('Slice', sliceExample);

        //Sort :
        let sortExample = city.sort();
        console.log('Sort', sortExample);

        //Reverse
        let reverseExample = city.reverse();
        console.log('Reverse', reverseExample)

        //JOin
        let joinExample = city.join();
        console.log('join', joinExample);

        //FindIndex
        let index = city.findIndex((element) => element == 'abc');
        console.log('index', index);

        //Last Index Of
        let lastIndex = city.lastIndexOf('abc');
        console.log('last index', lastIndex);

        //empty an array
        let city_ = city;
        //city.splice(0, city.length);
        //city.length = 0 ;
        //city = [];

        console.log('length zero', city, city_)

    }

    private mapExample(): void {
        let skills = new Map();

        skills.set(1, 'JavaScript');
        skills.set(2, 'TypeScript__');
        //skills.set(2, 'TypeScript**');
        skills.set(3, 'Python');

        //console.log(skills.get(2));
        //console.log(skills.has(2));
        //console.log(skills.size);

        //skills.clear(); 
        //console.log(skills.size);

        //Iterate over map keys
        for (let key of skills.keys()) {
            console.log(key);                   
        }

        // //Iterate over map values
        for (let value of skills.values()) {
            console.log(value);                
        }

    }
}