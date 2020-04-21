import { Component } from '@angular/core';

@Component({
    selector: 'dir-component',
    templateUrl: './dir.component.html',
    styleUrls: ['./dir.css'],
})

export default class DirComponent {

    private todayDate = new Date();

    private _months: string[] = ['Jan', 'Feb', 'Mar', 'Apr'];

    private someColor = 'Yellow';

    public get months(): string[] {
        return this._months;
    }
    public set months(value: string[]) {
        this._months = value;
    }
}

