import { Bug } from "../models/Bug";

export class BugStorageService {

    private localStore = window.localStorage;
    private currentBugId: number = 0;

    saveBugtoLocalStorage(bug: Bug): Bug {
        if (bug.id === 0) {
            bug.id = ++this.currentBugId;
        }
        this.localStore.setItem(`bug-${bug.id}`, JSON.stringify(bug));
        return bug;
    }

    removeBugFromLocalStorage(bug: Bug) {
        this.localStore.removeItem(`bug-${bug.id}`.toString());
        return this.getAllBugsFromLocalStorage();
    }

    getAllBugsFromLocalStorage(): Bug[] {
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