import { Bug } from "../models/Bug";
import { Injectable } from "@angular/core";

@Injectable()
export class BugLocalStorageService {

    private localStore = window.localStorage;
    private currentBugId: number = 0;

    saveBug(bug: Bug): Bug {
        if (bug.id === 0) {
            bug.id = ++this.currentBugId;
        }
        this.localStore.setItem(`bug-${bug.id}`, JSON.stringify(bug));
        return bug;
    }

    removeBug(bug: Bug) {
        this.localStore.removeItem(`bug-${bug.id}`.toString());
        return this.getAllBugs();
    }

    getAllBugs(): Bug[] {
        let result: Bug[] = [];
        for (let index = 0, count = this.localStore.length; index < count; index++) {
            const key = this.localStore.key(index);
            if (key?.startsWith('bug')) {
                const rawData = this.localStore.getItem(key || ''),
                    bug = JSON.parse(rawData || '');
                result.push(bug);
                this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
            }
        }
        return result;
    }
}