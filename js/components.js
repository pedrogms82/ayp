angular
    .module("appAYP")
    .component("headerAyd", {
    templateUrl: 'views/components/header.template.html',
    bindings: {
    items: '<'
    }})
    .component("headerMensajesAyd", {
    templateUrl: 'views/components/headerMensajes.template.html',
    bindings: {
    items: '<'
    }})
    .component("sidebarAyd",  {
    templateUrl: 'views/components/sidebar.template.html',
    bindings: {
    items: '<'
    }})
    .component("sidebarMenuAyd",  {
    templateUrl: 'views/components/sidebarMenu.template.html',
    bindings: {
    items: '<'
    }})
    .component("footerAyd",  {
    templateUrl: 'views/components/footer.template.html',
    bindings: {
    items: '<'
    }})
    .component("controlSidebarAyd",  {
    templateUrl: 'views/components/controlSidebar.template.html',
    bindings: {
    items: '<'
    }});
