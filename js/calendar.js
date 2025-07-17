document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');

    function hideAllTables() {
        document.querySelectorAll('.calendar-table-container').forEach(table => {
            table.style.display = 'none';
        });
    }

    function showTable(periodId) {
        const table = document.getElementById(periodId + '-table');
        if (table) {
            table.style.display = 'block';
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif butonu güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedPeriod = button.getAttribute('data-period');

            hideAllTables();
            showTable(selectedPeriod);
        });
    });

    // Sayfa başında tümünü gizle
    hideAllTables();
});
