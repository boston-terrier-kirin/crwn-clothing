import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (props) => {
	const { price } = props;
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Insl5JS9315F095MdeE4zpBi3o57sGclrNk13u9cy9vSnWhl7bSpXbEWtIGGK8kvYFVYdzOhfkXRuD5obJSfFuh00OcNkdssf';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
