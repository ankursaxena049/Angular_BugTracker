import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugEditComponent } from './bug-tracker/components/bug-edit.component';
import { BugStatsComponent } from './bug-tracker/components/bug-stats.component';
import { BugOperationService } from './bug-tracker/services/BugOperation.service';
import { BugLocalStorageService } from './bug-tracker/services/BugStorage.service';
import { CloseCountPipe } from './util/pipe/CloseCount.pipe';
import { UtilsModule } from './util/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { BugServerStorageService } from './bug-tracker/services/BugApi.service';
import { BugApiOperationService } from './bug-tracker/services/BugApiOperation.service';

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
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    BugOperationService,
    BugLocalStorageService,
    BugServerStorageService,
    BugApiOperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }