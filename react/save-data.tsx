
// const defaultOption: Option = { value: '', text: ''}

// function Content() {
// 	const [paymentTypes, setPaymentTypes] = useState<Option>([]);

// 	useEffect(() => {
// 			const types: Option[] = (mainState.projectInfo.payment_types || []).map((payment) => ({
// 					value: payment.name,
// 					text: payment.name,
// 			})) ?? null;

// 			if (types) {
// 					setPaymentTypes(types);
// 			}
// 	}, [mainState.projectInfo.payment_types]);

// 	return (
// 		<div>
// 				{!mainState.hasSelectedPrepaidSlots && (
// 						<div className={styles.form_line}>
// 							<Select formField={formFields.payType} options={paymentTypes.length > 0 ? </Select>} label={paymentTypes.text} activeOption={paymentTypes[0].value} />
// 						</div>
// 				)}
// 		</div>
// 	)
// }


// const PaymentDetailsFieldset: FC<IPaymentFieldset> = (props) => {
// 	const { payments: paymentMethods } = props;

// 	const [payments, setPayments] = useState<Type>(paymentMethods);
// 	const [valuePayment, setValuePayment] = useState('');



// 	const onClickAddPaymentMethod = () => {
// 		const lastIndex = payments.at(-1).id || 0;

// 		if (valuePayment.trim()) {
// 				const nextIndex = String(+lastIndex + 1);
// 				const newElement = createPaymentMethod(valuePayment, nextIndex);

// 				setPayments([...payments, newElement]);
// 				setValuePayment('');
// 		}
// 	};

// 	return (
// 		<div>
// 			{payments.length > 0 && (
// 				<Flex gap="10px 40px" wrap="wrap" direction={{ desktop: 'row', mobile: 'column' }}>
// 						{payments.map((paymentMethod) => {
// 								setValue(`payment_types.${paymentMethod.name}`, false)
// 								return <Form.Checkbox
// 										key={paymentMethod.id + paymentMethod.name}
// 										name={`payment_types.${paymentMethod.name}`}
// 										value={paymentMethod.name}
// 										onDelete={onClickRemovePaymentMethod(paymentMethod)}
// 								>
// 										{paymentMethod.name}
// 								</Form.Checkbox>
// 						})}
// 				</Flex>
// 			)}
// 		</div>
// 	)
// }
