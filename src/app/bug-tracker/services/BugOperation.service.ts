import { Injectable } from "@angular/core";
import { Bug } from "../models/Bug";
import { BugLocalStorageService } from "./BugStorage.service";

@Injectable()
export class BugOperationService {

    constructor(private bugLocalStorage: BugLocalStorageService) { }

    createNewBug(newBug: string): Bug {
        const bug: Bug = {
            id: 0,
            name: newBug,
            isClosed: false,
            createdAt: new Date()
        }
        return this.bugLocalStorage.saveBug(bug);
    }

    toggleBug(bugToToggle: Bug, bugList: Bug[]): Bug[] {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return bugList.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    removeBug(bugToRemove: Bug): Bug[] {
        return this.bugLocalStorage.removeBug(bugToRemove);
    }

    removeClosedBugs(bugList: Bug[]): Bug[] {
        return bugList.filter(bug => !bug.isClosed);
    }

    getBugCloseCout(bugList: Bug[]): number {
        return bugList.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
    }

    getallBugsFromLocalStorage() {
        return this.bugLocalStorage.getAllBugs();
    }
}