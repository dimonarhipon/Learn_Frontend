
const BASE_URL_ADMIN = 'https://booking-dev.pay2me.com/boats_100500';

const MainPage = () => {
    const [showWidget, setShowWidget] = useToggle(false);
    const widgetRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const getBookingDetails = async (order) => {
        const data = await getBookingDetailsById(order.rental_order_id);

        if (!data) return;

        if (data.orders.length === 0) {
            toast.error('При получении данных о бронировании возникла ошибка');
            throw new Error();
        }
    };

    useEffect(() => {
        if (!widgetRef.current) return;

        const oldDoc = widgetRef.current.contentDocument;

        if (!searchParams) return;

        const timer = setInterval(() => {
            const newDoc = widgetRef.current.contentDocument;
            if (newDoc !== oldDoc) return;

            widgetRef.current.contentWindow.location = widgetRef.current.src + '?' + searchParams.toString();
            clearInterval(timer);
        }, 10);

        return () => clearInterval(timer);
    }, [searchParams]);

    const onClickBookingItem = (order) => {
        setSearchParams(order);
        onClickShowWidget();

        if (order.rental_order_id) {
            try {
                getBookingDetails(order);
                widgetRef.current.src = widgetRef.current.src + Routes.EditBook;
            } catch (err) {
                toast.error('При получении данных о бронировании возникла ошибка');
            }
        } else {
            // быстрое создание брони
            widgetRef.current.src = widgetRef.current.src + Routes.QuickBook;
        }
    };

    const clearSearchParams = () => setSearchParams({});

    const onClickShowWidget = () => {
        setShowWidget();
        document.body.style.overflow = 'hidden';
    };

    const onClickHiddenWidget = () => {
        bookingListInvalidateQueries();
        setShowWidget();
        document.body.style.overflow = 'visible';

        widgetRef.current.src = BASE_URL_ADMIN;
        setTimeout(clearSearchParams, 300);
    };

    return (
        <Layout>
            <div className={clsx('widget', showWidget && 'widget--active')}>
                <Button className="closeWidget" onClick={onClickHiddenWidget} leftSide={<CrossIcon />} variant="text" />

                {/* на загрузку setTimeout ? 

                    может вначале на устанавливать BASE_URL_ADMIN?
                */}
                <iframe className="contentWidget" width="600px" src={BASE_URL_ADMIN} loading="lazy" ref={widgetRef}></iframe>
            </div>

            <button onClick={onClickShowWidget}>{'Создать визит'}</button>
            <button onClickBookingItem={onClickBookingItem}>Просмотреть/Создать визит</button>
        </Layout>
    );
};