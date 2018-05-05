import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [ FormsModule ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name is used', () => {
    component.name = 'Pablo';

    const de: DebugElement = fixture.debugElement;
    const n1 = de.query(By.css('.n'));
    const p: HTMLElement = n1.nativeElement;

    expect(p.textContent).toEqual('¡Hola Pablo!');

  });

});
