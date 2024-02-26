<?php

namespace Dolphin\MinicartCoupon\Plugin\Checkout\CustomerData;

use Magento\Checkout\Model\Session as CheckoutSession;

class Cart
{
    protected $checkoutSession;

    public function __construct(
        CheckoutSession $checkoutSession
    ) {
        $this->checkoutSession = $checkoutSession;
    }

    public function afterGetSectionData(\Magento\Checkout\CustomerData\Cart $subject, array $result)
    {
        $quote = $this->getQuote();
        $result['coupon'] = $quote->getCouponCode();
        return $result;
    }

    /**
     * Get active quote
     *
     * @return \Magento\Quote\Model\Quote
     */
    protected function getQuote()
    {
        return $this->checkoutSession->getQuote();
    }
}
