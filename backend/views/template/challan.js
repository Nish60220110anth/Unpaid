module.exports = ({
	 namech,
      rollch,
      depch,
      amountch,
}) => {
	return `
    <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Challan</title>
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<div
			style="
				border: 4px solid #808080;
				width: 80%;
				height: 80%;
				margin: 60px auto 0;
				padding: 35px;
				border: 3px solid steelblue;
				border-radius: 70px 0 70px 0;
				font-size: large;
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
					Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
					sans-serif;
			"
		>
			<div style="padding: 50px">
				<h1 style="text-align: center">Challan</h1>
				<br />
				<br />
				
				<b>Name of the student:</b> ${namech}
				<br />
                <br />
				<br />
				<b>Roll Number:</b> ${rollch}
				<br />
				<br />
                <br />
				<b>Department:</b> ${depch}
				<br />
				<br />
				<br />
				<br />
				<b>Amount to be paid:</b> ${amountch}
				<br />
				<br />
				
			</div>
		</div>
	</body>
</html>
    `;
};
