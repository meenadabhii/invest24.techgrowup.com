// script.js
// Function to toggle expandable content
function toggleContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('expanded');
    
    // Update icon
    const icon = content.previousElementSibling.querySelector('i');
    if (content.classList.contains('expanded')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Function to show/hide tabs
function showTab(tabId, tabGroup) {
    // Hide all tab content in the same group
    document.querySelectorAll(`.tab-content.${tabGroup}`).forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Update tab buttons in the same group
    const tabButtons = document.querySelectorAll(`.tab-button.${tabGroup}`);
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Activate the clicked tab
    document.querySelector(`.tab-button.${tabGroup}[data-tab="${tabId}"]`).classList.add('active');
}

// Function to calculate savings
function calculateSavings() {
    const amount = parseFloat(document.getElementById('savings-amount').value) || 0;
    const rate = parseFloat(document.getElementById('interest-rate').value) || 0;
    const years = parseFloat(document.getElementById('time-period').value) || 0;
    
    // Calculate compound interest
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    let total = 0;
    
    for (let i = 0; i < months; i++) {
        total = (total + amount) * (1 + monthlyRate);
    }
    
    // Display result
    document.getElementById('savings-result').textContent = 
        `Total Savings: $${total.toFixed(2)}`;
}

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Expand the first content by default if exists
    const firstContent = document.getElementById('content1');
    if (firstContent) {
        toggleContent('content1');
    }
    
    // Set up initial tabs if exists
    const adultTab1 = document.getElementById('tab1');
    if (adultTab1) {
        showTab('tab1', 'adult-tabs');
    }
    
    const minorTab1 = document.getElementById('minortab1');
    if (minorTab1) {
        showTab('minortab1', 'minor-tabs');
    }
    
    const fundTab1 = document.getElementById('fundtab1');
    if (fundTab1) {
        showTab('fundtab1', 'fund-tabs');
    }
});