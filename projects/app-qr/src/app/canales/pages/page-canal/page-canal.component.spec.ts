import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCanalComponent } from './page-canal.component';

describe('PageCanalComponent', () => {
  let component: PageCanalComponent;
  let fixture: ComponentFixture<PageCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
