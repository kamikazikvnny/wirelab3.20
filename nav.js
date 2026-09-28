/* =========================================================
   WIRELAB NAVBAR
   LOAD SAVED PROFILE ICON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbarProfile =
        document.getElementById("navbar-profile");

    const savedIcon =
        localStorage.getItem("wirelabProfileIcon");

    if (
        savedIcon &&
        navbarProfile
    ) {

        let iconPath = savedIcon;

        /*
           Accounts saves the icon as:
           ../z-images/profile-icons/icon-01.png

           Adjust the path based on the current page depth.
        */

        const pagePath =
            window.location.pathname;

        if (
            pagePath.includes("/tools/color-wheel/") ||
            pagePath.includes("/study/units/") ||
            pagePath.includes("/labs/gfci-test-lab/")
        ) {

            iconPath =
                "../../" +
                savedIcon.replace("../", "");

        } else if (
            pagePath.endsWith("/index.html") ||
            pagePath.endsWith("/")
        ) {

            iconPath =
                savedIcon.replace("../", "");

        }

        navbarProfile.innerHTML =
            `<img src="${iconPath}" alt="Profile">`;

    }

});