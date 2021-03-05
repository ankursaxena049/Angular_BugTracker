import { EventEmitter, Output } from "@angular/core";
import { Component } from "@angular/core";
import { Bug } from "../models/Bug";
import { BugApiOperationService } from "../services/BugApiOperation.service";
import { BugOperationService } from "../services/BugOperation.service";


@Component({
    selector: 'app-bug-edit',
    template: `<section class="edit">
                    <label for="">Bug Name :</label>&nbsp;
                    <input type="text" name="" (keyup)="newBugName = $any($event.target).value">&nbsp;
                    <input type="button" value="Add New" (click)="addBugsonClick()">
                </section>`
})
export class BugEditComponent {

    newBugName: string = '';

    constructor(private bugApiOperation: BugApiOperationService) { }

    @Output()
    public bugCreated: EventEmitter<Bug> = new EventEmitter<Bug>();

    addBugsonClick() {
        // if (this.newBugName != '') {
        //     const newBug = this.bugOperation.createNewBug(this.newBugName);
        //     this.bugCreated.emit(newBug);
        // } else {
        //     alert('Please provide Bug Details');
        // }
        this.bugApiOperation
            .createNewBug(this.newBugName)
            .subscribe(newBug => {
                this.bugCreated.emit(newBug);
            });
    }
}