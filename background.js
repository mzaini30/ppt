chrome.action.onClicked.addListener((tab) => {
  const githubPrefix = "https://github.com/";
  const newPrefix = "https://bukain.github.io/";

  if (tab.url.startsWith(githubPrefix)) {
    const newUrl = tab.url.replace(githubPrefix, newPrefix);

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: updateUrl,
      args: [newUrl],
    });
  }
});

function updateUrl(newUrl) {
  window.history.pushState({}, "", newUrl);
}
