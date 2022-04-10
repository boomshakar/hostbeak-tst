const TextContent = ({ title, className, block, fontFamily = "poppins", fontWeight, fontSize }) => (
	<span style={{ fontSize, fontFamily, fontWeight, display: block && "block" }} className={className}>
		{title}
	</span>
);

export default TextContent;
