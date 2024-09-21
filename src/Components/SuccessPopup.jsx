// eslint-disable-next-line react/prop-types
function SuccessPopup({message}) {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
                <div className="bg-green-100 border border-green-400 text-green-700 text-2xl font-semibold px-20 py-5 rounded-2xl relativefont-semibold relative" role="alert">
                    <span className="block sm:inline">{message}</span>
                </div>
            </div>
        </>
    )
}

export default SuccessPopup;