
interface SamrtMobile {
    brandName : string 

}

// const m : SmartPhone = {
//     brandName : 'Samsung'
// }
export  class Mobile  {
    // private _bar: boolean = false;
    // get bar(): boolean {
    //     return this._bar;
    // }
    // set bar(value: boolean) {
    //     this._bar = value;
    // }
    //private brand 
    
    public version: string;
    constructor(public brandName: string, private v: string) {
        this.version = v;

    }    

    public turon = () => {
        console.log(`The Parent mobile name is${this.brandName} and version ${this.version}`);

    }

    //abstract switchOff(): void;
}

export class SmartPhone extends Mobile {

    constructor() {
        super('Nokia', 'V102')
    }
    
   
    // public turon = () => {
    //     console.log(`The child mobile name is${this.brandName} and version ${this.version}`);
        
    // }
    
    switchOff() : void {

    }

    public chargerType = (input : string) : void => {
    }

       
    // public chargerType = (input : string, length: number ): void =>{

    // }

}
