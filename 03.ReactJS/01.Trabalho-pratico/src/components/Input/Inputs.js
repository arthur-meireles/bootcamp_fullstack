import React, { Component } from 'react';
import { FormField, TextInput, Box } from 'grommet';

export default class Inputs extends Component {
	render() {
		return (
			<Box
				margin={{
					bottom: '10px',
					top: '20px',
					left: '30px',
					right: '30px',
				}}
				direction="column"
			>
				<FormField label="Salário Bruto">
					<TextInput type="number" />
				</FormField>

				<Box direction="row" gap="medium">
					<FormField label="Base INSS" width="medium">
						<TextInput disabled={true} />
					</FormField>

					<FormField label="Desconto INSS" width="medium">
						<TextInput disabled={true} />
					</FormField>

					<FormField label="Base IRPF" width="medium">
						<TextInput disabled={true} />
					</FormField>

					<FormField label="Desconto IRPF" width="medium">
						<TextInput disabled={true} />
					</FormField>
				</Box>
				<FormField label="Salário líquido">
					<TextInput disabled={true} />
				</FormField>
			</Box>
			
		);
	}
}
