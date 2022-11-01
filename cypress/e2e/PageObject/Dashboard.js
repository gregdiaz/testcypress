class dashboardSelector
{
    searchTextbox= "#search_query_top"
    searchTextBtn= "#searchbox > button"
    searchResult = ".lighter"
    dashboardBannerImage = ".item-img"
    imagePopularContainer="#homefeatured .product-container"
    popularImages = "homefeatured .left-block"
    popularImageQuickView = "#homefeatured:has(.quick-view-wrapper-mobile) .quick-view-mobile"
    populateQuickViewContainer = ".fancybox-iframe"
    navegationPage = ".navigation_page"
    footerElement = (kind) => {return `#footer .footer-block li a[title*=${kind}]`}
    copyRight = "#footer a[class]"
    newsletter = "#newsletter-input"
    alertMessage = ".container .alert"
}
export default dashboardSelector