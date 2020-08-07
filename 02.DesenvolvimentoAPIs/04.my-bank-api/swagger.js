export const swagger = {
	swagger: '2.0',
	info: {
		title: 'my-bank-api',
		description: 'a bank-api test for self learn.',
		version: '1.0.0',
	},
	host: 'localhost:3000',
	tags: [
		{
			name: 'account',
			description: 'description account',
		},
	],
	paths: {
		'/account': {
			get: {
				tags: ['account'],
				summary: 'Get all accounts.',
				description: 'This route is responsable to bring all accounts.',
				responses: {
					'200': {
						description: 'successful operation',
						schema: {
							type: 'array',
							items: {
								$ref: '#/definitions/Account',
							},
						},
					},
					'400': {
						description: 'error operation',
					},
				},
			},
			post: {
				tags: ['account'],
				summary: 'Create new account.',
				description: 'This route is responsable to create a new account.',
				consumes: ['application.json'],
				parameters: [
					{
						in: 'body',
						name: 'body',
						description: 'Account object',
						required: true,
						schema: {
							$ref: '#/definitions/Account',
						},
					},
				],
				responses: {
					'200': {
						description: 'Account Created',
					},
					'400': {
						description: 'Error Occurred',
					},
				},
			},
		},
	},
	definitions: {
		Account: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					example: 'Arthur Meireles',
				},
				balance: {
					type: 'integer',
					example: 600,
				},
			},
			required: ['name', 'balance'],
		},
	},
};
