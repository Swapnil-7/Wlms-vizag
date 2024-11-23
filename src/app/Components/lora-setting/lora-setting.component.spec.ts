import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoraSettingComponent } from './lora-setting.component';

describe('LoraSettingComponent', () => {
  let component: LoraSettingComponent;
  let fixture: ComponentFixture<LoraSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoraSettingComponent]
    });
    fixture = TestBed.createComponent(LoraSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
