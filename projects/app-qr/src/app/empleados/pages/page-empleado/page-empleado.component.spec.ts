import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmpleadoComponent } from './page-empleado.component';

describe('PageEmpleadoComponent', () => {
  let component: PageEmpleadoComponent;
  let fixture: ComponentFixture<PageEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
