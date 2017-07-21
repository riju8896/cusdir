import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MyAttributeDirective } from './custom-directives/hover-directive';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent,MyAttributeDirective],
  exports: [AboutComponent]
})
export class AboutModule { }
