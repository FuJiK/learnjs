describe('LearnJS', function() {
    it('this is a problemview', function(){
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });
});