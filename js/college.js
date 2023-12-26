document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to each tab link
    var tabLinks = document.querySelectorAll('.nav-link');
    tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener('click', function (e) {
            e.preventDefault();
            var targetTabId = e.target.getAttribute('href').substring(1); // Extract the target tab ID
            showTab(targetTabId); // Call the showTab function
        });
    });

    // Function to show the selected tab and hide others
    function showTab(tabId) {
        var tabs = document.querySelectorAll('.tab-pane');
        tabs.forEach(function (tab) {
            if (tab.id === tabId) {
                tab.classList.add('show', 'active');
            } else {
                tab.classList.remove('show', 'active');
            }
        });
    }
});
