export const getFirstItem = () => $('.page-section-inner .item-img');
export const getAllItemsFromCart = () => $$('.row-body > .item-cells-wrap:not(.empty-cells) > .item-cell:not(.item-removed)');

export const getButton = (buttonName) => $(`button=${buttonName}`);

export const getItemQty = () => $('.item-container .item-qty .form-text');

export const getMessage = () => $('.message-information');