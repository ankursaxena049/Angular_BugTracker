import { NgModule } from '@angular/core';
import { MomentPipe } from './pipe/moment.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { TrimTextPipe } from './pipe/trimText.pipe';
import { StatusPipe } from './pipe/status.pipe';

@NgModule({
  declarations: [MomentPipe, SortPipe, TrimTextPipe, StatusPipe],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [MomentPipe, SortPipe, TrimTextPipe, StatusPipe]
})
export class UtilsModule {
}