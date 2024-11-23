import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent {

  formData: any;
  sensorForm = new FormGroup({
    // tempslop: new FormControl( ),
    // tempconst: new FormControl( ),
    // doslop: new FormControl( ),
    // doconst: new FormControl( ),
    // phslop: new FormControl( ),
    // phconst: new FormControl( ),
    tankSize: new FormControl('',[Validators.required, Validators.min(0), Validators.max(10000)]),
    otTH: new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),
    utTH:new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),
    
    
  })
  constructor(private deviceService: DeviceService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getSensorSet();

  }

  getSensorSet() {
    // Fetch initial configuration from the server if not found in localStorage
    this.deviceService.getSensor().subscribe((result: any) => {
      console.log("GET Sensor-Calibration", result);
      this.sensorForm.patchValue(result);
      this.formData = result;
    }, (err:any) => {
      console.error(err.message);
      alert("An error Occured While fetching data");
    });


  }

  saveSensor() {
    console.log("save sensor calibration", this.sensorForm.value);
    // Save only the changed fields
    this.deviceService.setSensor(this.sensorForm.value).subscribe((result: any) => {
      console.log(result);
      if (result.sts === true) {
        alert('Sensor Calibration Update Successfully');
      } else {
        alert('Sensor Calibration Failed to update');
      }
    }, (err:any) => {
      console.error(err.message);
      alert("An error Occured While Updating Sensor Calibration data");
    });
  }

  ngOnDestroy(): void {

  }

}
