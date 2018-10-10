describe('Target',() => {
  describe('innerTarget1',() => {
    it('describe-1' ,() => {
      expect( function1() ).toBe('expectedVal1');
      expect( function2() ).toBe('expectedVal1');
    });
    it('describe-2' ,() => {
      expect( function1() ).toBe('expectedVal2');
    });
  });
  describe('innerTarget2',() => {
    it('describe-1' ,() => {
      expect( function1() ).toBe('expectedVal1');
    });
    it('describe-2' ,() => {
      expect( function1() ).toBe('expectedVal2');
      expect( function2() ).toBe('expectedVal2');
    });
  });
);
