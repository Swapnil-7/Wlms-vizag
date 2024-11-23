import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {

  formData: any;
  updatedFormData: any;
  updatedFormField: any;

  configForm = new FormGroup({
    hostname: new FormControl(''),
    lattitude: new FormControl(''),
    longitude: new FormControl(''),
    sitename: new FormControl(''),
    clientname: new FormControl(''),
    deviceAlias:new FormControl(''),
    // buzzerSupport: new FormControl(false), // Add buzzerSupport control
    logstorage: new FormControl(), // Add logStorage control
    logsend: new FormControl(), // Add logSending control
    // browserTime: new FormControl(''), // Add browserTime control
  });
  constructor(private deviceService: DeviceService) { }


  ngOnInit(): void {
    this.getGeneral();
  }

  // getting value from Device service of getGnConfig meyhod
  getGeneral() {
    this.deviceService.getGnConfig().subscribe((result:any) => {
      console.log('GET GENERAL', result);
      this.configForm.patchValue(result);
      this.formData = result;
      // console.log(this.formData);
    }, (err:any) => {
      console.error(err.message);
      alert('An error Occured While fetching data');
    });
  }
  
  // to handle yes or no checkbox
  handleRetainChange() {
    const logstorageValue = this.configForm.get('logstorage')?.value;
    console.log('Logstorage Value:', logstorageValue);
  
  }

  // save the input data 
  saveConfig() {
    console.log('SAVE GENERAL ', this.configForm.value);
    this.deviceService.saveGnConfig(this.configForm.value).subscribe((result: any) => {
      console.log(result);
      if (result.sts === true) {
        //  this.deviceAliasService.setGeneralConfig(this.configForm.value);
        alert('General Configuration Setting Update Successfully');
      } else {
        alert('General Configuration Failed to update');
      }
    }, (err:any) => {
      console.error(err.message);
      alert('An error Occured While Update General Configuration Setting');
    });
  }

}
