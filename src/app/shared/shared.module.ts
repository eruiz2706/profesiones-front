import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FilterCollapseComponent } from './components/filter-collapse/filter-collapse.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ContentStateImgComponent } from './components/content-state-img/content-state-img.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterDataPipe } from './pipes/filter-data.pipe';
import { FormErrorPipe } from './pipes/form-error.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalComponent } from './components/modal/modal.component';
import { ImgEmptyPipe } from './pipes/img-empty.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    PageHeaderComponent,
    FilterCollapseComponent,
    ContentWrapperComponent,
    ContentStateImgComponent,
    FilterDataPipe,
    FormErrorPipe,
    ModalComponent,
    ImgEmptyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [
    LoaderComponent,
    PageHeaderComponent,
    FilterCollapseComponent,
    ContentWrapperComponent,
    ContentStateImgComponent,
    NgxPaginationModule,
    NgxSpinnerModule,
    FilterDataPipe,
    FormErrorPipe,
    ModalComponent,
    ImgEmptyPipe
  ]
})
export class SharedModule { }
