import hostBeakLogo from "../assets/logo-head.svg";
import rightArrow from "../assets/arrow-right-icon.svg";
import TextContent from "./TextContent";
import { Link, useLocation } from "react-router-dom";

import { routes } from "./navigation/routes";

import welcomeLink from "../assets/welcome-link.svg";
import dashboardIcn from "../assets/dashboard-icon.svg";
import salesIcn from "../assets/wallet-icon.svg";
import purchaseIcn from "../assets/Purchase Icon.svg";
import accountingIcn from "../assets/account-icon.svg";
import bankingIcn from "../assets/banking-icon.svg";
import payrollIcn from "../assets/payroll-icon.svg";
import reportIcn from "../assets/report-icon.svg";
import analyticIcn from "../assets/analytic-icon.svg";
import settingsIcn from "../assets/settings-icon.svg";
import logoutIcn from "../assets/logout-icon.svg";
import acceptPayIcn from "../assets/acceptpayment--icon.svg";
import notifyIcn from "../assets/notification--icon.svg";
import userArrowDown from "../assets/user-arrow-down.svg";
import userImg from "../assets/user-picture.svg";

const NavLinkList = ({ href, src, title }) => {
	const { pathname } = useLocation();
	return (
		<Link to={href} className="group flex items-center mb-2" title={title}>
			<div
				className={`p-2 ${
					href === pathname ? "bg-mez-blue rounded-full" : "group-hover:bg-mez-blue group-hover:rounded-full"
				}`}
			>
				<img src={src} alt={title} className="inline w-5  h-5 " />
			</div>
			<TextContent
				title={title}
				fontSize="12px"
				className={`text-write-text3 ml-4 ${href === pathname ? "text-black" : "group-hover:text-black"}`}
			/>
		</Link>
	);
};
export const Layout = ({ children }) => {
	return (
		<div className="flex min-h-screen bg-main-bg pt-4 pb-6">
			<div className="flex flex-col w-2/12 px-3">
				<div className="">
					<div
						className="flex items-center  bg-write-white rounded-3xl px-4 py-2"
						style={{ boxShadow: "0px 8px 18px rgba(0, 0, 0, 0.05)", width: "fit-content" }}
					>
						<img src={hostBeakLogo} alt="Host Beak Logo" className="inline w-7 h-7" />
						<TextContent
							className="text-title__lead text-black mx-2"
							title="HostBeak"
							fontSize="16px"
							fontWeight="400"
							// fontFamily="Inter"
							// block
						/>
						<img src={rightArrow} alt="" className="w-1.5 ml-2" />
					</div>
				</div>
				<div className="pt-4 px-4">
					{/* <div className=""> */}
					<NavLinkList src={welcomeLink} title="Welcome" href />
					<NavLinkList src={dashboardIcn} title="Dashboard" href />
					<NavLinkList src={salesIcn} title="Sales" href />
					<NavLinkList src={purchaseIcn} title="Purchases" href="/add-bill" />
					<NavLinkList src={accountingIcn} title="Accounting" href />
					<NavLinkList src={bankingIcn} title="Banking" href />
					<NavLinkList src={payrollIcn} title="Payroll" href />
					<NavLinkList src={reportIcn} title="Reports" href />
					<NavLinkList src={analyticIcn} title="Analytics" href />
					<NavLinkList src={settingsIcn} title="Settings" href />
					{/* </div> */}
				</div>
				<div>
					<Link to className="group flex items-center m-4" title="Logout">
						<div className="px-2 py-1">
							<img src={logoutIcn} alt="logout" className="inline w-5  h-5 " />
						</div>
						<TextContent title="Logout" fontSize="12px" className="text-black ml-4" />
					</Link>
				</div>
				<div>
					<Link to className=" flex items-center bg-mez-blue m-1 rounded-lg" title="Accept Payments">
						<div className="p-2 rounded-full">
							<img src={acceptPayIcn} alt="Accept Payments" className="inline w-5  h-5 " />
						</div>
						<TextContent title="Accept Payments" fontSize="12px" className="text-white ml-2" />
					</Link>
				</div>
			</div>
			<div className="flex flex-col w-10/12">
				<div className="flex justify-end items-center mx-8">
					<div className="px-1.5 py-1 mx-1 rounded-full cursor-pointer border border-write-text3">
						<img src={notifyIcn} alt="notification" className="inline-block w-4 h-4 " />
					</div>
					<div className="flex items-center cursor-pointer">
						<div className="p-2 mx-1 rounded-full">
							<img src={userImg} alt="username" className="inline-block w-5 h-5 " />
						</div>
						<TextContent title="Ogooluwa" fontSize="12px" className="text-black mr-1" />
						<div className="p-2">
							<img src={userArrowDown} alt="username" className="inline-block w-2 h-2 " />
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-lg bg-write-white mx-2 my-1" style={{ minHeight: "85vh" }}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
