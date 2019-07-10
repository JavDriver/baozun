/**
 * Created by HSH10111 on 2019/4/22.
 */
$("#list1").dragsort({ dragSelector: "div", dragBetween: true, dragEnd: saveOrder, placeHolderTemplate: "<li class='placeHolder'><div></div></li>" });

function saveOrder() {
    var data = $("#list1 li").map(function() { return $(this).children().html(); }).get();
    $("input[name=list1SortOrder]").val(data.join("|"));
};