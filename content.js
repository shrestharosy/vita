const tagSet = new Set([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'br',
    'sup',
    'sub',
    'u',
    'i',
    'b',
    'em',
    'strong',
    'del',
    'ins',
    'ruby',
    'kbd',
    'wbr',
]);
const targetElements = Array.from(document.querySelectorAll('*')).filter(
    (d) =>
        tagSet.has(d.tagName.toLowerCase()) &&
        d.textContent.split(' ').length >= 20
);

for (const te of targetElements) {
    console.log(te.textContent);
    const words = te.textContent.split(' ');
    let result = [];
    for (const word of words) {
        middle = Math.floor(word.length / 2);
        result.push(
            `<b>${word.slice(undefined, middle)}</b${word.slice(
                middle,
                undefined
            )}>`
        );
    }

    te.innerHTML = result.join(' ');
}

// // Notification body.
// const notification = document.createElement('div');
// notification.className = 'notification';

// // Notification icon.
// const icon = document.createElement('img');
// icon.src = chrome.runtime.getURL('images/icon32.png');
// notification.appendChild(icon);

// // Notification text.
// const notificationText = document.createElement('p');
// notification.appendChild(notificationText);

// // Add to current page.
// document.body.appendChild(notification);

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const notification = document.getElementsByClassName('notification')[0];
//     const notificationText = notification.getElementsByTagName('p')[0];

//     notificationText.innerHTML = 'You are at: ' + request.tabTitle;

//     notification.style.display = 'flex';

//     setTimeout(function () {
//         notification.style.display = 'none';
//     }, 5000);

//     return true;
// });
