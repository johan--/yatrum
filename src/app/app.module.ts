import { InstagramEffects } from './effects/instagram.effects';
import { InstagramIntegrationService } from './instagram-integration.service';
// Core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

// Services 
import { TripsService } from './services/trips.service';
import { UserAuthService } from './services/user-auth.service';
import { ServerAuthService } from './services/server-auth.service';

// Guards
import { TripsResolveGuard } from './guards/trips-resolve.guard';

// Effects
import { TripsEffects } from './effects/trips.effects';
import { UserAuthEffects } from './effects/user-auth.effect';

import { routes } from './app.routes';
import { developmentReducers } from './reducers/index';

//Directives
import { FileSelectDirective } from 'ng2-file-upload';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TripsComponent } from './components/trips/trips.component';
import { TripDetailComponent } from './components/trips/trip-detail/trip-detail.component';
import { TripsListComponent } from './components/trips/trips-list/trips-list.component';
import { TripFlowChartComponent } from './components/trips/trip-detail/trip-flow-chart/trip-flow-chart.component';
import { TripActivityComponent } from './components/trips/trip-detail/trip-activity/trip-activity.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { InstagramAuthenticationCallbackComponent } from './components/instagram-authentication-callback/instagram-authentication-callback.component';
import { UserComponent } from './components/user/user.component';
import { UserSettingsComponent } from './components/user/user-settings/user-settings.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserTripsComponent } from './components/user/user-profile/user-trips/user-trips.component';
import { UserMediaComponent } from './components/user/user-profile/user-media/user-media.component';

const firebaseConfig = {
  apiKey: "AIzaSyDRiL-DZLnvLoj37YZNqQyYcOaOecXFOus",
  authDomain: "travel-app-frontend.firebaseapp.com",
  databaseURL: "https://travel-app-frontend.firebaseio.com",
  storageBucket: "travel-app-frontend.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TripsComponent,
    TripDetailComponent,
    TripsListComponent,
    TripFlowChartComponent,
    TripActivityComponent,
    LoginComponent,
    SignupComponent,
    InstagramAuthenticationCallbackComponent,
    UserComponent,
    UserSettingsComponent,
    UserSettingsComponent,
    UserProfileComponent,
    UserTripsComponent,
    UserMediaComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    StoreModule.provideStore(developmentReducers),
    EffectsModule.run(UserAuthEffects),
    EffectsModule.run(TripsEffects),
    EffectsModule.run(InstagramEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterModule.forRoot(routes)
  ],
  providers: [UserAuthService, TripsService, ServerAuthService, TripsResolveGuard, InstagramIntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
