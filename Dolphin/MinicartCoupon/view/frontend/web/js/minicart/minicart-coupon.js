define([
    'uiComponent',
    'ko',
    'mage/url',
], function (Component, ko, urlBuilder) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magento_Checkout/minicart/minicart-coupon'
        },
        initialize: function () {
            this._super();
            this.couponCode = ko.observable('').extend({
                required: true,
                minLength: 1
            });
            this.validationMessage = ko.observable('');
        },
        couponPostUrl: function () {
            var couponPostUrl = urlBuilder.build('checkout/cart/couponPost');
            if (couponPostUrl) {
                return couponPostUrl;
            }
        },
        isCouponUsed: function () {
            var couponCode = null;
            var cartData = JSON.parse(localStorage.getItem('mage-cache-storage')).cart;
            if (cartData !== undefined) {
                couponCode = cartData.coupon;
            }
            if (couponCode) {
                return 1;
            } else {
                return 0;
            }
        },
        usedCouponCode: function () {
            var couponCode = null;
            var cartData = JSON.parse(localStorage.getItem('mage-cache-storage')).cart;
            if (cartData !== undefined) {
                couponCode = cartData.coupon;
            }
            if (couponCode) {
                return couponCode;
            }
        }
    });
});
