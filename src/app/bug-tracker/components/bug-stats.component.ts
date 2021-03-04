import { Component, Input } from "@angular/core";
import { Bug } from "../models/Bug";

@Component({
    selector: 'app-bug-stats',
    template: `<section class="stats">
                <span class="closed">{{bugList | closeCount}}</span>
                <span> / </span>
                <span>{{bugList.length}}</span>
                </section>`
})
export class BugStatsComponent {

    @Input('data')
    bugList: Bug[] = [];
}