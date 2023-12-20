$(document).ready(function () {
  var a = 1;
  $("#box-l-1").click(function () {
    if (a == 1) {
      $(this).parent().find(".box-l-list-a").slideUp();
      $(this)
        .find("#icon")
        .css({ transform: "rotate(180deg)", "transition-duration": "0.8s" });
      a = 0;
    } else {
      $(this).parent().find(".box-l-list-a").slideDown();
      $(this)
        .find("#icon")
        .css({ transform: "rotate(0deg)", "transition-duration": "0.8s" });
      a = 1;
    }
  });
  $("ul.box-l-list-b").on("click", "li", function () {
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
  $("ul.box-l-list-b").on("click", "li.box-more", function () {
    var txt = `
    <li>
      <input type="checkbox" name="" id="" />
      <label for="">OPPO</label>
    </li>
    <li>
      <input type="checkbox" name="" id="" />
      <label for="">VIVO</label>
    </li>
    <li>
      <input type="checkbox" name="" id="" />
      <label for="">NHDC</label>
    </li>
  `;
    $("li.box-more").css({ display: "none" });
    $('ul.box-l-list-b').append(txt);
  });
});
