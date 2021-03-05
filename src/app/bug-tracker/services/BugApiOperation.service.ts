import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/Bug";
import { BugServerStorageService } from "./BugApi.service";

@Injectable()
export class BugApiOperationService {

    private currentBudId: number = 0;
    constructor(private bugApiServcei: BugServerStorageService) { }

    createNewBug(newBug: string): Observable<Bug> {
        const bug: Bug = {
            id: 0,
            name: newBug,
            isClosed: false,
            createdAt: new Date()
        }
        return this.bugApiServcei.saveBug(bug);
    }

    toggleBug(bugToToggle: Bug): Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugApiServcei.saveBug(toggledBug);
    }

    removeBug(bugToRemove: Bug): Observable<any> {
        return this.bugApiServcei.removeBug(bugToRemove);
    }

    removeClosedBugs(bugList: Bug[]): Bug[] {
        return bugList.filter(bug => !bug.isClosed);
    }

    getallBugs(): Observable<Bug[]> {
        return this.bugApiServcei.getAllBugs();
    }
}