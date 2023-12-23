import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { BankingLawComponent } from "./banking-law/banking-law.component";
import { CapitalComponent } from "./Capital/Capital.component";
import { CorporateComponent } from "./corporate/corporate.component";
import { OurBlogComponent } from "./our-blog/our-blog.component";


const routes : Routes=[

    {path: 'banking-law', component: BankingLawComponent },
     {path : 'Capital', component: CapitalComponent},
     {path : 'corporate', component: CorporateComponent},
     {path : 'our-blog', component: OurBlogComponent}
]

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class GeneralRoutingModule{}