import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { BodyTabComponent } from './body-tab/body-tab.component';
import { FooterTabComponent } from './footer-tab/footer-tab.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignupService } from './signup.service';
import {WishlistService} from './wishlist.service';
import { AllListingComponent } from './all-listing/all-listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MessageComponent } from './message/message.component';
import { DetailListingComponent } from './detail-listing/detail-listing.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ListingService } from './listing.service';
import { DataSharingService } from './data-sharing.service';
import { MessageService } from './message.service';
import { MessageSendComponent } from './message-send/message-send.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: BodyTabComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'listing',
    component: AllListingComponent
  },
  {
    path: 'detaillisting/:id',
    component: DetailListingComponent
  },
  {
    path: 'addlisting',
    component: AddListingComponent
  },
  {
    path: 'wishlist',
    component:  WishlistComponent
  },
  {
    path: 'sendmsg/:id',
    component:  MessageSendComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderTabComponent,
    BodyTabComponent,
    FooterTabComponent,
    LoginComponent,
    SignupComponent,
    AllListingComponent,
    AddListingComponent,
    MessageComponent,
    DetailListingComponent,
    WishlistComponent,
    MessageSendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [SignupService,ListingService,WishlistService,DataSharingService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
