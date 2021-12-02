import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWrapperComponent } from './sidebar-wrapper.component';

describe('SidebarWrapperComponent', () => {
  let component: SidebarWrapperComponent;
  let fixture: ComponentFixture<SidebarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
