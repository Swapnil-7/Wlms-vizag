import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { environment } from 'src/environment/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/auth/login/login.component';
import { SerialCommandComponent } from './Components/serial-command/serial-command.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DeviceStatusComponent } from './Components/device-status/device-status.component';
import { DeviceDetailComponent } from './Components/device-detail/device-detail.component';
import { GeneralComponent } from './Components/general/general.component';
import { ProtocolComponent } from './Components/protocol/protocol.component';
import { MqttComponent } from './Components/mqtt/mqtt.component';
import { ConnectivityComponent } from './Components/connectivity/connectivity.component';
import { ServerSettingComponent } from './Components/server-setting/server-setting.component';
import { SensorComponent } from './Components/sensor/sensor.component';
import { DeviceConfigurationComponent } from './Components/device-configuration/device-configuration.component';
import { ConfigurationComponent } from './Components/configuration/configuration.component';
import { LoraSettingComponent } from './Components/lora-setting/lora-setting.component';
import { AdminComponent } from './Components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    SerialCommandComponent,
    DeviceStatusComponent,
    DeviceDetailComponent,
    GeneralComponent,
    ProtocolComponent,
    MqttComponent,
    ConnectivityComponent,
    ServerSettingComponent,
    SensorComponent,
    DeviceConfigurationComponent,
    ConfigurationComponent,
    LoraSettingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
