import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router, private builder: FormBuilder, private deviceService: DeviceService) {
    // Initialize the form within the constructor to avoid errors
    this.loginForm = this.builder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      let loginPayload = {
        userid: this.loginForm.controls['userid'].value,
        password: this.loginForm.controls['password'].value
      };
      console.log(loginPayload);
  
      // Call the login function in the DeviceService
      await this.deviceService.login(loginPayload);
    } else {
      this.markFormGroupTouched(this.loginForm);
      alert('Please enter both username and password');
    }
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  ngOnDestroy(): void {

  }

}
