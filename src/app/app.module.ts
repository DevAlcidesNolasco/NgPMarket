import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { AfiliatedsComponent } from './afiliateds/afiliateds.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comment/comment.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './enterprise/uploader/uploader.component';
import { UploadTaskComponent } from './enterprise/upload-task/upload-task.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    HowWorksComponent,
    AfiliatedsComponent,
    LoginComponent,
    CommentsListComponent,
    CommentComponent,
    MapComponent,
    EnterpriseComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
