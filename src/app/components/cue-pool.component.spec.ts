import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuePoolComponent } from './cue-pool.component';

describe('CuePoolComponent', () => {
  let component: CuePoolComponent;
  let fixture: ComponentFixture<CuePoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuePoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
