import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-lora-setting',
  templateUrl: './lora-setting.component.html',
  styleUrls: ['./lora-setting.component.css']
})
export class LoraSettingComponent {

  formData: any;
  updatedFormData: any;
  updatedFormField: any;
  hexPattern = '^[0-9A-Fa-f]{8}$'; // Exactly 8 hexadecimal characters
  
  loraForm = new FormGroup({
    cDevId: new FormControl('', [Validators.required, Validators.pattern(this.hexPattern)]),
    OTID: new FormControl('', [Validators.required, Validators.pattern(this.hexPattern)]),
    UTID: new FormControl('', [Validators.required, Validators.pattern(this.hexPattern)]),
    otTH: new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),
    utTH:new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),
  });

  constructor(
    private deviceService: DeviceService,
   
  ) {}

  ngOnInit() {
    this.getLoraSet();
  }

  validateHexInput(event: any) {
    const input = event.target.value.toUpperCase(); // Convert to uppercase
    const filteredInput = input.replace(/[^0-9A-F]/g, ''); // Allow only hex characters
    event.target.value = filteredInput; // Update the input field
  }

  getLoraSet() {
    this.deviceService.getLora().subscribe((result:any) => {
      console.log("GET Lora", result);
      this.loraForm.patchValue(result);
      this.formData = result;
    }, (err:any) => {
      console.error(err.message);
      alert("An error occurred while fetching data.");
    });
  }

  saveLoraSet() {
    if (this.loraForm.invalid) {
      alert('Please correct the form errors before submitting.');
      return;
    }

    console.log("SAVE LORA", this.loraForm.value);
    
    this.deviceService.setLora(this.loraForm.value).subscribe((result: any) => {
      console.log(result);
      if (result.sts === true) {
        alert('WLMS LoRa Setting updated successfully.');
      } else {
        alert('WLMS LoRa Setting failed to update.');
      }
    }, (err:any) => {
      console.error(err.message);
      alert("An error occurred while updating WLMS LoRa Setting.");
    });
  }

  ngOnDestroy(): void {}

}
