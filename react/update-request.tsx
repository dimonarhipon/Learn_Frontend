interface IBookingFormProps {
	bookedItem?: IBookingDetails;
	isCreate: MutableRefObject<boolean>;
	onError?: VoidFunction;
	onSuccess?: VoidFunction;
	onDelete?: VoidFunction;
	onCancel?: VoidFunction;
}

const BookingForm: FC<IBookingFormProps> = (props) => {
	const { bookedItem, isCreate, onDelete, onSuccess, onError, onCancel } = props;
	const [updatedBookedItem, setUpdatedBookedItem] = useState<IBookingDetails | null>(bookedItem);

	const isUpdateRef = useRef(false);
	const rentalOrderIdRef = useRef(null);

	const edit = !!updatedBookedItem;
	const comment = updatedBookedItem?.user?.comment ?? '';

	const { generalSettings } = useGetGeneralSettings();

	const { createBooking, isLoading: isLoadingCreate } = useCreateBooking({
			onSuccess: (data) => {
					onSuccess?.();
					toast.success('Бронь успешно создана');

					getActualBooking(data);
					getUpdateLink(data.orders);
			},
			onError: () => {
					onError?.();
					toast.error('При создании брони возникла ошибка. Попробуйте в следующий раз');
			},
	});

	const { updateBooking, isLoading: isLoadingUpdate } = useUpdateBooking({
			onSuccess: (data) => {
					onSuccess?.();
					toast.success('Бронь успешно обновлена');

					getUpdateLink(data.orders);
			},
			onError: () => {
					onError?.();
					toast.error('При обновлении брони возникла ошибка. Попробуйте в следующий раз');
			},
	});

	const formMethods = useForm<IBookingFormValues>({
			defaultValues: edit ? mapDefaultValues(updatedBookedItem) : {},
			resolver: zodResolver(bookingFormScheme),
	});

	const defaultValueDates = useMemo(() => {
			if (edit && updatedBookedItem) {
					const result = updatedBookedItem.orders.flat();
					return result.map((order) => order.from);
			}

			return [];
	}, [updatedBookedItem]);

	const getActualBooking = (data) => {
			setUpdatedBookedItem((prev) => prev = data);
			isUpdateRef.current = true;
	}

	const getUpdateLink = (orders) => {
			const dataUpdated = orders.slice();
			rentalOrderIdRef.current = dataUpdated.flat()[0].rental_order_id;
	}

	const onSubmit = formMethods.handleSubmit(async (formValues: IBookingFormValues) => {
			if (edit) {
					const isPaid = updatedBookedItem.orders[0].is_paid;

					updateBooking({ rental_order_id: updatedBookedItem.user.rental_order_id, ...mapFormValueToRequest(formValues, isPaid) });
			} else {
					createBooking(mapFormValueToRequest(formValues));
					isCreate.current = false;
			}
	});


	// код для проверки
	const watchOrders = formMethods.watch('orders');
	const watchRental = formMethods.watch('rental');
	const watchServices = formMethods.watch('services');

	const prevValuesBookingRef = useRef({
			orders: watchOrders,
			rental: watchRental,
			services: watchServices,
	});

	const isWatch = () => {
			const isRental = JSON.stringify(watchRental) !== JSON.stringify(prevValuesBookingRef.current.rental);
			const isOrders = JSON.stringify(watchOrders) !== JSON.stringify(prevValuesBookingRef.current.orders);
			const isServices = JSON.stringify(watchServices) !== JSON.stringify(prevValuesBookingRef.current.services);

			const isNotEmptyOrders = watchOrders ? Object.keys(watchOrders).length > 0 : false;
			const isNotEmptyServices = watchServices ? Object.values(watchServices)
					.filter((value) => value !== undefined).length > 0 : false;

			if (!isUpdateRef.current && isRental && isOrders) {
					onSubmit()

					prevValuesBookingRef.current.rental = watchRental;
					prevValuesBookingRef.current.orders = watchOrders;
					return;
			}

			if (isUpdateRef.current && isRental) {
					onSubmit();
					prevValuesBookingRef.current.rental = watchRental;
			}
			if (isUpdateRef.current && isNotEmptyOrders && isOrders) {
					onSubmit();
					prevValuesBookingRef.current.orders = watchOrders;
					prevValuesBookingRef.current.services = structuredClone(watchServices);
			}

			if (isUpdateRef.current && isNotEmptyServices && isServices) {
					onSubmit();
					prevValuesBookingRef.current.services = structuredClone(watchServices);
			}
			return;
	}

	if (isCreate.current) setTimeout(isWatch, 1000);

	if (isUpdateRef && !isLoadingCreate && !isLoadingUpdate) setTimeout(isWatch, 2000);

	// конец

	return (
			<Form formMethods={formMethods} onSubmit={onSubmit} className={styles.bookingForm}>
					<ClientInfoFieldset />
					<BookingDetailsFieldset
							timezone={generalSettings.timezone}
							dates={defaultValueDates}
							edit={edit}
							comment={comment}
					/>
					<PaymentDetailsFieldset
							publicId={generalSettings.public_id}
							rentalOrderId={rentalOrderIdRef.current || updatedBookedItem?.user.rental_order_id}
							loading={isLoadingCreate || isLoadingUpdate}
					/>
					<NotificationsFieldset />
					<ActionButtons
							loading={isLoadingCreate || isLoadingUpdate}
							className={edit && styles.bookingForm__actionButton}
							edit={edit}
							onDelete={onDelete}
							onCancel={onCancel}
							bookingId={updatedBookedItem?.user.rental_order_id}
					/>
			</Form>
	);
};

export default BookingForm;
