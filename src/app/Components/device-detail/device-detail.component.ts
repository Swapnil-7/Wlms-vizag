import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent {

  deviceStatus: any;
  // deviceAlias:any;
  // generalConfig: any;
  constructor( private deviceService: DeviceService) {

  }

  // OnInit():void{
  //   // this.fetchDeviceStatus();
  //   console.log("Status page")
  //   this.getDeviceStatus();
  // }
  private unsubscriber: Subject<void> = new Subject<void>();
  ngOnInit() {
    this.getDeviceStatus();
    // this.deviceAliasService.generalConfig$.subscribe(data => {
    //   if (data) {
    //     this.generalConfig = data;
    //     console.log('Received updated config data:', this.generalConfig);
    //   }
    // });
    
   

    
    // history.pushState(null, '');

    // fromEvent(window, 'popstate').pipe(
    //   takeUntil(this.unsubscriber)
    // ).subscribe((_) => {
    //   history.pushState(null, '');
    // });
  }

  getDeviceStatus(): void {
    console.log("Status page")
    this.deviceService.getStatus().subscribe((result: any) => {
      console.log(result);// sts:true
      this.deviceStatus = result;
      // this.hostname.setHostname(result);
     
     
      // this.deviceStatus = Object.entries(result).map(([key, value]) => ({ key, value }));
      // console.log("Device status", typeof this.deviceStatus);


    }, (error:any) => {
      console.error('Error fetching status data:', error);
      alert("An error Occured While fetching status data");
    })


  }

}
