// تابع لود صفحات
function loadPages() {
    const container = document.getElementById('pages-list');
    if (!container || container.innerHTML !== "") return; 

    for (let i = 1; i <= 604; i++) {
        const item = document.createElement('div');
        item.className = 'item-row';
        item.style.cursor = "pointer"; // برای اطمینان از نمایش حالت کلیک
        item.innerHTML = `<span>صفحه ${i}</span> <span>←</span>`;
        
        item.addEventListener('click', function() {
            showPageOptions(i);
        });
        container.appendChild(item);
    }
}

function showPageOptions(pageNumber) {
    // لاگ گرفتن در کنسول برای تست (F12 را بزن و ببین این چاپ می‌شود یا نه)
    console.log("صفحه انتخاب شد: " + pageNumber);

    const tg = window.Telegram.WebApp;

    // اگر در تلگرام بود
    if (tg.initData && tg.initData !== "") {
        tg.showPopup({
            title: `صفحه ${pageNumber}`,
            message: `انتخاب بستر:`,
            buttons: [
                {id: 'yt', type: 'default', text: 'YouTube'},
                {id: 'tg', type: 'default', text: 'Telegram'},
                {id: 'cancel', type: 'destructive', text: 'بستن'}
            ]
        }, (id) => {
            if (id === 'yt') tg.openLink("YOUR_LINK_YT_" + pageNumber);
            if (id === 'tg') tg.openTelegramLink("YOUR_LINK_TG_" + pageNumber);
        });
    } else {
        // اگر در گیت‌هاب (مرورگر PC) بودی، این حتماً باید اجرا شود
        const userChoice = confirm("تست در مرورگر:\nآیا می‌خواهید لینک‌های صفحه " + pageNumber + " را ببینید؟");
        if(userChoice) {
            alert("لینک یوتیوب: YOUR_LINK_YT_" + pageNumber);
        }
    }
}

// معرفی توابع به پنجره اصلی برای اطمینان از دسترسی در فایل index.html
window.loadPages = loadPages;
window.showPageOptions = showPageOptions;
