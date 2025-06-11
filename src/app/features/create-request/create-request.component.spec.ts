import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateRequestComponent } from './create-request.component';

describe('CreateRequestComponent', () => {
  let component: CreateRequestComponent;
  let fixture: ComponentFixture<CreateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, CreateRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('addTag', () => {
    it('should add a tag when a non-empty string is passed', () => {
      const initialLength = component.tags.length;
      const fakeEvent = new Event('submit');
      component.addTag(fakeEvent, 'Angular');
      expect(component.tags.length).toBe(initialLength + 1);
      expect(component.tags.at(initialLength)?.value).toBe('Angular');
    });

    it('should not add an empty tag', () => {
      const initialLength = component.tags.length;
      const fakeEvent = new Event('submit');
      component.addTag(fakeEvent, '');
      expect(component.tags.length).toBe(initialLength);
    });
  });

  describe('removeTag', () => {
    it('should remove a tag at the specified index', () => {
      const fakeEvent = new Event('submit');
      component.addTag(fakeEvent, 'Angular');
      component.addTag(fakeEvent, 'React');
      const originalLength = component.tags.length;
      component.removeTag(0);
      expect(component.tags.length).toBe(originalLength - 1);
      expect(component.tags.at(0)?.value).toBe('React');
    });
  });

  describe('switchTab', () => {
    it('should switch the active code tab', () => {
      component.switchTab('code', 'implementation-tab');
      expect(component.activeCodeTab).toBe('implementation-tab');
    });

    it('should switch the active IO tab', () => {
      component.switchTab('io', 'output-tab');
      expect(component.activeIOtab).toBe('output-tab');
    });
  });
});
