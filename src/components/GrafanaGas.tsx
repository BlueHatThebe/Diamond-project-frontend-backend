import React from "react";

const GrafanaGas = () => {
	return (
		<div style={{ width: "100%", height: "500px" }}>
			<iframe
				src={process.env.NEXT_PUBLIC_GRAFANA_EMBED_LINK3}
				width='100%'
				height='100%'
				frameBorder='0'></iframe>
		</div>
	);
};

export default GrafanaGas;
