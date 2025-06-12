// Örnek ders programı verisi
const scheduleData = {
    monday: [
        { time: '09:00 - 10:30', subject: 'Anatomi', location: 'Amfi 1', instructor: 'Dr. Ahmet Yılmaz' },
        { time: '11:00 - 12:30', subject: 'Fizyoloji', location: 'Amfi 2', instructor: 'Dr. Ayşe Demir' },
        { time: '14:00 - 15:30', subject: 'Biyokimya', location: 'Lab 1', instructor: 'Dr. Mehmet Kaya' }
    ],
    tuesday: [
        { time: '09:00 - 10:30', subject: 'Histoloji', location: 'Lab 2', instructor: 'Dr. Zeynep Şahin' },
        { time: '11:00 - 12:30', subject: 'Embriyoloji', location: 'Amfi 3', instructor: 'Dr. Can Özkan' }
    ],
    wednesday: [
        { time: '09:00 - 12:30', subject: 'Pratik Anatomi', location: 'Lab 3', instructor: 'Dr. Ali Yıldız' },
        { time: '14:00 - 15:30', subject: 'Tıbbi Biyoloji', location: 'Amfi 1', instructor: 'Dr. Fatma Çelik' }
    ],
    thursday: [
        { time: '09:00 - 10:30', subject: 'Biyofizik', location: 'Amfi 2', instructor: 'Dr. Emre Yılmaz' },
        { time: '11:00 - 12:30', subject: 'Tıbbi Genetik', location: 'Lab 1', instructor: 'Dr. Seda Demir' }
    ],
    friday: [
        { time: '09:00 - 12:30', subject: 'Tıp Tarihi', location: 'Amfi 3', instructor: 'Dr. Murat Kaya' },
        { time: '14:00 - 15:30', subject: 'Tıp Etiği', location: 'Amfi 1', instructor: 'Dr. Elif Şahin' }
    ]
};

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    const scheduleTable = document.querySelector('.schedule-table');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Ders programını oluştur
    function createSchedule(day = 'all') {
        let html = '<table>';
        html += `
            <thead>
                <tr>
                    <th>Saat</th>
                    <th>Ders</th>
                    <th>Yer</th>
                    <th>Öğretim Üyesi</th>
                </tr>
            </thead>
            <tbody>
        `;

        if (day === 'all') {
            // Tüm günleri göster
            Object.keys(scheduleData).forEach(day => {
                html += `<tr><td colspan="4" class="day-header">${getDayName(day)}</td></tr>`;
                scheduleData[day].forEach(lesson => {
                    html += createLessonRow(lesson);
                });
            });
        } else {
            // Seçili günü göster
            scheduleData[day].forEach(lesson => {
                html += createLessonRow(lesson);
            });
        }

        html += '</tbody></table>';
        scheduleTable.innerHTML = html;
    }

    // Ders satırı oluştur
    function createLessonRow(lesson) {
        return `
            <tr>
                <td>${lesson.time}</td>
                <td>${lesson.subject}</td>
                <td>${lesson.location}</td>
                <td>${lesson.instructor}</td>
            </tr>
        `;
    }

    // Gün adını Türkçe'ye çevir
    function getDayName(day) {
        const days = {
            monday: 'Pazartesi',
            tuesday: 'Salı',
            wednesday: 'Çarşamba',
            thursday: 'Perşembe',
            friday: 'Cuma'
        };
        return days[day];
    }

    // Filtre butonları için event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif butonu güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Seçili güne göre programı göster
            const selectedDay = button.getAttribute('data-day');
            createSchedule(selectedDay);
        });
    });

    // Sayfa yüklendiğinde tüm programı göster
    createSchedule();
}); 