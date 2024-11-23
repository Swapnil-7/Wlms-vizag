import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DeviceService } from 'src/app/Services/device.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  activeRoute: string = '';
  isSidebarOpen: boolean = true;
  deviceStatus: any;
  hostname: any;

  

  constructor(private router: Router, private dev: DeviceService,){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
    this.checkScreenSize();
  }

  ngOnInit(): void {
    if (!this.deviceStatus) {
      this.dev.getStatus().subscribe(
        (result: any) => {
          console.log(result);
          this.deviceStatus = result;
          // this.hostname.setHostname(result);
        },
        (error:any) => {
          console.error('Error fetching status data:', error);
          alert("An error Occured While fetching status data");
        }
      );
    }

    // this.hostname.hostname$.subscribe((result: any) => {
    //   this.deviceStatus = result;
    // });
  }


  navigateTo(path: string) {
    this.router.navigate([path]);
  
  }

  // for activeted route..
  isActive(route: string): boolean {
    return this.activeRoute === `/${route}`;
  }

  logout() {
    // this.loginService.logout();
    this.router.navigate(['/login']);
  }


  // function for sidebar open and close
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  checkScreenSize() {
    if (window.innerWidth <= 768) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  onResize(event: any) {
    this.checkScreenSize();
  }
  
 
  isMenuOpen1 = false;
  isMenuOpen2 = false; // If you have more submenus

  // function for open and close the protocol submenu..
  toggleProtocolMenu(menuNumber: number) {
    switch(menuNumber) {
      case 1:
        this.isMenuOpen1 = !this.isMenuOpen1;
        break;
      case 2:
        this.isMenuOpen2 = !this.isMenuOpen2;
        break;
      
    }
  }
 
  // for reboot device..
  reboot(): void {
    this.dev.reboot({ cmd: "reset" }).subscribe(
      (result: any) => {
        console.log(result);
        alert('Device Reboot Successfully');
      },
      (error:any) => {
        console.error('reboot error', error);
        alert('error occure while rebooting device');
      }
    );
  }

}
