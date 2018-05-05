import { MyHighlightDirective } from './my-highlight.directive';

xdescribe('MyHighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new MyHighlightDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
