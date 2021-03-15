var options = {
    "key": "rzp_test_RrGU3Gb8KAEDLy",
    // Enter the Key ID generated from the Dashboard    
    "amount": "320*100",
    // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    
    "currency": "INR",
    "name": "GIVE FOR GOOD",
    "description": "Test Transaction",
    "image": "https://www.clipartmax.com/png/middle/138-1389413_paypal-clipart-donate-button-donate-button-png.png",
    "order_id": "order_9A33XWu170gUtm",
    //This is a sample Order ID. Pass the `id` obtained in the response of Step 1    
    "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "",
        "email": "",
        "contact": ""
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#6c51f0"
    }
};
var rzp1 = new Razorpay(options); rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});

document.getElementById('razorpay_donate_button').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}