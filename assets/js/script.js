document.addEventListener('DOMContentLoaded', function() {
    const tabContents = document.querySelectorAll('.portfolio_container');
    tabContents.forEach(tab => tab.classList.add('active'));
});

function showTab(obj, tabId) {
    const tabBtn = document.querySelectorAll('.tab-button');
    tabBtn.forEach(tab => tab.classList.remove('active'));
    
    const tabContents = document.querySelectorAll('.portfolio_container');
    tabContents.forEach(tab => tab.classList.remove('active'));
    obj.classList.add('active');

    if (tabId == 'tabAll') {
        tabContents.forEach(tab => tab.classList.add('active'));
    } else {
        const selectedTab = document.getElementById(tabId);
        selectedTab.classList.add('active');
    }
    
}