import { useHistory } from "react-router-dom";
import { routes } from "../components/navigation/routes";
import { Divider } from "antd";

const FormInput = ({ row, name, label, placeholder, type, required }) => (
	<>
		{type !== "checkbox" ? (
			<label className={`flex flex-col mb-4 ${row && "w-5/12 "}`}>
				<span className="block text-sm font-medium text-slate-700 mb-2 text-write-text1 text-base">{label}</span>
				<input
					type={type}
					className="border-b-2 hover:border-mez-blue text-mez-blue  outline-0 py-1 placeholder:text-write-text1-fade text-base"
					id={name}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			</label>
		) : (
			<div className={`flex items-center justify-center ${row && "w-5/12 "}`}>
				<input
					// style={{ minWidth: "80%" }}
					className="default:ring-2 indeterminate:text-light-blue "
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
				<label htmlFor={name} className="ml-2 text-write-text1">
					{label}
				</label>
			</div>
		)}
	</>
);

const TextContent = ({ title, className, block, fontFamily = "poppins", fontWeight, fontSize }) => (
	<span style={{ fontSize, fontFamily, fontWeight, display: block && "block" }} className={className}>
		{title}
	</span>
);

const SignUp = () => {
	const history = useHistory();
	return (
		<div className="flex flex-wrap h-screen">
			<div className="md:w-1/2">
				<div id="signup-bg-img" className="w-full h-full"></div>
				{/* <img src={bgImage} alt="signup-img" className="max-w-full h-full" /> */}
				{/* <span>Building exceptional services with Back Office Support and Business Perfomance</span> */}
			</div>
			<div className="md:w-1/2 w-full signup__form-col px-12 py-6 ">
				{/* <FormLayoutDemo /> */}
				<div className="form-title  my-4">
					<TextContent
						className="text-title__lead text-mez-blue"
						title="Create Account"
						fontSize="30px"
						fontWeight="700"
						fontFamily="Inter"
						block
					/>
					<TextContent
						className="text-title__sub text-write-text2"
						title="Build an exceptional business"
						fontSize="16px"
						fontWeight="300"
					/>
					<TextContent className="text-title__sub text-write-text2" title="Build an exceptional business" />
				</div>
				<form>
					<div className="flex flex-wrap justify-between items-center">
						<FormInput row name="firstName" type="text" placeholder="Enter your first Name" label="First Name" />
						<FormInput row name="lastName" type="text" placeholder="Enter your last Name" label="Last Name" />
					</div>
					<FormInput name="phonenumber" type="number" placeholder="Enter your phone number" label="Phone Number" />
					<FormInput name="emailaddress" type="email" placeholder="Enter your email address" label="Email Address" />
					<FormInput name="password" type="password" placeholder="Enter your password" label="Password" />
					<div className="flex justify-between  items-center mb-4">
						<FormInput name="rememberMe" type="checkbox" label="Remember Me" />
						<button className="text-light-blue" onClick={() => {}}>
							Forgot Password?
						</button>
					</div>
					<div className="flex justify-center">
						<button
							onClick={(e) => {
								e.preventDefault();
								history.push(routes.addBill);
							}}
							className="w-9/12 bg-light-blue rounded-lg p-4 text-write-white text-lg text-center"
						>
							Sign up
						</button>
					</div>
					<div>
						<Divider style={{ borderColor: "rgba(196, 196, 196, 0.5)" }}>
							<span className="mr-2 text-write-text1">Got an account?</span>
							<button className="text-light-blue" onClick={() => {}}>
								Sign in
							</button>
						</Divider>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
