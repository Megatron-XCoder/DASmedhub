// eslint-disable-next-line react/prop-types
function ErrorPopup({message}) {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
                <div className="bg-red-100 bg-transparent-50 border border-red-400 text-red-700 text-2xl font-semibold px-20 py-5 rounded-2xl relative" role="alert">
                    <span className="block sm:inline">{message}</span>
                </div>
            </div>
        </>
    )
}

export default ErrorPopup;