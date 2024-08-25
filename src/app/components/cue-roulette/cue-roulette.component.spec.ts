import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CueRouletteComponent } from './cue-roulette.component';

describe('CueRouletteComponent', () => {
  let component: CueRouletteComponent;
  let fixture: ComponentFixture<CueRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CueRouletteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CueRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
