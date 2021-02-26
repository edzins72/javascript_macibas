const usersList = [];

function saveUser() {
    const user = {
        userName: $("#username").val(),
        phone: $("#phone").val(),
    }
    if (!user.userName || !user.phone) {
        alert("Ievadiet abus laukus");
        return;
    }
    usersList.push(user);
}

function printUsers() {
    if (usersList.length > 0) {
        $("#saraksts").empty();
        $("#saraksts").append("<ul>");
        usersList.forEach((item) => {
            $("#saraksts ul").append(
                $("<li>").append(item.userName + ", " + item.phone));
        });
    }
}

