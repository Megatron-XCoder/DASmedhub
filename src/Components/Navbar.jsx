import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 text-xl font-medium text-gray-600"
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-xl font-medium text-gray-600"
            >
                <a href="#" className="flex items-center">
                    Patient
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-xl font-medium text-gray-600"
            >
                <a href="#" className="flex items-center">
                    Health Specialist
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-xl font-medium text-gray-600"
            >
                <a href="#" className="flex items-center">
                    About us
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-xl font-medium text-gray-600"
            >
                <a href="#" className="flex items-center">
                    Blog
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="max-h-[768px] w-full overflow-auto">
            <Navbar className="sticky top-0 z-10 w-full max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="lg:ml-14 cursor-pointer py-1.5 text-3xl font-bold"
                    >
                        <span className="text-teal-600">DAS</span>
                        <span className="text-orange-500">medhub</span>
                    </Typography>

                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="gradient"
                                size="md"
                                className="bg-gradient-to-r from-teal-500 to-green-600 mr-14 hidden text-md lg:inline-block"
                            >
                                <span>Book an Appointment</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="gradient" size="sm" className={"bg-gradient-to-r from-teal-500 to-green-600"}>
                            <span>BOOK AN APPOINTMENT</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
}

export default StickyNavbar;
