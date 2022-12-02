export const getCloseBanner = () => $('#modal-Website .close');
export const getSearchInput = () => $('.header2021-search-inner input[type="search"]');
export const getSearchButton = () => $('.header2021-search-button button');
export const getAllItems = () => $$('.item-cell');
export const getTab = (tabName) => $('.header2021').$(`.font-s=${tabName}`);
export const getShopLogo = () => $('.header2021-logo-img');

export const getFirstItem = () => $('.page-section-inner .item-img');
export const getAllItemsFromCart = () => $$('.row-body > .item-cells-wrap:not(.empty-cells) > .item-cell:not(.item-removed)');

export const getButton = (buttonName) => $(`button=${buttonName}`);

export const getItemQty = () => $('.item-container .item-qty .form-text');

export const getMessage = () => $('.message-information');