import { FilterByTitlePipe } from './shared/filter-by-title.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdChipsModule, MdButtonModule, MdDialogModule, MdIconModule } from '@angular/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CanActivateAuthGuard } from './can-activate-auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryDialogComponent } from './library-dialog/library-dialog.component';
import { LibraryComponent } from './library/library.component';
import { BookService } from './shared/book.service';
import { OrderByTitlePipe } from './shared/order-by-title.pipe';
import { TrimTitlePipe } from './shared/trim-title.pipe';
import { HttpModule } from '@angular/http';
import { FilterByOwnerPipe } from 'app/shared/filter-by-owner-id.pipe';
import { TradesComponent } from './trades/trades.component';
import { ArticleComponent } from './article/article.component';
//import { ArticleComponent } from './src/app/article/article.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LibraryComponent,
        LibraryDialogComponent,
        OrderByTitlePipe,
        FilterByTitlePipe,
        FilterByOwnerPipe,
        TrimTitlePipe,
        TradesComponent,
        ArticleComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        MdToolbarModule,
        MdButtonModule,
        MdChipsModule,
        MdDialogModule,
        MdIconModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'Nugget'),
        AngularFireDatabaseModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        AngularFireAuth,
        BookService,
        CanActivateAuthGuard
    ],
    entryComponents: [
        LibraryDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
