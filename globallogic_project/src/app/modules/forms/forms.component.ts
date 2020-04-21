import { Component } from '@angular/core';

import { user } from './user.model';

@Component({
    selector: 'forms-sample',
    templateUrl: 'forms.component.html'

})

export default class FormsExample {

    private userModel = new user('Vimal', 7879389793);


    private saveData(): void{
        console.log(this.userModel);
    }
}