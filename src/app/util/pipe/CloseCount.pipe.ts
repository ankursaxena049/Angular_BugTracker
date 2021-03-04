import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from "src/app/bug-tracker/models/Bug";

@Pipe({
    name: 'closeCount',
    pure: false // setting this false, it will get called on each and evry event in the application
})
export class CloseCountPipe implements PipeTransform {
    transform(bugs: Bug[], ...args: any[]): number {
        return bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
    }
}