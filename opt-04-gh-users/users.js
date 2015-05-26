jQuery(document).ready(function(){
    var result = {users: 0, orgs: 0, admins: 0, short: 0};
    $.get("https://api.github.com/users", function(data, status){
        data.forEach(function(user){
            user.type === "User" ? result.users++ : result.orgs++;
            if(user.site_admin) result.admins++;
            if(user.login.length <= 5) result.short++;
        });
        
        $("body").append(
            '<ul>' + 
                '<li> Users: ' + result.users + '</li>' +
                '<li> Orgs: ' + result.orgs + '</li>' +
                '<li> Admins: ' + result.admins + '</li>' +
                '<li> Short Handles: ' + result.short + '</li>' +
            '</ul>'
        );
    });
});