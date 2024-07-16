chrome.action.onClicked.addListener((tab) => {
  const githubPrefix = "https://github.com/";
  const newPrefix = "https://bukain.github.io/";

  if (tab.url.startsWith(githubPrefix)) {
    const newUrl = tab.url.replace(githubPrefix, newPrefix);
    chrome.tabs.update(tab.id, { url: newUrl });
  }
});
