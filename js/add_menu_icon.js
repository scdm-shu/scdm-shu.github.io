var menuIconMap = {};
menuIconMap["负责人"] = "fa-user";
menuIconMap["团队成员"] = "fa-users";
menuIconMap["学术论文"] = "fa-globe-asia";
menuIconMap["科研项目"] = "fa-flask";
menuIconMap["专业服务"] = "fa-concierge-bell";
menuIconMap["教学工作"] = "fa-book-open";
menuIconMap["联系我们"] = "fa-map-marked-alt";


var hrefMenu = document.getElementsByClassName("site-page");
for(var i = 0; i < hrefMenu.length; i++)
{
    var menuItemText = hrefMenu[i].innerHTML;
    hrefMenu[i].innerHTML = "<i style=\"padding-right: 1px;\" class=\"fas " + menuIconMap[menuItemText.trim()] + "\"></i>" + menuItemText
    console.log(menuItemText);
    var icon = document.createElement('i');
}