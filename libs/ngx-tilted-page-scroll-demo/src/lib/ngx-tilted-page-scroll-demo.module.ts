import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTiltedPageScrollModule } from '@tinynodes/ngx-tilted-scroll';
import { PageContainerComponent } from './containers/page-container/page-container.component';
import { NgxTiltedPageScrollDemoRoutesModule } from './routes.module';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatExpansionModule,
  MatListModule
} from '@angular/material';
import { NgxTinynodesCoreModule } from '@tinynodes/ngx-tinynodes-core';

@NgModule({
  imports: [
    CommonModule,
    NgxTiltedPageScrollDemoRoutesModule,
    NgxTiltedPageScrollModule,
    MatCardModule,
    MatButtonModule,
    NgxTinynodesCoreModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [PageContainerComponent],
  exports: [PageContainerComponent]
})
export class NgxTiltedPageScrollDemoModule {}