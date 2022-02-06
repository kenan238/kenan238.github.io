const redir = url => {
    window.open(url, "_blank");
};

window.onload = () => {
    // Set year
    document.getElementById("years__").innerHTML = new Date().getFullYear() - 2019;

    // Set current year
    var currentYear = new Date().getFullYear();
    var curYearSpan = document.getElementById("curyear__");
    console.log(currentYear);
    if (currentYear == 2022) {
        curYearSpan.innerHTML = "2022";
    }
    else {
        curYearSpan.innerHTML = `2022 - ${currentYear}`;
    }

    // Make navbar menu work
    document.getElementById("navbar_menu_icon").addEventListener("click", e => {
        var menu = document.getElementById("navbar_menu");
        document.body.style["overflow"] = "hidden";
        if (menu.style["display"] == "block") {
            menu.style["animation"] = "slide_in_right_to_left_reverse 0.5s ease-in";
            setTimeout(() => {
                menu.style["display"] = "none";
                document.body.style["overflow"] = "auto";
            }, 500);
        } else {
            document.body.style["overflow"] = "hidden";
            menu.style["display"] = "block";
            menu.style["animation"] = "slide_in_right_to_left 0.5s ease-in";
            setTimeout(() => {
                document.body.style["overflow"] = "auto";
            }, 500);
        }
    });
    
    // Navbar Items Work
    var navbar_items = document.querySelectorAll("[id='navbar_items']");
    for (var item of navbar_items) {
        item.addEventListener("click", e => {
            var content = e.srcElement.textContent.replace(" =>", "").toLowerCase();
            if (content == "contact") {
                new WinBox("Contact", {
                    class: "modern",
                    mount: document.getElementById("content_contact")
                                       .cloneNode(true)
                });
            }
            if (content == "social media") {
                new WinBox("Social Media", {
                    class: "modern",
                    mount: document.getElementById("content_social_media")
                                       .cloneNode(true)
                });
            }
            if (content == "knowledge") {
                new WinBox("Social Media", {
                    class: "modern",
                    mount: document.getElementById("content_knowledge")
                                       .cloneNode(true)
                });
            }
            if (content == "projects") {
                var projects_ = document.getElementById("projects_");
                document.body.style["overflow"] = "hidden";
                if (projects_.style["display"] == "block") {
                    projects_.style["animation"] = "slide_in_right_to_left_reverse 0.5s ease-in";
                    setTimeout(() => {
                        projects_.style["display"] = "none";
                        document.body.style["overflow"] = "auto";
                    }, 500);
                } else {
                    document.body.style["overflow"] = "hidden";
                    projects_.style["display"] = "block";
                    projects_.style["animation"] = "slide_in_right_to_left 0.5s ease-in";
                    setTimeout(() => {
                        document.body.style["overflow"] = "auto";
                    }, 500);
                }
            }
        });
    }
};