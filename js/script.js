let addBtn = $('.btn.btn-primary');

let inputText = $('input.form-control.mr-2');

let taskList = $('ul.list');

$(addBtn).click(function (e) {
    e.preventDefault();

    $(taskList).append(`<li class="list-group-item">${inputText[0].value}<button class = "btn remove">X</button></li>`);

    inputText[0].value = '';
});

taskList.on("click", "li", function (e) {
    e.preventDefault();
    
    $(e.target).parent().remove();
});