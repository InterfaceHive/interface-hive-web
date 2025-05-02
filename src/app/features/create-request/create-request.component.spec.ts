// interfacehive-request.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InterfacehiveRequestComponent } from './create-request.component';

describe('InterfacehiveRequestComponent', () => {
  let component: InterfacehiveRequestComponent;
  let fixture: ComponentFixture<InterfacehiveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfacehiveRequestComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfacehiveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a tag when Enter key is pressed', () => {
    component.newTag = 'typescript';
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.addTag(event);
    expect(component.tags.includes('typescript')).toBeTrue();
  });

  it('should remove a tag by index', () => {
    const initialLength = component.tags.length;
    component.removeTag(0);
    expect(component.tags.length).toBe(initialLength - 1);
  });

  it('should switch code tabs correctly', () => {
    component.switchTab('code', 'implementation-tab');
    expect(component.activeCodeTab).toBe('implementation-tab');
  });
});
