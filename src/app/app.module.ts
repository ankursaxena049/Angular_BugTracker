import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugEditComponent } from './bug-tracker/components/bug-edit.component';
import { BugStatsComponent } from './bug-tracker/components/bug-stats.component';
import { BugOperationService } from './bug-tracker/services/BugOperation.service';
import { BugStorageService } from './bug-tracker/services/BugStorage.service';
import { CloseCountPipe } from './util/pipe/CloseCount.pipe';
import { UtilsModule } from './util/utils.module';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    CloseCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule
  ],
  providers: [
    BugOperationService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }