
function Content() {
	const [paymentTypes, setPaymentTypes] = useState([{ value: '', text: '' }]);

	useEffect(() => {
			const types = mainState.projectInfo.payment_types.map((payment) => ({
					value: payment.name,
					text: payment.name,
			})) ?? null;

			if (types) {
					setPaymentTypes(types);
			}
	}, [mainState.projectInfo.payment_types]);

	return (
		<div>
				{!mainState.hasSelectedPrepaidSlots && (
						<div className={styles.form_line}>
							<Select formField={formFields.payType} options={paymentTypes} label={paymentTypes.text} activeOption={paymentTypes[0].value} />
						</div>
				)}
		</div>
	)
}


const PaymentDetailsFieldset: FC<IPaymentFieldset> = (props) => {
	const { payments: paymentMethods } = props;

	const [payments, setPayments] = useState(paymentMethods);
	const [valuePayment, setValuePayment] = useState<string>('');

	const lastIndex = payments[payments.length - 1].id || 0;

	const onClickAddPaymentMethod = () => {
			if (valuePayment.trim() !== '') {
					const nextIndex = String(+lastIndex + 1);
					const newElement = createPaymentMethod(valuePayment, nextIndex);

					setPayments([...payments, newElement]);
					setValuePayment('');
			}
	};

	return (
		<div>
			{payments.length && (
				<Flex gap="10px 40px" wrap="wrap" direction={{ desktop: 'row', mobile: 'column' }}>
						{payments.map((paymentMethod) => {
								setValue(`payment_types.${paymentMethod.name}`, false)
								return <Form.Checkbox
										key={paymentMethod.id + paymentMethod.name}
										name={`payment_types.${paymentMethod.name}`}
										value={paymentMethod.name}
										onDelete={onClickRemovePaymentMethod(paymentMethod)}
								>
										{paymentMethod.name}
								</Form.Checkbox>
						})}
				</Flex>
			)}
		</div>
	)
}
