document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    document.getElementById("transformButton").onclick = () => {
        const query = { active: true, currentWindow: true };
        document.getElementById("transformButton").style.display = "none"
        document.getElementById("reloadButton").style.display = "block"
        chrome.tabs.query(query, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                transform: true,
            });
        });
    }

    document.getElementById("reloadButton").onclick = () => {
        const query = { active: true, currentWindow: true };
        document.getElementById("transformButton").style.display = "block"
        document.getElementById("reloadButton").style.display = "none"
        chrome.tabs.query(query, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                reload: true,
            });
        });
    }


    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getBarkedTitle(tabs[0].title);
    });
});

/**
 *
 * @param {String} tabTitle Current tab title
 */
const getBarkedTitle = (tabTitle) => {
    const barkTitle = `We are at ${tabTitle}`;
    return barkTitle;
};
