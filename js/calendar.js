// Örnek takvim verisi
const calendarData = [
    {
        type: 'exam',
        title: 'Anatomi Final Sınavı',
        date: '2024-01-15',
        description: 'Tüm anatomi konularını kapsayan final sınavı',
        location: 'Amfi 1'
    },
    {
        type: 'holiday',
        title: 'Yarıyıl Tatili',
        date: '2024-01-20',
        description: '2023-2024 Güz Dönemi Yarıyıl Tatili',
        endDate: '2024-02-05'
    },
    {
        type: 'event',
        title: 'Tıp Günleri',
        date: '2024-02-10',
        description: 'Yıllık tıp öğrencileri kongresi',
        location: 'Kongre Merkezi'
    },
    {
        type: 'exam',
        title: 'Fizyoloji Ara Sınavı',
        date: '2024-02-20',
        description: 'Dolaşım ve Solunum Sistemi konuları',
        location: 'Amfi 2'
    },
    {
        type: 'holiday',
        title: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı',
        date: '2024-04-23',
        description: 'Resmi tatil'
    }
];

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    const calendarEvents = document.querySelector('.calendar-events');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Tarihi formatla
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    }

    // Etkinlik kartı oluştur
    function createEventCard(event) {
        return `
            <div class="event-card ${event.type}">
                <div class="event-header">
                    <h3 class="event-title">${event.title}</h3>
                    <span class="event-date">${formatDate(event.date)}</span>
                </div>
                <p class="event-description">${event.description}</p>
                ${event.location ? `<p class="event-location">Yer: ${event.location}</p>` : ''}
                <span class="event-type ${event.type}">${getEventTypeName(event.type)}</span>
            </div>
        `;
    }

    // Etkinlik tipini Türkçe'ye çevir
    function getEventTypeName(type) {
        const types = {
            exam: 'Sınav',
            holiday: 'Tatil',
            event: 'Etkinlik'
        };
        return types[type];
    }

    // Takvimi oluştur
    function createCalendar(type = 'all') {
        let html = '';
        const filteredEvents = type === 'all' 
            ? calendarData 
            : calendarData.filter(event => event.type === type);

        // Tarihe göre sırala
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

        filteredEvents.forEach(event => {
            html += createEventCard(event);
        });

        calendarEvents.innerHTML = html;
    }

    // Filtre butonları için event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif butonu güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Seçili tipe göre takvimi göster
            const selectedType = button.getAttribute('data-type');
            createCalendar(selectedType);
        });
    });

    // Sayfa yüklendiğinde tüm etkinlikleri göster
    createCalendar();
}); 