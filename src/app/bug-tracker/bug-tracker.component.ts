import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugApiOperationService } from './services/BugApiOperation.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugList: Bug[] = [];
  sortType: string = '';
  sortDesc: boolean = false;
  newBugName: string = '';

  constructor(private bugApiOperation: BugApiOperationService) { }

  ngOnInit(): void {
    // this.bugList.push({ id: 3, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date() });
    // this.bugList.push({ id: 1, name: 'User not able to login', isClosed: false, createdAt: new Date() });
    // this.bugList.push({ id: 4, name: 'Application not responding', isClosed: false, createdAt: new Date() });
    // this.bugList.push({ id: 2, name: 'Server communication failure', isClosed: true, createdAt: new Date() });

    //this.bugList = this.bugOperation.getallBugsFromLocalStorage();

    this.bugApiOperation
      .getallBugs()
      .subscribe(bugList => this.bugList = bugList);
  }

  onNewBugCreated(newBug: Bug) {
    this.bugList = [...this.bugList, newBug];
  }

  removeBugOnClick(bugToClose: Bug) {
    //var index = this.bugList.indexOf(bug);
    //this.bugList.splice(index, 1);
    //this.bugList = this.bugList.filter(bug => bug.id !== bugToClose.id);

    //this.bugList = this.bugOperation.removeBug(bugToClose);

    this.bugApiOperation
      .removeBug(bugToClose)
      .subscribe(() =>
        this.bugList = this.bugList.filter(bug => bug.id !== bugToClose.id)
      )
  }

  removeAllBugOnClick() {
    //this.bugList = this.bugList.filter(bug => !bug.isClosed)
    //this.bugList = this.bugOperation.removeClosedBugs(this.bugList);
    this.bugList
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.removeBugOnClick(closedBug));
  }

  onBugNameClick(bugToToggle: Bug) {
    //bugToToggle.isClosed = !bugToToggle.isClosed;
    //const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    //this.bugList = this.bugList.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);

    //this.bugList = this.bugOperation.toggleBug(bugToToggle, this.bugList);
    this.bugApiOperation
      .toggleBug(bugToToggle)
      .subscribe(toggledBug => {
        this.bugList = this.bugList.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
      });
  }

  getBugCloseCount(): number {
    /* 
    let closedCount = 0;
    for(let index=0, count = this.bugList.length; index < count; index++){
      const bug = this.bugList[index];
      if (bug.isClosed) {
        ++closedCount;
      }
    }
    return closedCount; 
    */

    /* 
    //return this.bugList.filter(bug => bug.isClosed).length;
    const closedBugs = this.bugList.filter(bug => bug.isClosed);
    return closedBugs.length; 
    */

    //return this.bugList.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);

    //return this.bugOperation.getBugCloseCout(this.bugList);

    return this.bugApiOperation.getBugCloseCout(this.bugList);
  }
}
