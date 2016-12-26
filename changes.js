(function() {

    var changes = $(".changes");
    var changeIndex = -1;

    function showNextChange() {
        ++changeIndex;
        changes.eq(changeIndex % changes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextChange);
    }

    showNextChange();

            })();