const monitSites =[
    "youtube.com",
    "instagram.com",
    "reddit.com",
    "x.com"
]

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!changeInfo.url) {
        return
    }
const url = new URL(changeInfo.url)
const hostname = url.hostname

const isMonitored = monitSites.some((site) => {
    return hostname === site || hostname.endsWith(`.${site}`)
})

if (isMonitored) {
    console.log("Intent should ask the user now.", hostname)

}

})