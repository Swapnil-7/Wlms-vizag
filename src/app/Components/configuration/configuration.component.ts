import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

  formData: any;
  configForm = new FormGroup({
    minCO2: new FormControl(),
    maxCO2: new FormControl(),
    // minAO: new FormControl(),
    // maxAO: new FormControl(),
    // codslop: new FormControl(''),
    // codconst: new FormControl(''),
    // bodslop: new FormControl(''),
    // bodconst: new FormControl(''),
    // tssslop: new FormControl(''),
    // tssconst: new FormControl(''),
    // phslop: new FormControl(),
    // phconst: new FormControl(),
  });

  constructor(private deviceService: DeviceService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getSensorSet();

  }

  getSensorSet() {
    // Fetch initial configuration from the server if not found in localStorage
    this.deviceService.getSensor().subscribe((result: any) => {
      console.log("GET Configuration", result);
      this.configForm.patchValue(result);
      this.formData = result;
    }, (err:any) => {
      console.error(err.message);
      alert("An error Occured While fetching data");
    });


  }

  saveSensor() {
    console.log("save Configuration", this.configForm.value);
    // Save only the changed fields
    this.deviceService.setSensor(this.configForm.value).subscribe((result: any) => {
      console.log(result);
      if (result.sts === true) {
        alert('Configuration Update Successfully');
      } else {
        alert('Configuration Failed to update');
      }
    },(err:any) => {
      console.error(err.message);
      alert("An error Occured While Updating Configuration data");
    });
  }

  ngOnDestroy(): void {

  }

}
