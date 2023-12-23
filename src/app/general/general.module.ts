import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { BankingLawComponent } from './banking-law/banking-law.component';
import { CapitalComponent } from './Capital/Capital.component';
import { CorporateComponent } from './corporate/corporate.component';
import { OurBlogComponent } from './our-blog/our-blog.component';

@NgModule({
  declarations: [BankingLawComponent,
                 CapitalComponent,
                 OurBlogComponent,
                 CorporateComponent],
  imports: [CommonModule, GeneralRoutingModule],
})
export class GeneralModule {}
