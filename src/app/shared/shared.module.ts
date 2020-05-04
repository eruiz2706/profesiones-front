import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { AppContentComponent } from './components/app-content/app-content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrolltopComponent } from './components/scrolltop/scrolltop.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FilterCollapseComponent } from './components/filter-collapse/filter-collapse.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContentStateImgComponent } from './components/content-state-img/content-state-img.component';


@NgModule({
  declarations: [
    AppContentComponent,
    HeaderComponent,
    FooterComponent,
    ScrolltopComponent,
    PaginaErrorComponent,
    LoaderComponent,
    PageHeaderComponent,
    FilterCollapseComponent,
    ContentWrapperComponent,
    BreadcrumbComponent,
    ContentStateImgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    LoaderComponent,
    PageHeaderComponent,
    FilterCollapseComponent,
    ContentWrapperComponent,
    BreadcrumbComponent,
    ContentStateImgComponent
  ]
})
export class SharedModule { }
