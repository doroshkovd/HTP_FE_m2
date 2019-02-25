describe('es-lint-example.js -> checkTestForPrompt', function(){
   it('should return string in upper case', function(){
       var text = 'some text';
      spyOn(window, 'prompt').and.returnValue(text);
      var result = checkTestForPrompt();
      expect(result).toBe(text.toUpperCase());
   });

    it('should return not value msg', function(){
        spyOn(window, 'prompt').and.returnValue(null);
        var result = checkTestForPrompt();
        expect(result).toBe('No msg!');
    });
});