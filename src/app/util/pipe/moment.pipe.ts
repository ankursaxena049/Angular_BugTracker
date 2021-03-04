import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name: 'momentTime',
    pure: false // setting this false, it will get called on each and evry event in the application
})
export class MomentPipe implements PipeTransform {
    transform(value: Date, ...args: any[]): string {
        return moment(value).fromNow();
    }
}