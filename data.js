// تابع لود صفحات
function loadPages() {
    const container = document.getElementById('pages-list');
    if (container.innerHTML !== "") return; 

    for (let i = 1; i <= 604; i++) {
        const item = document.createElement('div');
        item.className = 'item-row';
        item.innerHTML = `<span>صفحه ${i}</span> <span>←</span>`;
        
        item.onclick = () => {
            showPageOptions(i);
        };
        container.appendChild(item);
    }
}

// مدیریت کلیک و نمایش گزینه‌ها
function showPageOptions(pageNumber) {
    const tg = window.Telegram.WebApp;
    tg.HapticFeedback.impactOccurred('medium');

    // تعریف لینک‌ها - اینجا می‌توانید آدرس‌های خود را جایگزین کنید
    const links = {
        youtube: "YOUR_LINK_YOUTUBE_PAGE_" + pageNumber,
        telegram_4k: "YOUR_LINK_TELEGRAM_4K_PAGE_" + pageNumber,
        telegram_full_hd: "YOUR_LINK_TELEGRAM_FULL_HD_PAGE_" + pageNumber,
        telegram_hd: "YOUR_LINK_TELEGRAM_HD_PAGE_" + pageNumber
    };

    tg.showPopup({
        title: `صفحه ${pageNumber}`,
        message: `کیفیت و بستر مورد نظر را انتخاب کنید:`,
        buttons: [
            {id: 'yt', type: 'default', text: 'YouTube (4K)'},
            {id: 'tg_4k', type: 'default', text: 'Telegram (4K)'},
            {id: 'tg_full', type: 'default', text: 'Telegram (Full HD)'},
            {id: 'tg_hd', type: 'default', text: 'Telegram (HD)'},
            {id: 'cancel', type: 'destructive', text: 'انصراف'}
        ]
    }, (buttonId) => {
        if (buttonId === 'yt') {
            tg.openLink(links.youtube);
        } else if (buttonId === 'tg_4k') {
            tg.openTelegramLink(links.telegram_4k);
        } else if (buttonId === 'tg_full') {
            tg.openTelegramLink(links.telegram_full_hd);
        } else if (buttonId === 'tg_hd') {
            tg.openTelegramLink(links.telegram_hd);
        }
    });
}

// تابع لود اجزاء
function loadJuz() {
    const container = document.getElementById('juz-list');
    if (container.innerHTML !== "") return;

    for (let i = 1; i <= 30; i++) {
        const item = document.createElement('div');
        item.className = 'item-row';
        item.innerHTML = `<span>جزء ${i}</span> <span>←</span>`;
        item.onclick = () => {
            showJuzOptions(i);
        };
        container.appendChild(item);
    }
}

function showJuzOptions(juzNumber) {
    const tg = window.Telegram.WebApp;
    tg.HapticFeedback.impactOccurred('medium');

    tg.showPopup({
        title: `جزء ${juzNumber}`,
        message: `انتخاب بستر مشاهده این جزء:`,
        buttons: [
            {id: 'yt_juz', type: 'default', text: 'YouTube'},
            {id: 'tg_juz', type: 'default', text: 'Telegram'},
            {id: 'close', type: 'destructive', text: 'بستن'}
        ]
    }, (id) => {
        if(id === 'yt_juz') tg.openLink("YOUR_LINK_YOUTUBE_JUZ_" + juzNumber);
        if(id === 'tg_juz') tg.openTelegramLink("YOUR_LINK_TELEGRAM_JUZ_" + juzNumber);
    });
}